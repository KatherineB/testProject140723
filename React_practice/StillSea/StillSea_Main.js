import React, { Component } from "react";
 import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import StillSea_Home from "./StillSea_Home";
import StillSea_ImgRotate from "./StillSea_ImgRotate";
import StillSea_ImgOverlay from "./StillSea_ImgOverlay";

class StillSea_Main extends Component {	
	
	constructor() {
    super();
    
    this.state = { 
		   active_link_0: {color: '#fff'},
		   active_link_1: {color: '#fff'},
		   active_link_2: {color: '#fff'}		  
		};      
	}
	
  setActiveLink(section){
	  this.setState({
		    active_link_0: {color: '#fff'},
			active_link_1: {color: '#fff'},
			active_link_2: {color: '#fff'}
	   });
	   
	   switch(section){
		   case 0: 
		      this.setState({ active_link_0: {color: '#0f0'} });
			  break;
		   case 1: 
		      this.setState({ active_link_1: {color: '#0f0'} });
			  break;
		   case 2: 
	          this.setState({ active_link_2: {color: '#0f0'} });
			  break;
		   default:
		      alert("Nothing matched in switch");
	   }	   
  }
  
  render() {
    return (
	  <HashRouter>
        <div>
            <div className="App-header">
				  <div className="logo-box">	  
					   <img className="logo" src={ require('./images/logo.png') } />
				  </div>
				  <div className="main-title">
					   Still Sea
				  </div>
				  <div style={{clear:'both'}}></div>
			</div>    
          <div className="menu-bar">
            <div className="menu-item" onClick={() => this.setActiveLink(0)} ><NavLink exact to="/"style={this.state.active_link_0}>Home</NavLink></div>
            <div className="menu-item" onClick={() => this.setActiveLink(1)}><NavLink to="/StillSea_ImgRotate" style={this.state.active_link_1}>Section 1</NavLink></div>
            <div className="menu-item" onClick={() => this.setActiveLink(2)}><NavLink to="/StillSea_ImgOverlay" style={this.state.active_link_2}>Section 2</NavLink></div>
			<div style={{clear:'both'}}></div>
          </div>
          <div className="content">
            <Route exact path="/" component={StillSea_Home}/>
            <Route path="/StillSea_ImgRotate" component={StillSea_ImgRotate}/>
            <Route path="/StillSea_ImgOverlay" component={StillSea_ImgOverlay}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default StillSea_Main;
