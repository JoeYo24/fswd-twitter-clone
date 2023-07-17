import React from 'react';
import './home.scss';

const Home = (props) => (
  <div className="home">
    <div className='row'>
      <div className='col-lg-6 col-12'>
        <div className='home-background'></div>
      </div>
      <div className='col-lg-6 col-12 sign-up-side'>
        <div>
          <nav className='navbar navbar-expand-lg navbar-dark'>
            <a className='navbar-brand' href='/'>
              <img src='/WhiteBirdIcon.png' alt='Twitter Logo' width='45' height='45' className='d-inline-block align-text-top' />
            </a>
          </nav>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-start fw-bolder pt-5 mt-1 ps-1 pb-5 mb-5'>Join Today! or don't</h1>
              <a className='btn btn-lg rounded' href='users/sign_up'>Sign Up</a>
              <h4 className='text-start pt-5 mt-1 ps-1 pb-5'>or</h4>
              <a className='btn btn-lg rounded' href='/users/sign_in'>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row footer-nav'>
      <div className='col-12'>
        <ul className='nav justify-content-center list-inline list-unstyled'>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/help'>Help</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/status'>Status</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/privacy'>Privacy Policy</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/cookies'>Cookies</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/ads'>Ads Info</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/brand'>Brand</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/apps'>Apps</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/advertising'>Advertising</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
