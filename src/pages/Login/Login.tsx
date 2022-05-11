import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert("form submitted");
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevFormData: any) => {
      return { ...prevFormData, [name]: value };
    });
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <div className="login-box">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="login-form-element">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={formData.email}
                required
                placeholder="Enter email"
              />
            </div>
            <div className="login-form-element">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                value={formData.password}
                required
                placeholder="Enter password"
              />
            </div>

            <Link to="/signup">New User? Register Now</Link>
            <div className="login-button">
              <button type="submit" value="Submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
