import React from 'react';

const LoginComponent = ({ setGithubLogin, handleChange }) => (
  <div className="container">
    <div className="jumbotron">
      <h1>Github username</h1>
      <p>
        <input
          type="email"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
        />
      </p>
      <p>
        <a
          className="btn btn-primary btn-lg"
          onClick={setGithubLogin}
          role="button"
        >
          Send
        </a>
      </p>
    </div>
  </div>
);

export default LoginComponent;
