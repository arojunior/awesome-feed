import React from 'react'
import Header from 'components/Header'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import MainFeed from './containers/MainFeed'

import 'assets/App.css'

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <LeftSide />
        <MainFeed />
        <RightSide />
      </div>
    </div>
  </div>
)

export default Home
