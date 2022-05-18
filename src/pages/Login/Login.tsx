import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, emailpattern } from "../../constants";
import { login, userError } from "../../redux/authentication/reducer";
import { postRequest } from "../../requests/apiRequest";
import "./Login.scss";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (formData: any) => {
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

  return (
    <div className="login">
      <h3>Login</h3>
      <div className="login__box">
        <div className="login__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__form-element">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailpattern,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="login__text-danger" data-testid="email-error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="login__form-element">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="login__text-danger" data-testid="password-error">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Link to="/signup">New User? Register Now</Link>
            <div className="login__button">
              <button className="button--red" type="submit" value="Submit">
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
