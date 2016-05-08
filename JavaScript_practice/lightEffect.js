var coloursPicked = new Array(0,0,0,0,0,0,0);
var NUMBER_OF_COLOURS = 7;
var numberColoursPicked = 0;
var interval;
var loop;
var redChecked;
var orangeChecked;
var yellowChecked;
var greenChecked;
var blueChecked;
var turquoiseChecked;
var purpleChecked;

function runShow(){
	handleUserInput();
	controlNumberLoops();
	runCycle();
}

function handleUserInput(){
	 /*redChecked = document.getElementById("red").checked;
	 orangeChecked = document.getElementById("orange").checked;
	 yellowChecked = document.getElementById("yellow").checked;
     greenChecked = document.getElementById("green").checked;
	 blueChecked = document.getElementById("blue").checked;
	 turquoiseChecked = document.getElementById("turquoise").checked;
	 purpleChecked = document.getElementById("purple").checked;*/
	 
	 
	 var colourArray = document.getElementsByName("colours");
	
	 for(var i = 0; i < colourArray.length; i++) {
	   if(colourArray[i].checked == true) {
		   //colourTest = colourArray[i].value;
		  // alert(colourArray[i].value);
		  coloursPicked[i] = 1;
		  numberColoursPicked++;
	   }
	 }
	 alert(numberColoursPicked);
	 
	 var intervalArray = document.getElementsByName("time");
	 
	 for(var i = 0; i < intervalArray.length; i++) {
	  //  alert(intervalArray[i].value);
	   if(intervalArray[i].checked == true) {
		   interval = intervalArray[i].value;
	   }
	 }
	
	 var loopArray = document.getElementsByName("loop");
	 
	 for(var i = 0; i < loopArray.length; i++) {
	   if(loopArray[i].checked == true) {
		   numberLoops = loopArray[i].value;
	   }
	 }
	  
	 loop = interval * NUMBER_OF_COLOURS;
}

function controlNumberLoops(){	 
	 setTimeout(function() {
			if(numberLoops > 0){
			   runCycle();
			}
			setTimeout(function() {
				if(numberLoops > 1){
				   runCycle();
				}
				setTimeout(function() {
					if(numberLoops > 2){
					   runCycle();
					}
					setTimeout(function() {
						if(numberLoops > 3){
						   runCycle();
						}
						setTimeout(function() {
							if(numberLoops > 4){
							   runCycle();
							}
							setTimeout(function() {
								if(numberLoops > 5){
								   runCycle();
								}
								setTimeout(function() {
									if(numberLoops > 6){
									   runCycle();
									}
				                }, loop);
				            }, loop);
				        }, loop);
				    }, loop);
				}, loop);
			}, loop);
		}, 1000);
}

function runCycle(){
    
	setTimeout(function() {
	    if(redChecked){
			displayColour('#f03');
		}
		setTimeout(function() {
		    if(orangeChecked){
				  displayColour('#f74');
		    }
			setTimeout(function() {
			    if(yellowChecked){
				  displayColour('#ff0');
				}
				setTimeout(function() {
					if(greenChecked){
					  displayColour('#0f0');
					}
					setTimeout(function() {
						if(blueChecked){
						   displayColour('#00f');
						}
						setTimeout(function() {
							if(turquoiseChecked){
							   displayColour('#0fc');
							}
							setTimeout(function() {
								if(purpleChecked){
								   displayColour('#a0f');
								}
							}, interval);
						}, interval);
					}, interval);
				}, interval);
			},interval);
		},interval);
	}, 1000);
}
function displayColour(colour){
	 document.getElementById('mainDiv').style.backgroundColor = colour;	 
}