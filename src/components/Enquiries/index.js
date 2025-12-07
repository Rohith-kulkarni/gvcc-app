// Enquiries.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const url = process.env.REACT_APP_BASE_URL + "/enquiries";
        const res = await axios.get(url);
        setEnquiries(res.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    getEnquiries();
  }, []);

  if (loading) return <p className="loading">Loading enquiries...</p>;

  if (enquiries.length === 0)
    return <p className="no-enquiries">No enquiries yet.</p>;

  return (
    <>
      <div className="enquiries-container">
        <div className="header-and-logout">
          <h2 className="enquiries-title">Customer Enquiries</h2>
          <div className="logout-container">
            <button type="button" className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="enquiries-grid">
          {enquiries.map((item) => (
            <div className="enquiry-card" key={item.id}>
              <div className="enquiry-header">
                <h3>{item.name}</h3>
                <span className="enquiry-date">
                  {new Date(item.created_at).toLocaleString()}
                </span>
              </div>

              <p>
                <strong>Email:</strong> {item.email}
              </p>
              {item.phone && (
                <p>
                  <strong>Phone:</strong> {item.phone}
                </p>
              )}

              <p className="message">
                <strong>Message:</strong> {item.message}
              </p>

              <p className="product-id">
                Product ID: <span>{item.product_id}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Enquiries;
