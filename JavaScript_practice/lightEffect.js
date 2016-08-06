var coloursPicked = new Array(0,0,0,0,0,0,0);
var NUMBER_OF_COLOURS = 7;
var numberColoursPicked = 0;
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
	  
	 loop = interval * NUMBER_OF_COLOURS;
}

function controlNumberLoops(){	 
     alert(numberLoops);
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
			displayColour('#f03');
		}
		setTimeout(function() {
		    if(coloursPicked[1]){
				  displayColour('#f74');
		    }
			setTimeout(function() {
			    if(coloursPicked[2]){
				  displayColour('#ff0');
				}
				setTimeout(function() {
					if(coloursPicked[3]){
					  displayColour('#0f0');
					}
					setTimeout(function() {
						if(coloursPicked[4]){
						   displayColour('#00f');
						}
						setTimeout(function() {
							if(coloursPicked[5]){
							   displayColour('#0fc');
							}
							setTimeout(function() {
								if(coloursPicked[6]){
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