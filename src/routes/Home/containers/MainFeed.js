import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import MiddleBody from 'routes/Home/components/MiddleBody'
import { getFollowingUsers } from 'routes/Home/services'

const MainFeed = () => (
  <div>
    <MiddleBody />
  </div>
)

const mapStateToProps = state => ({
  username: state.Login.profile.login
})

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { username, dispatch } = this.props
      if (username) {
        getFollowingUsers({ username, dispatch })
      }
    },
    componentWillReceiveProps(nextProps) {
      const { username, dispatch } = this.props
      if (username !== nextProps.username) {
        getFollowingUsers({ username, dispatch })
      }
    }
  })
)(MainFeed)
