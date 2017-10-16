import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import Header from 'components/Header'
import { setUser } from 'modules/Login'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import FeedContainer from './containers/FeedContainer'

import 'assets/App.css'

const Home = ({ handleChange, setUser, username }) => (
  <div>
    <Header handleChange={handleChange} setUser={setUser} username={username} />
    <div className="container">
      <div className="row">
        <LeftSide />
        <FeedContainer />
        <RightSide />
      </div>
    </div>
  </div>
)

export default compose(
  connect(),
  withState('username', 'handleChange', ''),
  withHandlers({
    setUser: ({ dispatch, username }) => e => {
      e.preventDefault()
      dispatch(setUser(username))
    }
  })
)(Home)
