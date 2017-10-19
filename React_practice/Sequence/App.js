import React, { Component } from 'react';
import './App.css';

 var add = (function () {
    var counter = -1;
    return function () {return counter += 1;}
    })();	
	
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {        
		  targetNumbers: [0,0,0,0,0],
		  guesses: [0,0,0,0,0],
		  div_state: {display: 'none'},
		  inst_state: {display: 'none'},
		  inputValueN_0_0: '',
		  inputValueN_0_1: '',
		  inputValueN_0_2: '',
		  inputValueN_0_3: '',
		  inputValueN_0_4: '',
		  inputValueN_1_0: '',
		  inputValueN_1_1: '',
		  inputValueN_1_2: '',
		  inputValueN_1_3: '',
		  inputValueN_1_4: '',
		  inputValueN_2_0: '',
		  inputValueN_2_1: '',
		  inputValueN_2_2: '',
		  inputValueN_2_3: '',
		  inputValueN_2_4: '',
		  inputValueN_3_0: '',
		  inputValueN_3_1: '',
		  inputValueN_3_2: '',
		  inputValueN_3_3: '',
		  inputValueN_3_4: '',
		  inputValueN_4_0: '',
		  inputValueN_4_1: '',
		  inputValueN_4_2: '',
		  inputValueN_4_3: '',
		  inputValueN_4_4: '',

		  totalRight: [0,0,0,0,0]
		 };

		  const targetNumbers = this.state.targetNumbers;
		  for (var k = 0; k<5; k++){
			  targetNumbers[k] = Math.floor((Math.random() * 3) + 1)
		  } 
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
   squaresN_1_0(evt) {
    this.setState({
      inputValueN_1_0: evt.target.value,
	  squaresN_1_0: evt.target.value
    });
   }
   squaresN_1_1(evt) {
    this.setState({
      inputValueN_1_1: evt.target.value,
	  squaresN_1_1: evt.target.value
    });
   }
   squaresN_1_2(evt) {
    this.setState({
      inputValueN_1_2: evt.target.value,
	  squaresN_1_2: evt.target.value
    });
   }
   squaresN_1_3(evt) {
    this.setState({
      inputValueN_1_3: evt.target.value,
	  squaresN_1_3: evt.target.value
    });
   }
   squaresN_1_4(evt) {
    this.setState({
      inputValueN_1_4: evt.target.value,
	  squaresN_1_4: evt.target.value
    });
   }
   squaresN_2_0(evt) {
    this.setState({
      inputValueN_2_0: evt.target.value,
	  squaresN_2_0: evt.target.value
    });
   }
   squaresN_2_1(evt) {
    this.setState({
      inputValueN_2_1: evt.target.value,
	  squaresN_2_1: evt.target.value
    });
   }
   squaresN_2_2(evt) {
    this.setState({
      inputValueN_2_2: evt.target.value,
	  squaresN_2_2: evt.target.value
    });
   }
   squaresN_2_3(evt) {
    this.setState({
      inputValueN_2_3: evt.target.value,
	  squaresN_2_3: evt.target.value
    });
   }
   squaresN_2_4(evt) {
    this.setState({
      inputValueN_2_4: evt.target.value,
	  squaresN_2_4: evt.target.value
    });
   }
   squaresN_3_0(evt) {
    this.setState({
      inputValueN_3_0: evt.target.value,
	  squaresN_3_0: evt.target.value
    });
   }
   squaresN_3_1(evt) {
    this.setState({
      inputValueN_3_1: evt.target.value,
	  squaresN_3_1: evt.target.value
    });
   }
   squaresN_3_2(evt) {
    this.setState({
      inputValueN_3_2: evt.target.value,
	  squaresN_3_2: evt.target.value
    });
   }
   squaresN_3_3(evt) {
    this.setState({
      inputValueN_3_3: evt.target.value,
	  squaresN_3_3: evt.target.value
    });
   }
   squaresN_3_4(evt) {
    this.setState({
      inputValueN_3_4: evt.target.value,
	  squaresN_3_4: evt.target.value
    });
   }
   squaresN_4_0(evt) {
    this.setState({
      inputValueN_4_0: evt.target.value,
	  squaresN_4_0: evt.target.value
    });
   }
   squaresN_4_1(evt) {
    this.setState({
      inputValueN_4_1: evt.target.value,
	  squaresN_4_1: evt.target.value
    });
   }
   squaresN_4_2(evt) {
    this.setState({
      inputValueN_4_2: evt.target.value,
	  squaresN_4_2: evt.target.value
    });
   }
   squaresN_4_3(evt) {
    this.setState({
      inputValueN_4_3: evt.target.value,
	  squaresN_4_3: evt.target.value
    });
   }
   squaresN_4_4(evt) {
    this.setState({
      inputValueN_4_4: evt.target.value,
	  squaresN_4_4: evt.target.value
    });
   }
   
   
  checkGuess(){
	  const targetNumbers = this.state.targetNumbers;
	  const totalRight = this.state.totalRight;
	  const guesses = this.state.guesses;
	  const inputValueN_0_0 = this.state.inputValueN_0_0;
	  const inputValueN_0_1 = this.state.inputValueN_0_1;
	  const inputValueN_0_2 = this.state.inputValueN_0_2;
	  const inputValueN_0_3 = this.state.inputValueN_0_3;
	  const inputValueN_0_4 = this.state.inputValueN_0_4;
	  const inputValueN_1_0 = this.state.inputValueN_1_0;
	  const inputValueN_1_1 = this.state.inputValueN_1_1;
	  const inputValueN_1_2 = this.state.inputValueN_1_2;
	  const inputValueN_1_3 = this.state.inputValueN_1_3;
	  const inputValueN_1_4 = this.state.inputValueN_1_4;
	  const inputValueN_2_0 = this.state.inputValueN_2_0;
	  const inputValueN_2_1 = this.state.inputValueN_2_1;
	  const inputValueN_2_2 = this.state.inputValueN_2_2;
	  const inputValueN_2_3 = this.state.inputValueN_2_3;
	  const inputValueN_2_4 = this.state.inputValueN_2_4;
	  const inputValueN_3_0 = this.state.inputValueN_3_0;
	  const inputValueN_3_1 = this.state.inputValueN_3_1;
	  const inputValueN_3_2 = this.state.inputValueN_3_2;
	  const inputValueN_3_3 = this.state.inputValueN_3_3;
	  const inputValueN_3_4 = this.state.inputValueN_3_4;
	  const inputValueN_4_0 = this.state.inputValueN_4_0;
	  const inputValueN_4_1 = this.state.inputValueN_4_1;
	  const inputValueN_4_2 = this.state.inputValueN_4_2;
	  const inputValueN_4_3 = this.state.inputValueN_4_3;
	  const inputValueN_4_4 = this.state.inputValueN_4_4;
	  
	  var row = (add()) % 5;
	  
	  if(row == 0){
		  guesses[0] = inputValueN_0_0;
		  guesses[1] = inputValueN_0_1;
		  guesses[2] = inputValueN_0_2;
		  guesses[3] = inputValueN_0_3;
		  guesses[4] = inputValueN_0_4;
	  }
	  else if(row == 1){
		  guesses[0] = inputValueN_1_0;
		  guesses[1] = inputValueN_1_1;
		  guesses[2] = inputValueN_1_2;
		  guesses[3] = inputValueN_1_3;
		  guesses[4] = inputValueN_1_4;
	  }
	  else if(row == 2){
		  guesses[0] = inputValueN_2_0;
		  guesses[1] = inputValueN_2_1;
		  guesses[2] = inputValueN_2_2;
		  guesses[3] = inputValueN_2_3;
		  guesses[4] = inputValueN_2_4;
	  }
	  else if(row == 3){
		  guesses[0] = inputValueN_3_0;
		  guesses[1] = inputValueN_3_1;
		  guesses[2] = inputValueN_3_2;
		  guesses[3] = inputValueN_3_3;
		  guesses[4] = inputValueN_3_4;
	  }
	  else if(row == 4){
		  guesses[0] = inputValueN_4_0;
		  guesses[1] = inputValueN_4_1;
		  guesses[2] = inputValueN_4_2;
		  guesses[3] = inputValueN_4_3;
		  guesses[4] = inputValueN_4_4;
	  }
	  
	 if(guesses[0] == targetNumbers[0]){ 
		 if(guesses[1] == targetNumbers[1]){
			totalRight[row]++;
		 }
	 }
	 if(guesses[1] == targetNumbers[1]){ 
		 if(guesses[0] == targetNumbers[0] && guesses[2] == targetNumbers[2]){
			totalRight[row]++;
		 }
	 }
	 if(guesses[2] == targetNumbers[2]){ 
		 if(guesses[1] == targetNumbers[1] && guesses[3] == targetNumbers[3]){
			totalRight[row]++;
		 }
	 }
	 if(guesses[3] == targetNumbers[3]){ 
		 if(guesses[2] == targetNumbers[2] && guesses[4] == targetNumbers[4]){
			totalRight[row]++;
		 }
	 }
	 if(guesses[4] == targetNumbers[4]){ 
		 if(guesses[3] == targetNumbers[3]){
			totalRight[row]++;
		 }
	 }
      alert(row);
     if(row == 0){
		 this.setState({
				result_0: totalRight[0]
		 });
	 }
	 else if(row == 1){
		 this.setState({
				result_1: totalRight[1]
		 });
	 }
	 else if(row == 2){
		 this.setState({
				result_2: totalRight[2]
		 });
	 }
	 else if(row == 3){
		 this.setState({
				result_3: totalRight[3]
		 });
	 }
	 else if(row == 4){
		 this.setState({
				result_4: totalRight[4]
		 });
	 }
	 	
  }
  
  newGame() {
	  const targetNumbers = this.state.targetNumbers;	  
	  const guesses = this.state.guesses;
	  const totalRight = this.state.totalRight;
	  
	  for (var k = 0; k<5; k++){
		      totalRight[k] = 0;
	          guesses[k] = 0;
			  targetNumbers[k] = Math.floor((Math.random() * 3) + 1)
		  }
		  
	  this.setState({ squaresN_0_0: ''});
	  this.setState({ squaresN_0_1: ''});
	  this.setState({ squaresN_0_2: ''});
	  this.setState({ squaresN_0_3: ''});
	  this.setState({ squaresN_0_4: ''});
	  this.setState({ squaresN_1_0: ''});
	  this.setState({ squaresN_1_1: ''});
	  this.setState({ squaresN_1_2: ''});
	  this.setState({ squaresN_1_3: ''});
	  this.setState({ squaresN_1_4: ''});
	  this.setState({ squaresN_2_0: ''});
	  this.setState({ squaresN_2_1: ''});
	  this.setState({ squaresN_2_2: ''});
	  this.setState({ squaresN_2_3: ''});
	  this.setState({ squaresN_2_4: ''});
	  this.setState({ squaresN_3_0: ''});
	  this.setState({ squaresN_3_1: ''});
	  this.setState({ squaresN_3_2: ''});
	  this.setState({ squaresN_3_3: ''});
	  this.setState({ squaresN_3_4: ''});
	  this.setState({ squaresN_4_0: ''});
	  this.setState({ squaresN_4_1: ''});
	  this.setState({ squaresN_4_2: ''});
	  this.setState({ squaresN_4_3: ''});
	  this.setState({ squaresN_4_4: ''});
	  this.setState({result_0: ''});
	  this.setState({result_1: ''});
	  this.setState({result_2: ''});
	  this.setState({result_3: ''});
	  this.setState({result_4: ''});
	  this.setState({
            div_state: {display: 'none'}
      });
	  this.setState({
            inst_state: {display: 'none'}
      });
  
  }
  showHowToPlay(){
	  this.setState({
            inst_state: {display: 'block'}
      });
	  this.setState({
            div_state: {display: 'none'}
      });
  }
  hideHowToPlay(){
	  this.setState({
            inst_state: {display: 'none'}
      });
  }
  showSoln(){
	  const targetNumbers = this.state.targetNumbers;
	  alert(targetNumbers[0] + " " + targetNumbers[1] + " " + targetNumbers[2] + " " + targetNumbers[3] + " " + targetNumbers[4]);
      this.setState({
				sol_0: targetNumbers[0]
	  });
	  this.setState({
				sol_1: targetNumbers[1]
	  });
	  this.setState({
				sol_2: targetNumbers[2]
	  });
	  this.setState({
				sol_3: targetNumbers[3]
	  });
	  this.setState({
				sol_4: targetNumbers[4]
	  });
	  this.setState({
            div_state: {display: 'block'}
      });
	  this.setState({
            inst_state: {display: 'none'}
      });
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
						<tbody>
						  <tr><td>Line 1</td></tr>
						  <tr><td><input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_0} onChange={evt => this.squaresN_0_0(evt)}/></td>
							<td><input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_1} onChange={evt => this.squaresN_0_1(evt)}/></td>
							<td><input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_2} onChange={evt => this.squaresN_0_2(evt)}/></td>
							<td><input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_3} onChange={evt => this.squaresN_0_3(evt)}/></td>
							<td><input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_4} onChange={evt => this.squaresN_0_4(evt)}/></td></tr>
						  <tr><td>Line 2</td></tr>
						  <tr><td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_0} onChange={evt => this.squaresN_1_0(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_1} onChange={evt => this.squaresN_1_1(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_2} onChange={evt => this.squaresN_1_2(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_3} onChange={evt => this.squaresN_1_3(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_4} onChange={evt => this.squaresN_1_4(evt)}/></td></tr>
						  <tr><td>Line 3</td></tr>
						  <tr><td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_0} onChange={evt => this.squaresN_2_0(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_1} onChange={evt => this.squaresN_2_1(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_2} onChange={evt => this.squaresN_2_2(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_3} onChange={evt => this.squaresN_2_3(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_4} onChange={evt => this.squaresN_2_4(evt)}/></td></tr>
						  <tr><td>Line 4</td></tr>
						  <tr><td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_0} onChange={evt => this.squaresN_3_0(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_1} onChange={evt => this.squaresN_3_1(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_2} onChange={evt => this.squaresN_3_2(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_3} onChange={evt => this.squaresN_3_3(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_4} onChange={evt => this.squaresN_3_4(evt)}/></td></tr>
						  <tr><td>Line 5</td></tr>
						  <tr><td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_0} onChange={evt => this.squaresN_4_0(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_1} onChange={evt => this.squaresN_4_1(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_2} onChange={evt => this.squaresN_4_2(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_3} onChange={evt => this.squaresN_4_3(evt)}/></td>
							<td><input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_4} onChange={evt => this.squaresN_4_4(evt)}/></td></tr>
						</tbody>
						</table> 
						</div>
						<div className="results-box">
							 <table>
							 <tbody>
							  <tr><td>Result 1</td></tr>
							  <tr><td> <div className="result-number">{this.state.result_0}</div></td></tr>
							  <tr><td>Result 2</td></tr>
							  <tr><td> <div className="result-number">{this.state.result_1}</div></td> </tr>
							  <tr><td>Result 3</td></tr>
							  <tr><td> <div className="result-number">{this.state.result_2}</div></td></tr>
							  <tr><td> Result 4</td></tr>
							  <tr><td> <div className="result-number">{this.state.result_3}</div></td></tr>
							  <tr><td>Result 5</td></tr>
							  <tr><td> <div className="result-number">{this.state.result_4}</div></td></tr>
							  </tbody>
							 </table>
						</div>
						<div style={{clear:'both'}}></div>						
					</div>	
					<div className="controls">
					    <div className="button" onClick={() => this.checkGuess()}>Enter Guess</div>
						<div className="button" onClick={() => this.newGame()}>New Game</div>
						<div className="button" onClick={() => this.showHowToPlay()}>How to Play</div>
						<div className="button" onClick={() => this.showSoln()}>Show Solution</div>
						<div className="soln-box" style={this.state.div_state}>
							<table>
							<tbody>
							<tr><td>Solution</td></tr>
							  <tr><td><div className="soln-number">{this.state.sol_0}</div></td>
								<td><div className="soln-number">{this.state.sol_1}</div></td>
								<td><div className="soln-number">{this.state.sol_2}</div></td>
								<td><div className="soln-number">{this.state.sol_3}</div></td>
								<td><div className="soln-number">{this.state.sol_4}</div></td></tr>
							 </tbody>
							 </table>
						</div>
						<div className="instruct-box" style={this.state.inst_state}>
						      <div className="instruct-close-x" onClick={() => this.hideHowToPlay()}>&times;</div>
							  <div className="instruct-heading">How to Play Sequence</div>
							  <div className="instruct-text">
								A sequence of five numbers from 1 to 3 is chosen at random.  The player must try to guess them.  To make a guess, the player puts 5 numbers into the squares of a line and then clicks "enter guess".  The program looks for correct three number partial sequences within the five number sequence.  It also counts the first two numbers and last two numbers in the five number sequence as partial sequences that could be right or wrong.  It reports the number of sequences that the player got right.
							  </div>
						</div>
					</div>
				    <div style={{clear:'both'}}></div>
									
				</div>		
	    );
		
	}
}

export default App;
