import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
          squareNumbers: [ [0,0,0,0,0] , [0,0,0,0,0] , [0,0,0,0,0] ],
		  targetNumbers: [0,0,0,0,0],
		  results: [0,0,0],
		  inputValueN_0_0: '',
		  inputValueN_0_1: '',
		  inputValueN_0_2: '',
		  inputValueN_0_3: '',
		  inputValueN_0_4: '',
		  row: 0,
		  totalRight: [0,0,0,0,0]
		 };
  }
   squaresN_0_0(evt) {
    this.setState({
      inputValueN_0_0: evt.target.value,
	  squaresN_0_0: evt.target.value
    });
   }
   squaresN_0_1(evt) {
    this.setState({
      inputValueN_0_1: evt.target.value,
	  squaresN_0_1: evt.target.value
    });
   }
   squaresN_0_2(evt) {
    this.setState({
      inputValueN_0_2: evt.target.value,
	  squaresN_0_2: evt.target.value
    });
   }
   squaresN_0_3(evt) {
    this.setState({
      inputValueN_0_3: evt.target.value,
	  squaresN_0_3: evt.target.value
    });
   }
   squaresN_0_4(evt) {
    this.setState({
      inputValueN_0_4: evt.target.value,
	  squaresN_0_4: evt.target.value
    });
   }
  checkGuess(){
	  const results = this.state.results;
	  const squareNumbers = this.state.squareNumbers;
	  const targetNumbers = this.state.targetNumbers;
	  const totalRight = this.state.totalRight;
	  
     if(3 == targetNumbers[0]){
		 totalRight[0]++;
	 }
	  
	 this.setState({
		    result_0: totalRight[0]
     });
/*	this.setState({
		   result_1: targetNumbers[0]
     });	  */
		  
/*	this.setState({
		   squaresN_0_0: squareNumbers[0][0]
     });
	 this.setState({
		   squaresN_0_1: squareNumbers[0][1]
     });
	 this.setState({
		   squaresN_0_2: squareNumbers[0][2]
     });
	 this.setState({
		   squaresN_0_3: squareNumbers[0][3]
     });
	 this.setState({
		   squaresN_0_4: squareNumbers[0][4]
     });*/
  }
  
  newGame() {
	  
	  const targetNumbers = this.state.targetNumbers;
	  for (var k = 0; k<5; k++){
			  targetNumbers[k] = Math.floor((Math.random() * 3) + 1)
		  }
		  alert(targetNumbers[0] + " " + targetNumbers[1] + " " + targetNumbers[2] + " " + targetNumbers[3] + " " + targetNumbers[4]);
  }

  
	render()  {
		
		return(
				<div className="App">
				    <div className="App-header">
					  Sequence
					</div>
					<div className="seq-main">
						<div className="guess-box-header">
						  Guesses
						</div>
						<div className="guess-box">				  
						<table> 
						  <tr> Line 1 </tr>
						  <tr>			
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_0_0} onChange={evt => this.squaresN_0_0(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_0_1} onChange={evt => this.squaresN_0_1(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_0_2} onChange={evt => this.squaresN_0_2(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_0_3} onChange={evt => this.squaresN_0_3(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_0_4} onChange={evt => this.squaresN_0_4(evt)}/></td>						
						  </tr>
						  <tr> Line 2 </tr>
						  <tr>			
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_1_0} onChange={evt => this.squaresN_1_0(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_1_1} onChange={evt => this.squaresN_1_1(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_1_2} onChange={evt => this.squaresN_1_2(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_1_3} onChange={evt => this.squaresN_1_3(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_1_4} onChange={evt => this.squaresN_1_4(evt)}/></td>						
						  </tr>
						  <tr> Line 3 </tr>
						  <tr>			
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_2_0} onChange={evt => this.squaresN_2_0(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_2_1} onChange={evt => this.squaresN_2_1(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_2_2} onChange={evt => this.squaresN_2_2(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_2_3} onChange={evt => this.squaresN_2_3(evt)}/></td>
							<td><input type="text" className="number-box" id="n1" value={this.state.squaresN_2_4} onChange={evt => this.squaresN_2_4(evt)}/></td>						
						  </tr>
						</table> 
						</div>
						<div className="results-box">
							 <table>
							  <tr> Result 1</tr>
							  <tr>
								<td> <div className="result-number">{this.state.result_0}</div></td>
							  </tr>
							  <tr> Result 2</tr>
							  <tr>
								<td> <div className="result-number">{this.state.result_1}</div></td> 
							  </tr>
							  <tr> Result 3</tr>
							  <tr>
								<td> <div className="result-number">{this.state.result_2}</div></td>
							  </tr>
							 </table>
						</div>
						<div style={{clear:'both'}}></div>
						<div className="button" onClick={() => this.checkGuess()}>Enter Guess</div>
						<div className="button" onClick={() => this.newGame()}>New Game</div>
					</div>	
				
				</div>
				
				
	    );
		
	}
}

export default App;
