import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
    super();

    this.state = { 
		//logo-box: {backgroundImage: 'url("logo.png")'}
		};   
	}
  render() {
    return (
      <div className="App">
			<div className="App-header">
				  <div className="logo-box">
					   <img className="logo" src="logo.png"/>
				  </div>
				  <div className="main-title">
					   Still Sea
				  </div>
				  <div style={{clear:'both'}}></div>
			</div>    
            <div className="section-1">
            </div>			
      </div>
    );
  }
}

export default App;
