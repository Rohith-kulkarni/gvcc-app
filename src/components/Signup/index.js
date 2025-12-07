import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
const Signup = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [signupName, setSignupName] = useState("");
  const navigate = useNavigate();
  const onSignup = async (e) => {
    e.preventDefault();
    const user = {
      email: signupEmail,
      password: signupPass,
      name: signupName,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      user
    );
    const token = res.data.token;
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <div className="auth-components">
      <h1 className="signup-heading">Welcome, signup to the service</h1>
      <form className="signup-form" onSubmit={onSignup}>
        <div>
          <label htmlFor="signupEmail">Email</label>
          <input
            id="signupEmail"
            onChange={(e) => setSignupEmail(e.target.value)}
            value={signupEmail}
            type={"email"}
            placeholder="Enter your email.."
          />
        </div>
        <div>
          <label htmlFor="signupPass">Password</label>
          <input
            id="signupPass"
            onChange={(e) => setSignupPass(e.target.value)}
            value={signupPass}
            type={"password"}
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="signupName">Name</label>
          <input
            id="signupName"
            type={"text"}
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <div>
          <p>Already registered?</p>
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
