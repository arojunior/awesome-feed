import React from 'react';
import { GITHUB } from 'constants/index';

const ProfileComponent = ({ profile = {} }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <a href="">
        <img className="img-responsive" alt="" src={profile.user.avatarUrl} />
      </a>
      <div className="row">
        <div className="col-xs-3">
          <h5>
            <small>STARRED</small> <br />
            <a href="">{profile.user.starredRepositories.totalCount}</a>
          </h5>
        </div>
        <div className="col-xs-4">
          <h5>
            <small>FOLLOWING</small> <br />
            <a href={`${GITHUB}/${profile.user.login}/following`}>
              {profile.user.following.totalCount}
            </a>
          </h5>
        </div>
        <div className="col-xs-5">
          <h5>
            <small>FOLLOWERS</small> <br />
            <a href={`${GITHUB}/${profile.user.login}/followers`}>
              {profile.user.followers.totalCount}
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileComponent;
