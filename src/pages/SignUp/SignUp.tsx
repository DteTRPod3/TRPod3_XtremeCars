import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
    pincode: "",
    address: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert("form submitted");
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setSignUpFormData((prevFormData: any) => {
      return { ...prevFormData, [name]: value };
    });
  };
  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <div className="signup-box">
        <div className="signup-form">
          <form onSubmit={handleSubmit} autoComplete="false">
            <div className="signup-form-element">
              <label htmlFor="">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={signUpFormData.name}
                required
                placeholder="Enter name..."
              />
            </div>
            <div className="signup-form-element">
              <label htmlFor="Mobile Number">Mobile Number</label>
              <input
                onChange={handleChange}
                type="text"
                name="contact"
                value={signUpFormData.contact}
                required
                placeholder="Enter contact..."
              />
            </div>
            <div className="signup-form-element">
              <label htmlFor="">Address</label>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                value={signUpFormData.address}
                required
                placeholder="Enter address..."
              />
            </div>
            <div className="signup-form-element">
              <label htmlFor="">PinCode</label>
              <input
                onChange={handleChange}
                type="text"
                name="pincode"
                value={signUpFormData.pincode}
                required
                placeholder="Enter pincode..."
              />
            </div>
            <div className="signup-form-element">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={signUpFormData.email}
                required
                placeholder="Enter email..."
              />
            </div>
            <div className="signup-form-element">
              <label htmlFor="">Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                value={signUpFormData.password}
                required
                placeholder="Enter password..."
              />
            </div>

            <Link to="/login">Already a User? Click here to login</Link>
            <div className="signup-button">
              <button type="submit" value="Submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
