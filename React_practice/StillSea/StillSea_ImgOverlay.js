import React, { Component } from "react";

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

class StillSea_ImgOverlay extends Component {
	constructor() {
    super();

    this.state = { 
	       gd_1: {opacity: '0'},
		   gd_2: {opacity: '0'},	
           gd_3: {opacity: '0'},
		   gd_4: {opacity: '0'},
           gd_5: {opacity: '0'}	   
		};  
       
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
           
    );
  }
}

export default StillSea_ImgOverlay;