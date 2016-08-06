var coloursAvailable = new Array('#f03','#f74','#ff0','#0f0','#00f','#0fc','#a0f');
var coloursPicked = new Array(0,0,0,0,0,0,0);
var NUMBER_OF_COLOURS = 7;
var numberColoursPicked = 0;
var firstColourPicked = -1;
var interval;
var loop;

function runShow(){
	handleUserInput();
	controlNumberLoops();
	runCycle();
}

function handleUserInput(){
	 
	 var colourArray = document.getElementsByName("colours");
	
	 for(var i = 0; i < colourArray.length; i++) {
	   if(colourArray[i].checked == true) {
		   //colourTest = colourArray[i].value;
		   alert(colourArray[i].value);
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
	  
	// loop = interval * NUMBER_OF_COLOURS;
}

function controlNumberLoops(){	 
    // alert(numberLoops);
	loop = 1000;
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
    alert("runC");
	setTimeout(function() {
	    if(coloursPicked[0]){
			displayColour(coloursAvailable[0]);
		}
		setTimeout(function() {
		    if(coloursPicked[1]){
				displayColour(coloursAvailable[1]);
		    }
			setTimeout(function() {
			    if(coloursPicked[2]){
				  displayColour(coloursAvailable[2]);
				}
				setTimeout(function() {
					if(coloursPicked[3]){
					  displayColour(coloursAvailable[3]);
					}
					setTimeout(function() {
						if(coloursPicked[4]){
						   displayColour(coloursAvailable[4]);
						}
						setTimeout(function() {
							if(coloursPicked[5]){
							   displayColour(coloursAvailable[5]);
							}
							setTimeout(function() {
								if(coloursPicked[6]){
								   displayColour(coloursAvailable[6]);
								}
							}, interval);
						}, interval);
					}, interval);
				}, interval);
			},interval);
		},interval);
	}, interval);
}
function displayColour(colour){
	 document.getElementById('mainDiv').style.backgroundColor = colour;	 
}