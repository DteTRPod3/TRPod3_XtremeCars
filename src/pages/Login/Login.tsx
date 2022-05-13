import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";
import { login, userError } from "../../redux/Authentication/reducer";
import { postRequest } from "../../requests/apiRequest";
import "./Login.scss";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const USERNAME = "Hasher";
  const PASSWORD = "L#(qc{f}TaJu4%4k";
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = postRequest(`${API_URL}users/login`, formData);
    response
      .then((data) => {
        if (data.status !== "401") {
          dispatch(login(data));
          window.alert("form submitted");
          navigate("/");
        } else {
          dispatch(userError(data.message));
          window.alert(data.message);
        }
      })
      .catch((err) => {
        dispatch(userError("error"));
        window.alert("error");
      });
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
