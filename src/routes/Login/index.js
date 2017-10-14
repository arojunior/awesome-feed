import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import Form from './components/Form'
import { setUser } from 'modules/Login'

const styles = {
  container: {
    marginTop: '5%'
  }
}

const Login = ({ handleChange, setUser }) => (
  <div className="container" style={styles.container}>
    <div className="jumbotron">
      <Form handleChange={handleChange} setUser={setUser} />
    </div>
  </div>
)

export default compose(
  connect(),
  withState('username', 'handleChange', ''),
  withHandlers({
    setUser: ({ router, dispatch, username }) => e => {
      e.preventDefault()
      dispatch(setUser({ username }))
      router.push(`/${username}`)
    }
  })
)(Login)
