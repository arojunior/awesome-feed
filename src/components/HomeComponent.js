import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ProfileContainer from 'containers/ProfileContainer';
import TrendingReposContainer from 'containers/TrendingReposContainer';
import RepositoriesPageContainer from 'containers/RepositoriesPageContainer';
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
`;

const MiddleColumn = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  max-width: 58%;
  flex-direction: column;
  order: 2;
  align-self: center;
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
        <Route exact path="/" component={FeedContainer} />
        <Route exact path="/repositories" component={RepositoriesPageContainer} />
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
