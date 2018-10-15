import React, { Component } from 'react';
import './EcStats.css';
import {Route,NavLink,HashRouter} from "react-router-dom";
import EcStats_All from "./EcStats_All";
import EcStats_Business from "./EcStats_Business";
import EcStats_Society from "./EcStats_Society";

class EcStats_Main extends Component {
  
   
  render() {

    return (
	      <HashRouter>
         <div className="main-div">  
	     <div className="nav-links">
            <div className="link" ><NavLink exact to="/EcStats_All">Economic Statistics</NavLink></div>
            <div className="link" ><NavLink to="/EcStats_Business" >Business</NavLink></div>
            <div className="link" ><NavLink to="/EcStats_Society" >Society</NavLink></div>
			<div style={{clear:'both'}}></div>
          </div>
	      <div className="content">
            <Route exact path="/EcStats_All" component={EcStats_All}/>
            <Route path="/EcStats_Business" component={EcStats_Business}/>
            <Route path="/EcStats_Society" component={EcStats_Society}/>
          </div>
       
         
      </div>
	  </HashRouter>
    );
  }
}

export default EcStats_Main;
