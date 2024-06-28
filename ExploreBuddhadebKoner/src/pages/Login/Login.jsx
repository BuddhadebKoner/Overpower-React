import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1 >Under menrenence</h1>
        <div className="login-card">
          <h2>Login</h2>
          <button className="google-login">Login with Google</button>
          <button className="github-login">Login with GitHub</button>
        </div>
      </div>
    </>
  )
}
