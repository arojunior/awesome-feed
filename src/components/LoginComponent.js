import React from 'react';
import PropTypes from 'prop-types';

const LoginComponent = ({ setGithubLogin, handleChange, onKeyPress, loginRequest }) => (
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
          tabIndex={0}
          onKeyPress={onKeyPress}
        >
          Send
        </a>
      </p>
      {loginRequest}
    </div>
  </div>
);

LoginComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  setGithubLogin: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  loginRequest: PropTypes.string.isRequired,
};

export default LoginComponent;
