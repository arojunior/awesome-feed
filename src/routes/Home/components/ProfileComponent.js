import React from 'react'

const ProfileComponent = ({ profile = {} }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <a href="">
        <img className="img-responsive" alt="" src={profile.avatar_url} />
      </a>
      <div className="row">
        <div className="col-xs-3">
          <h5>
            <small>STARRED</small> <br />
            <a href="">1,545</a>
          </h5>
        </div>
        <div className="col-xs-4">
          <h5>
            <small>FOLLOWING</small> <br />
            <a href={profile.following_url}>{profile.following}</a>
          </h5>
        </div>
        <div className="col-xs-5">
          <h5>
            <small>FOLLOWERS</small> <br />
            <a href={profile.followers_url}>{profile.followers}</a>
          </h5>
        </div>
      </div>
    </div>
  </div>
)

export default ProfileComponent
