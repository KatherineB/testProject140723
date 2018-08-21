import React, { Component } from 'react';
import './App.css';

var chkBoxStateTracker = (function () {
	var cbStates = [1,1,1,1,1];
    return {
			on: function(graphNo) {
			   cbStates[graphNo-1] = 1;
			},
			off: function(graphNo) {
			   cbStates[graphNo-1] = 0;
			},
			state: function(graphNo) {
			   return cbStates[graphNo-1];
			}
    };   
})();	

class App extends Component {
	constructor() {
    super();
    
    this.state = { 
	       ts1_state: {display: 'inline-block'},
		   ts2_state: {display: 'none'},
		   ts3_state: {display: 'none'},
		   rbA1_state: {backgroundColor: '#fff'},
		   rbA2_state: {backgroundColor: '#fff'},
		   rbA3_state: {backgroundColor: '#fff'},
	       gd_1: {opacity: '0'},
		   gd_2: {opacity: '0'},	
           gd_3: {opacity: '0'},
		   gd_4: {opacity: '0'},
           gd_5: {opacity: '0'}	   
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
  cb2_1(){
	  if(chkBoxStateTracker.state(1)){
		  this.setState({
		    gd_1: {opacity: '1'}
		  });
		  chkBoxStateTracker.off(1);
	  }
	  else{
		  this.setState({
		    gd_1: {opacity: '0'}
		  });
		  chkBoxStateTracker.on(1);
	  }
  }
  cb2_2(){    
	   if(chkBoxStateTracker.state(2)){
		  this.setState({
			gd_2: {opacity: '1'}
		  });
		chkBoxStateTracker.off(2);
	   }
	   else{
		  this.setState({
			gd_2: {opacity: '0'}
		  });
		 chkBoxStateTracker.on(2);
	   }   
  }
  cb2_3(){
	  if(chkBoxStateTracker.state(3)){
		  this.setState({
			gd_3: {opacity: '1'}
		  });
		chkBoxStateTracker.off(3);
	   }
	   else{
		  this.setState({
			gd_3: {opacity: '0'}
		  });
		 chkBoxStateTracker.on(3);
	   }   
  }
  cb2_4(){
	  if(chkBoxStateTracker.state(4)){
		  this.setState({
			gd_4: {opacity: '1'}
		  });
		chkBoxStateTracker.off(4);
	   }
	   else{
		  this.setState({
			gd_4: {opacity: '0'}
		  });
		 chkBoxStateTracker.on(4);
	   }   
  }
  cb2_5(){
	  if(chkBoxStateTracker.state(5)){
		  this.setState({
			gd_5: {opacity: '1'}
		  });
		chkBoxStateTracker.off(5);
	   }
	   else{
		  this.setState({
			gd_5: {opacity: '0'}
		  });
		 chkBoxStateTracker.on(5);
	   }   
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
							  <div className="radbtnA" onClick={() => this.radbtnA_1()} style={this.state.rbA1_state}></div>
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
            <div className="section-2">	
			      <div className="sec-2-content">
					  <div className="graph-div">
						  <img className="graph-grid" src={ require('./images/grid.png') } />
						  <img className="graph-data" id="gd1" style={this.state.gd_1} src={ require('./images/data1.png') } />
						  <img className="graph-data" id="gd2" style={this.state.gd_2} src={ require('./images/data2.png') } />
						  <img className="graph-data" id="gd3" style={this.state.gd_3} src={ require('./images/data3.png') } />
						  <img className="graph-data" id="gd4" style={this.state.gd_4} src={ require('./images/data4.png') } />
						  <img className="graph-data" id="gd5" style={this.state.gd_5} src={ require('./images/data5.png') } />
					  </div>
					  <div className="checkbox-div">
							<div className="checkbox-holder">
								  <div className="checkbox-wrap">
									  <input className="chkbox2" id="cb2_1" type="checkbox" onClick={() => this.cb2_1()} style={this.state.cb2_1_state}/>
									  <label for="cb2_1" className="chkbox2-label">Graph 1</label>
									  <div style={{clear:'both'}}></div>
								  </div>
								  <div className="checkbox-wrap">				
								     <input className="chkbox2" id="cb2_2" type="checkbox" onClick={() => this.cb2_2()} style={this.state.cb2_2_state}/>
									  <label for="cb2_2" className="chkbox2-label">Graph 2</label>
									  <div style={{clear:'both'}}></div>
								  </div>
								  <div className="checkbox-wrap">		  
									  <input className="chkbox2" id="cb2_3" type="checkbox" onClick={() => this.cb2_3()} style={this.state.cb2_3_state}/>
									  <label for="cb2_3" className="chkbox2-label">Graph 3</label>
									  <div style={{clear:'both'}}></div>
								  </div>
								  <div className="checkbox-wrap">					
								      <input className="chkbox2" id="cb2_4" type="checkbox" onClick={() => this.cb2_4()} style={this.state.cb2_4_state}/>
									  <label for="cb2_4" className="chkbox2-label">Graph 4</label>
									  <div style={{clear:'both'}}></div>
								  </div>
								  <div className="checkbox-wrap">		  
									  <input className="chkbox2" id="cb2_5" type="checkbox" onClick={() => this.cb2_5()} style={this.state.cb2_5_state}/>
									  <label for="cb2_5" className="chkbox2-label">Graph 5</label>
									  <div style={{clear:'both'}}></div>
								  </div>
							</div>
					  </div>
					  <div style={{clear:'both'}}></div>
				  </div>  
            </div>	
            <div className="section-3">	
            </div>			
      </div>
    );
  }
}

export default App;
