import React from 'react'
import HeaderComponent from './HeaderComponent'
import TrendsComponent from './TrendsComponent'
import SuggestionsComponent from'./SuggestionsComponent'
import FeedContainer from '../containers/FeedContainer'

import 'assets/App.css'

const HomeComponent = () => (
  <div>
    <HeaderComponent />
    <div className="container">
      <div className="row">
        <TrendsComponent />
        <FeedContainer />
        <SuggestionsComponent />
      </div>
    </div>
  </div>
)

export default HomeComponent
