import React, { Component } from "react";

class StillSea_JSON_load extends Component {
	constructor() {
    super();
    
    this.state = { 
	       data: null
		};  
       
/*	   	fetch('data/planets.json')
  .then(function(response) {
    console.log(`status: ${response.status}`);
    console.dir(response.body);
    return response.json() 
  })*/
 

	   
	}

	/*fetch('data/planets2.json')
  .then(function(response) {
    return response.json();
  }) 
 .then(function(planetData) {
     alert('test');
     alert(planetData[4].planet);
      document.write(
      `Planet: ${planetData[5].planet} <br/>
      Distance from Sun: ${planetData[5].distFromSun} <br />
      Diameter: ${planetData[5].diameter} `
    );
  }); */
  
  

 componentDidMount() {
      /*      fetch('data/planets2.json')
      .then(response => response.json())
      .then(data => this.setState({ data })); */
	   
 }	  
	 
  
  render() {
	 let planetaryData = [{
		 "planet": "Mercury",
		 "diameter": 4880,
		 "distFromSun": 57.9,
		 "numSatellites": 0,
		 "revTime": "88 days"
		},
		{
		 "planet": "Venus",
		 "diameter": 12100,
		 "distFromSun": 108.2,
		 "numSatellites": 0,
		 "revTime": "224.7 days"
		}]; 
		let index = -1;
    return (
	     
        <div className="section-3">
		    <div className="section-title">Planets</div>
			
			<table className="planets-table">
			<tr>
			  <th>Planet</th>
			  <th>Diameter (km)</th>
			  <th>Distance from Sun (million km)</th>
			  <th>Number of Satellites</th>
			  <th>Time to Revolve Around Sun</th>
			</tr>
			<tr>
			   <td>{planetaryData[0].planet} </td>
			   <td>{planetaryData[0].diameter} </td>	
               <td>{planetaryData[0].distFromSun} </td>
               <td>{planetaryData[0].numSatellites} </td>
               <td>{planetaryData[0].revTime} </td>			   
			</tr>
			<tr>
			   <td>{planetaryData[1].planet} </td>
			   <td>{planetaryData[1].diameter} </td>	
               <td>{planetaryData[1].distFromSun} </td>
               <td>{planetaryData[1].numSatellites} </td>
               <td>{planetaryData[1].revTime} </td>			   
			</tr>
			 {		
			    planetaryData.map(item => {
					index++;
					return <tr><td>{planetaryData[index].planet}</td>
					<td>{planetaryData[index].diameter}</td>
					<td>{planetaryData[index].distFromSun}</td>
					<td>{planetaryData[index].numSatellites}</td>
					<td>{planetaryData[index].revTime}</td>
					</tr>
				})
			  }
			
			</table>
			
			  
        </div>		
    );
  }
}

export default StillSea_JSON_load;