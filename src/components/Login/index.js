import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
const Login = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPass, setSigninPass] = useState("");
  const navigate = useNavigate();
  const onSignin = async (e) => {
    e.preventDefault();
    const user = { email: signinEmail, password: signinPass };
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      user
    );
    console.log(res.data);
    const token = res.data.token;
    localStorage.setItem("token", token);
    navigate("/");
  };
  return (
    <div className="auth-components">
      <h1 className="signup-heading">Welcome, signup to the service</h1>
      <form className="signup-form" onSubmit={onSignin}>
        <div>
          <label htmlFor="signupEmail">Email</label>
          <input
            id="signupEmail"
            onChange={(e) => setSigninEmail(e.target.value)}
            value={signinEmail}
            type={"email"}
            placeholder="Enter your email.."
          />
        </div>
        <div>
          <label htmlFor="signupPass">Password</label>
          <input
            id="signupPass"
            onChange={(e) => setSigninPass(e.target.value)}
            value={signinPass}
            type={"password"}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>Not registered yet?</p>
          <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
