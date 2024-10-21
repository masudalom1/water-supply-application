import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const isValid = () => {
    if (!email || !password) {
      setErr("Email and password are required!");
      return false;
    } else {
      setErr("");
      return true;
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!isValid()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess(response.data.message);
        clearForm(); // Clear form only if successful
        alert("Logged in successfully!"); // Show alert only if successful
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErr(error.response.data.error);
      } else {
        setErr("Failed to connect to the server");
      }
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleForm}>
          <h2>Login</h2>
          <div className="user_email">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="user_password">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          {err && <div className="error-message">{err}</div>} 
          {success && <div className="success-message">{success}</div>} 
          <div className="user_login">
            <button type="submit">Login</button> 
          </div>
          <div className="register">
            <p>Create account <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
