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
		  soln_state: {display: 'none'},
		  inst_state: {display: 'none'},
		  lose_state: {display: 'none'},
		  win_state: {display: 'none'},
		  squaresN_0_0: '',
		  squaresN_0_1: '',
		  squaresN_0_2: '',
		  squaresN_0_3: '',
		  squaresN_0_4: '',
		  squaresN_1_0: '',
		  squaresN_1_1: '',
		  squaresN_1_2: '',
		  squaresN_1_3: '',
		  squaresN_1_4: '',
		  squaresN_2_0: '',
		  squaresN_2_1: '',
		  squaresN_2_2: '',
		  squaresN_2_3: '',
		  squaresN_2_4: '',
		  squaresN_3_0: '',
		  squaresN_3_1: '',
		  squaresN_3_2: '',
		  squaresN_3_3: '',
		  squaresN_3_4: '',
		  squaresN_4_0: '',
		  squaresN_4_1: '',
		  squaresN_4_2: '',
		  squaresN_4_3: '',
		  squaresN_4_4: '',

		  totalRight: [0,0,0,0,0]
		 };

		  const targetNumbers = this.state.targetNumbers;
		  for (var k = 0; k<5; k++){
			  targetNumbers[k] = Math.floor((Math.random() * 3) + 1)
		  } 
  }
   squaresN_0_0(evt) {   
    this.setState({
	  squaresN_0_0: evt.target.value
    });
   }
   squaresN_0_1(evt) {
    this.setState({
	  squaresN_0_1: evt.target.value
    });
   }
   squaresN_0_2(evt) {
    this.setState({
	  squaresN_0_2: evt.target.value
    });
   }
   squaresN_0_3(evt) {
    this.setState({
	  squaresN_0_3: evt.target.value
    });
   }
   squaresN_0_4(evt) {
    this.setState({
	  squaresN_0_4: evt.target.value
    });
   }
   squaresN_1_0(evt) {
    this.setState({
	  squaresN_1_0: evt.target.value
    });
   }
   squaresN_1_1(evt) {
    this.setState({
	  squaresN_1_1: evt.target.value
    });
   }
   squaresN_1_2(evt) {
    this.setState({
	  squaresN_1_2: evt.target.value
    });
   }
   squaresN_1_3(evt) {
    this.setState({
	  squaresN_1_3: evt.target.value
    });
   }
   squaresN_1_4(evt) {
    this.setState({
	  squaresN_1_4: evt.target.value
    });
   }
   squaresN_2_0(evt) {
    this.setState({
	  squaresN_2_0: evt.target.value
    });
   }
   squaresN_2_1(evt) {
    this.setState({
	  squaresN_2_1: evt.target.value
    });
   }
   squaresN_2_2(evt) {
    this.setState({
	  squaresN_2_2: evt.target.value
    });
   }
   squaresN_2_3(evt) {
    this.setState({
	  squaresN_2_3: evt.target.value
    });
   }
   squaresN_2_4(evt) {
    this.setState({
	  squaresN_2_4: evt.target.value
    });
   }
   squaresN_3_0(evt) {
    this.setState({
	  squaresN_3_0: evt.target.value
    });
   }
   squaresN_3_1(evt) {
    this.setState({
	  squaresN_3_1: evt.target.value
    });
   }
   squaresN_3_2(evt) {
    this.setState({
	  squaresN_3_2: evt.target.value
    });
   }
   squaresN_3_3(evt) {
    this.setState({
	  squaresN_3_3: evt.target.value
    });
   }
   squaresN_3_4(evt) {
    this.setState({
	  squaresN_3_4: evt.target.value
    });
   }
   squaresN_4_0(evt) {
    this.setState({
	  squaresN_4_0: evt.target.value
    });
   }
   squaresN_4_1(evt) {
    this.setState({
	  squaresN_4_1: evt.target.value
    });
   }
   squaresN_4_2(evt) {
    this.setState({
	  squaresN_4_2: evt.target.value
    });
   }
   squaresN_4_3(evt) {
    this.setState({
	  squaresN_4_3: evt.target.value
    });
   }
   squaresN_4_4(evt) {
    this.setState({
	  squaresN_4_4: evt.target.value
    });
   }
   
   
  checkGuess(){
	  const targetNumbers = this.state.targetNumbers;
	  const totalRight = this.state.totalRight;
	  const guesses = this.state.guesses;
	  const squaresN_0_0 = this.state.squaresN_0_0;
	  const squaresN_0_1 = this.state.squaresN_0_1;
	  const squaresN_0_2 = this.state.squaresN_0_2;
	  const squaresN_0_3 = this.state.squaresN_0_3;
	  const squaresN_0_4 = this.state.squaresN_0_4;
	  const squaresN_1_0 = this.state.squaresN_1_0;
	  const squaresN_1_1 = this.state.squaresN_1_1;
	  const squaresN_1_2 = this.state.squaresN_1_2;
	  const squaresN_1_3 = this.state.squaresN_1_3;
	  const squaresN_1_4 = this.state.squaresN_1_4;
	  const squaresN_2_0 = this.state.squaresN_2_0;
	  const squaresN_2_1 = this.state.squaresN_2_1;
	  const squaresN_2_2 = this.state.squaresN_2_2;
	  const squaresN_2_3 = this.state.squaresN_2_3;
	  const squaresN_2_4 = this.state.squaresN_2_4;
	  const squaresN_3_0 = this.state.squaresN_3_0;
	  const squaresN_3_1 = this.state.squaresN_3_1;
	  const squaresN_3_2 = this.state.squaresN_3_2;
	  const squaresN_3_3 = this.state.squaresN_3_3;
	  const squaresN_3_4 = this.state.squaresN_3_4;
	  const squaresN_4_0 = this.state.squaresN_4_0;
	  const squaresN_4_1 = this.state.squaresN_4_1;
	  const squaresN_4_2 = this.state.squaresN_4_2;
	  const squaresN_4_3 = this.state.squaresN_4_3;
	  const squaresN_4_4 = this.state.squaresN_4_4;
	  
	  var row = (add()) % 5;
	  	  
	  if(row == 0){
		  guesses[0] = squaresN_0_0;
		  guesses[1] = squaresN_0_1;
		  guesses[2] = squaresN_0_2;
		  guesses[3] = squaresN_0_3;
		  guesses[4] = squaresN_0_4;
	  }
	  else if(row == 1){
		  guesses[0] = squaresN_1_0;
		  guesses[1] = squaresN_1_1;
		  guesses[2] = squaresN_1_2;
		  guesses[3] = squaresN_1_3;
		  guesses[4] = squaresN_1_4;
	  }
	  else if(row == 2){
		  guesses[0] = squaresN_2_0;
		  guesses[1] = squaresN_2_1;
		  guesses[2] = squaresN_2_2;
		  guesses[3] = squaresN_2_3;
		  guesses[4] = squaresN_2_4;
	  }
	  else if(row == 3){
		  guesses[0] = squaresN_3_0;
		  guesses[1] = squaresN_3_1;
		  guesses[2] = squaresN_3_2;
		  guesses[3] = squaresN_3_3;
		  guesses[4] = squaresN_3_4;
	  }
	  else if(row == 4){
		  guesses[0] = squaresN_4_0;
		  guesses[1] = squaresN_4_1;
		  guesses[2] = squaresN_4_2;
		  guesses[3] = squaresN_4_3;
		  guesses[4] = squaresN_4_4;
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

     if(row == 0){
		 this.setState({
				result_0: totalRight[0]
		 });
		 if(totalRight[0] == 5){
			 this.setState({
                win_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
	 }
	 else if(row == 1){
		 this.setState({
				result_1: totalRight[1]
		 });
		 if(totalRight[1] == 5){
			 this.setState({
                win_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
	 }
	 else if(row == 2){
		 this.setState({
				result_2: totalRight[2]
		 });
		 if(totalRight[2] == 5){
			 this.setState({
                win_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
	 }
	 else if(row == 3){
		 this.setState({
				result_3: totalRight[3]
		 });
		 if(totalRight[3] == 5){
			 this.setState({
                win_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
	 }
	 else if(row == 4){
		 this.setState({
				result_4: totalRight[4]
		 });
		 if(totalRight[4] == 5){
			 this.setState({
                win_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
		 else{
			 this.setState({
                lose_state: {display: 'block'},
				soln_state: {display: 'none'},
		        inst_state: {display: 'none'}
             });
		 }
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
            soln_state: {display: 'none'}
      });
	  this.setState({
            inst_state: {display: 'none'}
      });
	  this.setState({
            win_state: {display: 'none'}
      });
	  this.setState({
            lose_state: {display: 'none'}
      });
  
  }
  showHowToPlay(){
	  this.setState({
            inst_state: {display: 'inline-block'}
      });
	  this.setState({
            soln_state: {display: 'none'},
			lose_state: {display: 'none'},
		    win_state: {display: 'none'}
      });
  }
  hideHowToPlay(){
	  this.setState({
            inst_state: {display: 'none'},
			lose_state: {display: 'none'},
		    win_state: {display: 'none'}
      });
  }
  showSoln(){
	  const targetNumbers = this.state.targetNumbers;
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
            soln_state: {display: 'inline-block'}
      });
	  this.setState({
            inst_state: {display: 'none'},
			lose_state: {display: 'none'},
		    win_state: {display: 'none'}
      });
  }

	render()  {
		
		return(
				<div className="App">
				    <div className="App-header">Sequence</div>
					    <div className="main-content">
							<div className="play-area">
								<div className="heading">Guesses</div>
								<div className="play-row">	
									   <div className="guesses">
											  <div className="subHeading">Line 1</div>
											  <div>
													<input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_0} onChange={evt => this.squaresN_0_0(evt)}/>
													<input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_1} onChange={evt => this.squaresN_0_1(evt)}/>
													<input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_2} onChange={evt => this.squaresN_0_2(evt)}/>
													<input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_3} onChange={evt => this.squaresN_0_3(evt)}/>
													<input type="number" className="number-box"  min="1" max="3" value={this.state.squaresN_0_4} onChange={evt => this.squaresN_0_4(evt)}/>
											  </div>
									   </div>
									   <div className="results">         
											   <div className="subHeading">Result 1</div>
											   <div className="result-number">{this.state.result_0}</div>
									   </div>
									   <div style={{clear:'both'}}></div>
								</div>
								<div className="play-row">
									   <div className="guesses">
											  <div className="subHeading">Line 2</div>
											  <div>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_0} onChange={evt => this.squaresN_1_0(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_1} onChange={evt => this.squaresN_1_1(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_2} onChange={evt => this.squaresN_1_2(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_3} onChange={evt => this.squaresN_1_3(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_1_4} onChange={evt => this.squaresN_1_4(evt)}/>
											  </div>
									  </div>
									   <div className="results">         
											   <div className="subHeading">Result 2</div>
											   <div className="result-number">{this.state.result_1}</div>
									   </div>
									  <div style={{clear:'both'}}></div>
								</div>
								<div className="play-row">
									   <div className="guesses">
											  <div className="subHeading">Line 3</div>
											  <div>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_0} onChange={evt => this.squaresN_2_0(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_1} onChange={evt => this.squaresN_2_1(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_2} onChange={evt => this.squaresN_2_2(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_3} onChange={evt => this.squaresN_2_3(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_2_4} onChange={evt => this.squaresN_2_4(evt)}/>
											  </div>
									  </div>
									   <div className="results">         
											   <div className="subHeading">Result 3</div>
											   <div className="result-number">{this.state.result_2}</div>
									   </div>
									  <div style={{clear:'both'}}></div>
								</div>
								<div className="play-row">
									   <div className="guesses">
											  <div className="subHeading">Line 4</div>
											  <div>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_0} onChange={evt => this.squaresN_3_0(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_1} onChange={evt => this.squaresN_3_1(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_2} onChange={evt => this.squaresN_3_2(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_3} onChange={evt => this.squaresN_3_3(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_3_4} onChange={evt => this.squaresN_3_4(evt)}/>
											  </div>
									  </div>
									   <div className="results">         
											   <div className="subHeading">Result 4</div>
											   <div className="result-number">{this.state.result_3}</div>
									   </div>
									  <div style={{clear:'both'}}></div>
								</div>
								<div className="play-row">
									   <div className="guesses">
											  <div className="subHeading">Line 5</div>
											  <div>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_0} onChange={evt => this.squaresN_4_0(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_1} onChange={evt => this.squaresN_4_1(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_2} onChange={evt => this.squaresN_4_2(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_3} onChange={evt => this.squaresN_4_3(evt)}/>
													<input type="number" className="number-box" min="1" max="3" value={this.state.squaresN_4_4} onChange={evt => this.squaresN_4_4(evt)}/>
											  </div>	
									  </div>
									   <div className="results">         
											   <div className="subHeading">Result 5</div>
											   <div className="result-number">{this.state.result_4}</div>
									   </div>
									  <div style={{clear:'both'}}></div>	
								</div>							  
							</div>
												
							<div className="controls">
							    <div className="button-panel">
										<div className="btn-row">
												<div className="button" onClick={() => this.checkGuess()}>Enter Guess</div>
												<div className="button" onClick={() => this.newGame()}>New Game</div>
												<div style={{clear:'both'}}></div>
										</div>
										<div className="btn-row">
												<div className="button" onClick={() => this.showHowToPlay()}>How to Play</div>
												<div className="button" onClick={() => this.showSoln()}>Show Solution</div>
												<div style={{clear:'both'}}></div>
										</div>
										<div style={{clear:'both'}}></div>
								</div>
								<div className="soln-box" style={this.state.soln_state}>
									<div className="heading">Solution</div>
									<div className="soln-number">{this.state.sol_0}</div>
									<div className="soln-number">{this.state.sol_1}</div>
									<div className="soln-number">{this.state.sol_2}</div>
									<div className="soln-number">{this.state.sol_3}</div>
									<div className="soln-number">{this.state.sol_4}</div>
									<div style={{clear:'both'}}></div>
								</div>
								<div className="instruct-box" style={this.state.inst_state}>
									  <div className="instruct-close-x" onClick={() => this.hideHowToPlay()}>&times;</div>
									  <div className="instruct-heading">How to Play Sequence</div>
									  <div className="instruct-text">
										A sequence of five numbers from 1 to 3 is chosen at random.  The player must try to guess them.  To make a guess, the player puts 5 numbers into the rectangles of a line and then clicks "Enter Guess".  
									  </div>
									  <div className="instruct-text">
										Instead of counting the number of correct numbers in correct rectangles, the game counts correct partial sequences and displays that number as a result.  A partial equence is any number, the number to the left of it and the number to the right of it in the order they appear on the line.  For numbers at an end of the line, just the number beside it counts.  Thus partial sequences can contain either two or three numbers.
									  </div>
								</div>
								<div className="lose-box" style={this.state.lose_state}>
								  Sorry, you have lost.  You failed to guess the sequence.
								</div>
								<div className="win-box" style={this.state.win_state}>
								  <span> YOU WIN!!! </span>  You guessed the sequence correctly!
								</div>
							</div>
							<div style={{clear:'both'}}></div>	
                        </div>							
				</div>		
	    );
		
	}
}

export default App;
