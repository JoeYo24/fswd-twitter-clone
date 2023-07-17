import React from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, getAuthenticated, createSession } from './requests.js';
import './signIn.scss';

const SignIn = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };

    signInUser(
      user,
      (data) => {
        console.log('Sign in Successful:', data);
        getAuthenticated(
          (data) => {
            console.log('Authentication successful:', data);
          },
          (error) => {
            console.error('Authentication failed:', error);
          }
        );
        createSession(
          user, 
          (data) => {
            console.log('Session created:', data);
            history.push('/feed');
          }
        )
      },
      (error) => {
        console.error('Sign in Failed:', error);
      }
    );
  };

  return (
    <div className="sign-in">
      <div className="container form-container rounded">
        <a className="back-to-home" href="/">
          X
        </a>
        <div className="row">
          <div className="col-12">
            <form className="form-signin" onSubmit={handleSubmit}>
              <img
                src="/WhiteBirdIcon.png"
                alt="Twitter Logo"
                width="45"
                height="45"
                className="d-inline-block align-text-top justify-content-center"
              />
              <h1 className="h3 mb-3 fw-normal">Sign In</h1>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="email"
                required=""
                autoFocus=""
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="username"
                required=""
                autoFocus=""
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="password"
                required=""
              />
              <button
                className="w-50 btn btn-lg btn-primary mt-2 submit-button"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <p>
          Don't have an account? <a href="/users/sign_up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

