import axios from "axios";
import { useState } from "react";
import "./index.css";

const validateForm = (data) => {
  const errors = {};
  if (!data.name) errors.name = "Name is required";
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Valid email is required";
  if (!data.message) errors.message = "Message is required";
  return errors;
};

const EnquiryForm = ({ productDetails, setShowEnquiry }) => {
  const { name, id } = productDetails;

  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const onEnquirySubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: userName,
      email: userMail,
      message,
      phone,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/enquiries`, {
        id,
        name: userName,
        email: userMail,
        phone,
        message,
      });

      alert("Enquiry successfully posted!");
      setShowEnquiry(false);
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setShowEnquiry(false)}>
      <div className="enquiry-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={() => setShowEnquiry(false)}
        >
          ✕
        </button>

        <h2 className="enq-title">Enquiry for: {name}</h2>

        <form className="enq-form" onSubmit={onEnquirySubmit}>
          <div className="enq-field">
            <label>Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="enq-field">
            <label>Email</label>
            <input
              type="email"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="enq-field">
            <label>Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="enq-field">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button className="enq-submit-btn" type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
