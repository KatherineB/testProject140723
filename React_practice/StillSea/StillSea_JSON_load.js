import React, { Component } from "react";

class StillSea_JSON_load extends Component {
	constructor() {
    super();
    
    this.state = { 
		   planetaryData2: []	
		};  
	}
	
 componentDidMount() {
	 let index = -1;
     fetch('planets2.json')
     .then(response => response.json())
	 .then(planetaryData2 => this.setState({ planetaryData2 }));	
 }	  
	  
  render() {
	const {planetaryData2} = this.state; 	 
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
			 {		
			   planetaryData2.map(item => {
					index++;
					return <tr><td>{planetaryData2[index].planet}</td>
					<td>{planetaryData2[index].diameter}</td>
					<td>{planetaryData2[index].distFromSun}</td>
					<td>{planetaryData2[index].numSatellites}</td>
					<td>{planetaryData2[index].revTime}</td>
					</tr>
				}) 
			  }  
			</table>  
						  
        </div>		
    );
  }
}

export default StillSea_JSON_load;