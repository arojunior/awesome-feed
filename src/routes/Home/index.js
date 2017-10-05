import React, {Component} from 'react'
import Header from './Header.js'
import LeftSide from './LeftSide.js'
import MiddleBody from './MiddleBody.js'
import RightSide from './RightSide.js'
import '../../assets/App.css'


export default class App extends Component {
    render () {
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