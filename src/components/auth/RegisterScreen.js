import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    name:'Paul',
    email:'paul@paul.com',
    password:'123456',
    password_confirm:'123456'
  });

  const {name,email,password,password_confirm} = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formValues)
  } 
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
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
}
