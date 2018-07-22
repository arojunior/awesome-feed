import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ProfileContainer from 'containers/ProfileContainer';
import TrendingReposContainer from 'containers/TrendingReposContainer';
import RepositoriesPageContainer from 'containers/RepositoriesPageContainer';
import DevelopersPageContainer from 'containers/DevelopersPageContainer';
import FeedContainer from 'containers/FeedContainer';
import TrendingUsersContainer from 'containers/TrendingUsersContainer';
import HeaderComponent from './HeaderComponent';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px;
  flex-direction: column;
`;

const LeftColumn = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 20%;
  order: 1;
  margin-top: 60px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MiddleColumn = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  max-width: 58%;
  flex-direction: column;
  order: 2;
  align-self: center;
  @media only screen and (max-width: 768px) {
    max-width: 98%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 10px;
  flex-direction: column;
  width: 20%;
  order: 3;
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HomeComponent = ({ handleLogout }) => (
  <Container>
    <HeaderComponent handleLogout={handleLogout} />
    <Row>
      <LeftColumn>
        <ProfileContainer />
        <TrendingReposContainer />
      </LeftColumn>
      <MiddleColumn>
        <Switch>
          <Route exact path="/" component={FeedContainer} />
          <Route path="/repositories" component={RepositoriesPageContainer} />
          <Route path="/developers" component={DevelopersPageContainer} />
        </Switch>
      </MiddleColumn>
      <RightColumn>
        <TrendingUsersContainer />
      </RightColumn>
    </Row>
  </Container>
);

HomeComponent.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HomeComponent;
