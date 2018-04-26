import React from 'react';
import styled from 'styled-components';
import HeaderComponent from './HeaderComponent';
import TrendsComponent from './TrendsComponent';
import SuggestionsComponent from './SuggestionsComponent';
import FeedContainer from '../containers/FeedContainer';

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
        <TrendsComponent />
      </LeftColumn>
      <MiddleColumn>
        <FeedContainer />
      </MiddleColumn>
      <RightColumn>
        <SuggestionsComponent />
      </RightColumn>
    </Row>
  </Container>
);

export default HomeComponent;
