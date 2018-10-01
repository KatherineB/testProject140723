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
            <div className="menu-item"><NavLink exact to="/">Home</NavLink></div>
            <div className="menu-item"><NavLink to="/StillSea_ImgRotate">Section 1</NavLink></div>
            <div className="menu-item"><NavLink to="/StillSea_ImgOverlay">Section 2</NavLink></div>
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
