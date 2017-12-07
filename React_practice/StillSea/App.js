import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
    super();

    this.state = { 
	       ts1_state: {display: 'inline-block'},
		   ts2_state: {display: 'none'},
		   ts3_state: {display: 'none'},
		   rbA1_state: {backgroundColor: '#fff'},
		   rbA2_state: {backgroundColor: '#fff'},
		   rbA3_state: {backgroundColor: '#fff'}
		};   
	}
	
   radbtnA_1(){
	  this.setState({         
			
			rbA1_state: {backgroundColor: '#446'},
            rbA2_state: {backgroundColor: '#fff'},
            rbA3_state: {backgroundColor: '#fff'},
			ts1_state: {display: 'inline-block'},
		    ts2_state: {display: 'none'},
		    ts3_state: {display: 'none'}
      });
  }
  radbtnA_2(){
	  this.setState({
            rbA1_state: {backgroundColor: '#fff'},
            rbA2_state: {backgroundColor: '#446'},
            rbA3_state: {backgroundColor: '#fff'},
			ts1_state: {display: 'none'},
		    ts2_state: {display: 'inline-block'},
		    ts3_state: {display: 'none'}
      });
  }
  radbtnA_3(){
	  this.setState({
            rbA1_state: {backgroundColor: '#fff'},
            rbA2_state: {backgroundColor: '#fff'},
            rbA3_state: {backgroundColor: '#446'},
			ts1_state: {display: 'none'},
		    ts2_state: {display: 'none'},
		    ts3_state: {display: 'inline-block'}
      });
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
			      <div className="text-slide" style={this.state.ts1_state}>
				       A stitch in time saves nine.
				  </div>
				  <div className="text-slide" style={this.state.ts2_state}>
				       Do not count your chickens before they are hatched.
				  </div>
				  <div className="text-slide" style={this.state.ts3_state}>
				       An ounce of prevention is worth a pound of cure.
				  </div>
				  <div style={{clear:'both'}}></div>
				  <div>
				       <div className="radbtnA-holder" >
							  <div className="radbtnA"  onClick={() => this.radbtnA_1()} style={this.state.rbA1_state}></div>
					   </div>
					   <div className="radbtnA-holder">
							  <div className="radbtnA" onClick={() => this.radbtnA_2()} style={this.state.rbA2_state}></div>
					   </div>
					   <div className="radbtnA-holder">
							  <div className="radbtnA" onClick={() => this.radbtnA_3()} style={this.state.rbA3_state}></div>
					   </div>
					  <div style={{clear:'both'}}></div>
				  </div>
            </div>			
      </div>
    );
  }
}

export default App;
