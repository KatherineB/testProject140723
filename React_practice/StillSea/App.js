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
					   <img className="logo" src={ require('./images/logo.png') } />
				  </div>
				  <div className="main-title">
					   Still Sea
				  </div>
				  <div style={{clear:'both'}}></div>
			</div>    
			
            <div className="section-1">
			      <div className="text-slide" id="ts01">
				       A stitch in time saves nine.
				  </div>
				  <div className="text-slide" id="ts02">
				       Better late than never.
				  </div>
				  <div className="text-slide" id="ts03">
				       An ounce of prevention is worth a pound of cure.
				  </div>
				  <div style={{clear:'both'}}></div>
				  <div>
				       <div className="radbtnA-holder">
							  <div className="radbtnA" onClick={() => this.radbtnA_1()}></div>
					   </div>
					   <div className="radbtnA-holder">
							  <div className="radbtnA" onClick={() => this.radbtnA_2()}></div>
					   </div>
					   <div className="radbtnA-holder">
							  <div className="radbtnA" onClick={() => this.radbtnA_3()}></div>
					   </div>
					  <div style={{clear:'both'}}></div>
				  </div>
            </div>			
      </div>
    );
  }
}

export default App;
