import React, { Component } from "react";

class StillSea_JSON_load extends Component {
	constructor() {
    super();
    
    this.state = { 
	       
		};  
       
/*	   	fetch('data/planets.json')
  .then(function(response) {
    console.log(`status: ${response.status}`);
    console.dir(response.body);
    return response.json() 
  })*/
 /* .then(function(myJson) {
    document.write(
      `User: ${myJson.name} <br/>
      Email: ${myJson.email} <br />
      Website: ${myJson.website} <br/>
      City: ${myJson.address.city} `
    );
    return myJson
  })
  .then(console.log)*/
	   
	   
	}

	

  
  render() {
    return (
        <div className="section-3">
		    <div className="section-title">Planets</div>
			
			  
        </div>		
    );
  }
}

export default StillSea_JSON_load;