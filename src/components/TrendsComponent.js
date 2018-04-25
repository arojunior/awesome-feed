import React from 'react';
import ProfileContainer from 'containers/ProfileContainer';

const LeftSide = () => (
  <div>
    <ProfileContainer />
    <div className="panel panel-default panel-custom">
      <div className="panel-heading">
        <h3 className="panel-title">
          Trends
          <small>
            <a href="">repos</a>
          </small>
        </h3>
      </div>

      <div className="panel-body">
        <ul className="list-unstyled">
          <li>
            <a href="">apple / darwin-xnu</a>
          </li>
          <li>
            <a href="">Shopify / draggable</a>
          </li>
          <li>
            <a href="">mbeaudru / modern-js-cheatsheet</a>
          </li>
          <li>
            <a href="">hmemcpy / milewski-ctfp-pdf</a>
          </li>
          <li>
            <a href="">yangshun / tech-interview-handbook</a>
          </li>
          <li>
            <a href="">lllyasviel / style2paints</a>
          </li>
          <li>
            <a href="">LisaDziuba / Marketing-for-Engineers</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default LeftSide;
