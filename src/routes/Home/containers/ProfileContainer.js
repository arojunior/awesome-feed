import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import ProfileComponent from 'routes/Home/components/ProfileComponent'

const ProfileContainer = ({ profile }) => <ProfileComponent profile={profile} />

const mapStateToProps = state => ({
  profile: state.Login.profile
})

export default compose(connect(mapStateToProps))(ProfileContainer)
