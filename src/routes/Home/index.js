import React, { Component } from 'react'
import Header from '../../components/Header'
import LeftSide from './components/LeftSide'
import MiddleBody from './components/MiddleBody'
import RightSide from './components/RightSide'
import '../../assets/App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <LeftSide />
            <MiddleBody />
            <RightSide />
          </div>
        </div>
      </div>
    )
  }
}
