import { useState } from "react";
import "./register.css";
import axios from "axios";

function Register() {
  // use state 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
// check form validation
  const validateForm = () => {
    if (!firstname || !lastname || !email || !password) {
      setErr("All fields are required!");
      setIsFormValid(false);
      return false;
    } else {
      setErr("");
      setIsFormValid(true);
      return true;
    }
  };

  // clear form 
  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

// data handaling 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
// sent the to backend using axios 
    try {
      const response = await axios.post("http://localhost:3000/register", {
        firstname,
        lastname,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess(response.data.message);
        clearForm(); // Clear form only if successful
        alert("Account created!"); // Show alert only if successful
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
    <div className="register_container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {err && <p className="err">{err}</p>}
        {success && <p className="success">{success}</p>}
        <div className="first_name">
          <label htmlFor="firstname">First Name:</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
          />
        </div>
        <div className="last_name">
          <label htmlFor="lastname">Last Name:</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
