import React, { Component } from 'react';

import Sidebar from "./sidebar"
import Navigation from "./navigation"

import "./style.css"


class Home extends Component {

	constructor(props) {
	    super()

	    this.state = {
	      showSidebar: false
	    }

	    // bindings
	    this.handleSideBar = this.handleSideBar.bind(this)
	}

	handleSideBar(prevState) {
	    this.setState(prevState => ({
	      showSidebar: !prevState.showSidebar
	    }))
	}

	render(){

		const {showSidebar} = this.state

		return(
			<div> 

				<div className="App">
			        <Navigation sideBar={this.handleSideBar} />
			        <Sidebar toggle={showSidebar} sideBar={this.handleSideBar} />
		      	</div>

			</div>
		)
	}
}

export default Home;