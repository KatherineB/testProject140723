import React, { Component } from 'react';
import './EcStats.css';
import EcStats_Business from "./EcStats_Business";

class EcStats_All extends Component {
  constructor() {
    super();
    
    this.state = { 
		   ecStatsData: []	
		};  
	}
   componentDidMount() {
  fetch('EcStats_Data.json')
     .then(response => response.json())
	 .then(ecStatsData => this.setState({ ecStatsData }));	
   }	
   
  render() {
	const {ecStatsData} = this.state; 	 
	const Test1 = () => ("This is a test");
	
    return (
	     
         <div className="main-div">  
	    
        <div className="title">Economic Data</div>
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
			   ecStatsData.map( (item, index) => {			
					return <tr key={index}>
					<td>{ecStatsData[index].month}</td>
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

export default EcStats_All;

