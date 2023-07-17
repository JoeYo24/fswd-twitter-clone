import React from "react";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import { createUser, getAuthenticated, createSession } from "./requests.js";
import "./signIn.scss";

const SignUp = (props) => {
  const history = useHistory();
  
  const handleSignUp = (event) => {
    event.preventDefault();

    const email = $('.form-email').val();
    const username = $('.form-username').val();
    const password = $('.form-password').val();
  

    const userData = {
      user: {
        email,
        username,
        password
      }
    };

    createUser(userData);
    getAuthenticated();
    createSession(userData);
    history.push('/feed')
  };

  return (
    <div className="sign-up">
      <div className='container form-container rounded'>
        <a className='back-to-home' href='/'>X</a>
        <div className='row'>
          <div className='col-12'>
            <form className='form-signup' onSubmit={handleSignUp}>
              <img src='/WhiteBirdIcon.png' alt='Twitter Logo' width='45' height='45' className='d-inline-block align-text-top justify-content-center' />
              <h1 className='h3 mb-3 fw-normal'>Create an Account</h1>
              <input type='text' className='form-control form-email mb-3' placeholder='email' required='' autoFocus='' />
              <input type='text' className='form-control form-username mb-3' placeholder='username' required='' autoFocus='' />
              <input type='password' className='form-control form-password mb-3' placeholder='password' required='' />
              <button className='w-50 btn btn-lg btn-primary mt-2 submit-button' type='submit'>Sign Up</button>
            </form>
          </div>
        </div>
        <p>Already have an account? <a href='/users/sign_in'>Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;

