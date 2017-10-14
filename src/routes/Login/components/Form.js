import React from 'react'

const LoginForm = ({ handleChange, setUser }) => (
  <form onSubmit={setUser}>
    <div className="form-group">
      <label>Username</label>
      <input
        type="text"
        className="form-control"
        onChange={e => handleChange(e.target.value)}
        id="username"
        placeholder="Username"
      />
    </div>
    <button type="submit" className="btn btn-default">
      Submit
    </button>
  </form>
)

export default LoginForm
