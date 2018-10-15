import React, { Component } from 'react';
import './EcStats.css';

class EcStats_Main extends Component {
  constructor() {
    super();
    
    this.state = { 
		   ecStatsData: []	
		};  
	}
   componentDidMount() {
	// let index = -1;
  fetch('EcStats_Data.json')
     .then(response => response.json())
	 .then(ecStatsData => this.setState({ ecStatsData }));	
	//  .then( ecStatsData => console.log(ecStatsData[2].stocks));
   }	
   
  render() {
	const {ecStatsData} = this.state; 	 
	let index = -1;
    return (
      <div className="main-div">
        <div className="main-title">Economic Data</div>
         <table className="ec-data">
			<tr>
			  <th>Month</th>
			  <th>Stock Index</th>
			  <th>Commodities Index</th>
			  <th>Interest Rate</th>
			  <th>Inflation Rate</th>
			  <th>Currency Disparity</th>
			  <th>Unemployment Rate</th>
			  <th>Consumer Price Index</th>
			  <th>Rental Vacancy Rate</th>
			</tr>
			{		
			   ecStatsData.map(item => {
					index++;
					return <tr><td>{ecStatsData[index].month}</td>
					<td>{ecStatsData[index].stocks}</td>
					<td>{ecStatsData[index].commodities}</td>
					<td>{ecStatsData[index].interest}</td>
					<td>{ecStatsData[index].inflation}</td>
					<td>{ecStatsData[index].currencyDis}</td>
					<td>{ecStatsData[index].unemployment}</td>
					<td>{ecStatsData[index].consPrices}</td>
					<td>{ecStatsData[index].rentalVac}</td>
					</tr>
				}) 
			  }  
		</table>  
         
      </div>
    );
  }
}

export default EcStats_Main;
