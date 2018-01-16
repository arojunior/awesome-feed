import React from 'react'
import Header from 'components/Header'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import FeedContainer from '../containers/FeedContainer'

import 'assets/App.css'

const HomeComponent = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <LeftSide />
        <FeedContainer />
        <RightSide />
      </div>
    </div>
  </div>
)

export default HomeComponent
