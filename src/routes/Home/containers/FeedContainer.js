import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import FeedComponent from 'routes/Home/components/FeedComponent'
import { getFollowingUsers } from 'routes/Home/services'

const MainFeed = ({ activity }) => (
  <div className="col-sm-6">
    <div className="panel panel-info">
      <div className="panel-body">
        <FeedComponent activity={activity} />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  username: state.Login.profile.login,
  activity: state.Github.activity
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
