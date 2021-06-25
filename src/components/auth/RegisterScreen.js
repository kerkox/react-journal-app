import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { types } from "../../types/types";
import { useDispatch } from "react-redux";
import { setError } from "../../actions/ui";
import { useSelector } from "react-redux";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Paul",
    email: "paul@paul.com",
    password: "123456",
    password_confirm: "123456",
  });

  const { name, email, password, password_confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password_confirm || password.length < 6) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch({
      type: types.uiRemoveError,
    });
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          onChange={handleInputChange}
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          onChange={handleInputChange}
          value={email}
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          onChange={handleInputChange}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          onChange={handleInputChange}
          value={password_confirm}
          type="password"
          placeholder="Confirm password"
          name="password_confirm"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
