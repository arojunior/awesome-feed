import React from 'react';
import PropTypes from 'prop-types';
import { GITHUB } from '../constants';

const ProfileComponent = ({ profile: { getProfile: user } }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <a href="">
        <img className="img-responsive" alt="" src={user.avatarUrl} />
      </a>
      <div className="row">
        <div className="col-xs-3">
          <h5>
            <small>STARRED</small> <br />
            <a href="">{user.starredRepositories}</a>
          </h5>
        </div>
        <div className="col-xs-4">
          <h5>
            <small>FOLLOWING</small> <br />
            <a href={`${GITHUB}/${user.login}/following`}>
              {user.following}
            </a>
          </h5>
        </div>
        <div className="col-xs-5">
          <h5>
            <small>FOLLOWERS</small> <br />
            <a href={`${GITHUB}/${user.login}/followers`}>
              {user.followers}
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
);

ProfileComponent.propTypes = {
  profile: PropTypes.shape({}),
};

ProfileComponent.defaultProps = {
  profile: {},
};

export default ProfileComponent;
