var coloursAvailable = new Array('#f03','#f74','#ff0','#0f0','#00f','#0fc','#a0f');
var coloursPicked = new Array(0,0,0,0,0,0,0);
var colourTimes = new Array(1,1,1,1,1,1,1);
var NUMBER_OF_COLOURS = 7;
var numberColoursPicked = 0;
var firstColourPicked = -1;
var lastColourPicked = -1;
var interval;
var loop;
var numberLoops;

function runShow(){
	handleUserInput();
	controlNumberLoops();
}

function handleUserInput(){
	 
	 /* Gets length of time to display choosen colours */
	 var intervalChosen = document.getElementsByName("time");
	 
	 for(var i = 0; i < intervalChosen.length; i++) {
	   if(intervalChosen[i].checked == true) {
		   interval = intervalChosen[i].value;
	   }
	 }
	 var colourArray = document.getElementsByName("colours");
	
	/* Gets colours chosen by user */
	 for(var i = 0; i < colourArray.length; i++) {
	   if(colourArray[i].checked == true) {
		  coloursPicked[i] = 1;
	      colourTimes[i] = interval;
		  numberColoursPicked++;	
          lastColourPicked = i;		  
	   }
	 }
	 	
	 /* Gets number of times to go through all the colours */
	 var loopArray = document.getElementsByName("loop");
	 
	 for(var i = 0; i < loopArray.length; i++) {
	   if(loopArray[i].checked == true) {
		   numberLoops = loopArray[i].value;
	   }
	 }	  
}

function controlNumberLoops(){	 
	loop = 10000 * numberColoursPicked;
	
	/* This display of a colour is so that a colour will display immediately,
	   not after a time interval delay that will give the appearance that the 
	   program is doing nothing.  The last colour on the list picked is the
	   colour displayed so that the order of colours is maintained when the
	   timeed colour changes start.
	 */   
	displayColour(coloursAvailable[lastColourPicked]);
	
	 setTimeout(function() {
			if(numberLoops > 0){
			   controlColours();			   
			}
			setTimeout(function() {
				if(numberLoops > 1){
				   controlColours();
				}
				setTimeout(function() {
					if(numberLoops > 2){
					   controlColours();
					}
					setTimeout(function() {
						if(numberLoops > 3){
						   controlColours();
						}
						setTimeout(function() {
							if(numberLoops > 4){
							   controlColours();
							}
							setTimeout(function() {
								if(numberLoops > 5){
								   controlColours();
								}
								setTimeout(function() {
									if(numberLoops > 6){
									   controlColours();
									}
									setTimeout(function() {
										if(numberLoops > 7){
										   controlColours();
										}
										setTimeout(function() {
											if(numberLoops > 8){
											   controlColours();
											}
											setTimeout(function() {
												if(numberLoops > 9){
												   controlColours();
												}
				                            }, loop);
				                        }, loop);
				                    }, loop);
				                }, loop);
				            }, loop);
				        }, loop);
				    }, loop);
				}, loop);
			}, loop);
		}, 1000); 
		
		 
		/*
		for(var i = 0; i < numberLoops; i++){
			setTimeout(function() {		
                 alert("in timeout");			
				 controlColours();								
			}, loop);
		}*/
}

function controlColours(){

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
							}, colourTimes[6]);
						}, colourTimes[5]);
					}, colourTimes[4]);
				}, colourTimes[3]);
			},colourTimes[2]);
		},colourTimes[1]);
	}, colourTimes[0]);
}
function displayColour(colour){
	 document.getElementById('mainDiv').style.backgroundColor = colour;	 
}
function clearColours(){
	for(var i=0; i<7; i++){
	    coloursPicked[i] = 0;
		colourTimes[i] = 1;
	}
	numberColoursPicked = 0;
	firstColourPicked = -1;
	lastColourPicked = -1;
	displayColour("#bbb");
}