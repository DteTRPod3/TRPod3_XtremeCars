import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  API_URL,
  capitalLetterPattern,
  emailpattern,
  lowerLetterPattern,
  numbersPattern,
  pincodePattern,
  specialCharacterPattern,
} from "../../constants";
import { signup, userError } from "../../redux/authentication/reducer";
import { postRequest } from "../../requests/apiRequest";
import "./SignUp.scss";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const { dirtyFields } = useFormState({
    control,
  });
  const watchPassword = watch("password");

  const onSubmit = (formData: any) => {
    const response = postRequest(`${API_URL}users`, formData);
    response
      .then((data) => {
        if (data.status !== "401") {
          dispatch(signup(data));
          window.alert("form submitted");
          navigate("/");
        } else {
          dispatch(userError(data.message));
          window.alert(data.message);
        }
      })
      .catch((err) => {
        dispatch(userError("Error"));
        window.alert("error");
      });
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="signup-box">
        <div className="signup-form">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
            <div className="signup-form__input-element-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter name..."
              />
              {errors.name && (
                <p
                  className="signup__error-text--danger"
                  data-testid="name-error"
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="signup-form__input-element-group">
              <label htmlFor="Mobile Number">Mobile Number</label>
              <input
                type="text"
                {...register("contact", {
                  required: "Mobile Number is required",
                  minLength: {
                    value: 10,
                    message: "Mobile number cannot be less than 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mobile number cannot be more than 10 digits",
                  },
                })}
                placeholder="Enter contact..."
              />
              {errors.contact && (
                <p
                  className="signup__error-text--danger"
                  data-testid="contact-error"
                >
                  {errors.contact.message}
                </p>
              )}
            </div>
            <div className="signup-form__input-element-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                {...register("address")}
                placeholder="Enter address..."
              />
            </div>
            <div className="signup-form__input-element-group">
              <label htmlFor="pincode">PinCode</label>
              <input
                type="text"
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: {
                    value: pincodePattern,
                    message: "Pin code is invalid",
                  },
                })}
                placeholder="Enter pincode..."
              />
              {errors.pincode && (
                <p
                  className="signup__error-text--danger"
                  data-testid="pincode-error"
                >
                  {errors.pincode.message}
                </p>
              )}
            </div>
            <div className="signup-form__input-element-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter email..."
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailpattern,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p
                  className="signup__error-text--danger"
                  data-testid="email-error"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="signup-form__input-element-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    lowercase: (value) =>
                      lowerLetterPattern.test(value) ||
                      "The password must contain one lower case letter",
                    uppercase: (value) =>
                      capitalLetterPattern.test(value) ||
                      "The password must contain one upper case letter",
                    minlength: (value) =>
                      value.length >= 8 ||
                      "The password length must be atleast 8",
                    specialCharacter: (value) =>
                      specialCharacterPattern.test(value) ||
                      `The password must contain a special character (! @ # $ % & ? / : ; . , " ')`,
                    numbers: (value) =>
                      numbersPattern.test(value) ||
                      "The password must contain a number",
                  },
                })}
                placeholder="Enter password..."
              />
              {errors?.password?.types["required"] && (
                <p
                  className="signup__error-text--danger"
                  data-testid="required-error"
                >
                  {errors?.password?.types["required"]}
                </p>
              )}
              {errors?.password?.types["lowercase"] && dirtyFields["password"] && (
                <p
                  className="signup__error-text--danger"
                  data-testid="lowercase-error"
                >
                  {errors?.password?.types["lowercase"]}
                </p>
              )}
              {!errors?.password?.types["lowercase"] &&
                dirtyFields["password"] && (
                  <p
                    className="signup__text--success"
                    data-testid="password-success"
                  >
                    The password must contain one lower case letter
                  </p>
                )}
              {errors?.password?.types["uppercase"] && dirtyFields["password"] && (
                <p
                  className="signup__error-text--danger"
                  data-testid="uppercase-error"
                >
                  {errors?.password?.types["uppercase"]}
                </p>
              )}
              {!errors?.password?.types["uppercase"] &&
                dirtyFields["password"] && (
                  <p
                    className="signup__text--success"
                    data-testid="password-success"
                  >
                    The password must contain one upper case letter
                  </p>
                )}
              {errors?.password?.types["minlength"] && dirtyFields["password"] && (
                <p
                  className="signup__error-text--danger"
                  data-testid="address-error"
                >
                  {errors?.password?.types["minlength"]}
                </p>
              )}
              {!errors?.password?.types["minlength"] &&
                dirtyFields["password"] && (
                  <p
                    className="signup__text--success"
                    data-testid="password-success"
                  >
                    The password length must be atleast 8
                  </p>
                )}
              {errors?.password?.types["numbers"] && dirtyFields["password"] && (
                <p
                  className="signup__error-text--danger"
                  data-testid="number-error"
                >
                  {errors?.password?.types["numbers"]}
                </p>
              )}
              {!errors?.password?.types["numbers"] && dirtyFields["password"] && (
                <p
                  className="signup__text--success"
                  data-testid="password-success"
                >
                  The password must contain a number
                </p>
              )}
              {errors?.password?.types["specialCharacter"] &&
                dirtyFields["password"] && (
                  <p
                    className="signup__error-text--danger"
                    data-testid="character-error"
                  >
                    {errors?.password?.types["specialCharacter"]}
                  </p>
                )}
              {!errors?.password?.types["specialCharacter"] &&
                dirtyFields["password"] && (
                  <p
                    className="signup__text--success"
                    data-testid="password-success"
                  >
                    The password must contain a special character (! @ # $ % & ?
                    / : ; . , " ')
                  </p>
                )}
            </div>

            <div className="signup-form__input-element-group">
              <label htmlFor="confirm-password">Re-enter the Password</label>
              <input
                type="password"
                {...register("confirmpassword", {
                  required: "Please re-enter the password",
                  validate: (value) =>
                    value === watchPassword || "Password does not match",
                })}
                placeholder="Re-enter the password..."
              />
              {errors.confirmpassword && (
                <p
                  className="signup__error-text--danger"
                  data-testid="confirm-error"
                >
                  {errors.confirmpassword.message}
                </p>
              )}
              {!errors.confirmpassword &&
                dirtyFields["password"] &&
                dirtyFields["confirmpassword"] && (
                  <p className="signup__text--success">Password match</p>
                )}
            </div>

            <Link to="/login">Already a User? Click here to login</Link>
            <div className="signup__button">
              <button className="button--red" type="submit" value="Submit">
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
