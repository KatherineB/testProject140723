var coloursAvailable = new Array('#f03','#f74','#ff0','#0f0','#00f','#0fc','#a0f');
var coloursPicked = new Array(0,0,0,0,0,0,0);
var colourTimes = new Array(1,1,1,1,1,1,1);
var NUMBER_OF_COLOURS = 7;
var numberColoursPicked = 0;
var firstColourPicked = -1;
var interval;
var loop;
var numberLoops;

function runShow(){
	handleUserInput();
	controlNumberLoops();
	//runCycle();
}

function handleUserInput(){
	 
	 /* Gets length of time to display choosen colours */
	 var intervalChosen = document.getElementsByName("time");
	 
	 for(var i = 0; i < intervalChosen.length; i++) {
	   if(intervalChosen[i].checked == true) {
		   interval = intervalChosen[i].value;
	   }
	 }
	// alert("interval=" + interval);
	 var colourArray = document.getElementsByName("colours");
	
	/* Gets colours chosen by user */
	 for(var i = 0; i < colourArray.length; i++) {
	   if(colourArray[i].checked == true) {
		   //colourTest = colourArray[i].value;
		 // alert(colourArray[i].value);
		  coloursPicked[i] = 1;
	      colourTimes[i] = interval;
		  numberColoursPicked++;		 
	   }
	   // alert("colourTime=" + colourTimes[i]);
	 }
	 	
	 /* Gets number of times to go through all the colours */
	 var loopArray = document.getElementsByName("loop");
	 
	 for(var i = 0; i < loopArray.length; i++) {
	   if(loopArray[i].checked == true) {
		   numberLoops = loopArray[i].value;
	   }
	 }	  
	// loop = interval * NUMBER_OF_COLOURS;
}

function controlNumberLoops(){	 
   //  alert(numberLoops);
	loop = 10000 * numberColoursPicked;
/*	for(var i=0; i<numberLoops; i++){
		runCycle();
	}*/
	 setTimeout(function() {
			if(numberLoops > 0){
				//alert("numberLoops > 0");
			   runCycle();			   
			}
			setTimeout(function() {
				if(numberLoops > 1){
					//alert("numberLoops > 1");
				   runCycle();
				}
				setTimeout(function() {
					if(numberLoops > 2){
						//alert("numberLoops > 2");
					   runCycle();
					}
					setTimeout(function() {
						if(numberLoops > 3){
							//alert("numberLoops > 3");
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
   // alert("runC");
	//alert(colourTimes[0]);
	/*setTimeout(function() {
		if(coloursPicked[0]){
			//alert("in 0");
		   displayColour(coloursAvailable[0]);
		}
	}, colourTimes[0]);
	setTimeout(function() {
		if(coloursPicked[1]){
			//alert("in 1");
		   displayColour(coloursAvailable[1]);
		}
	}, colourTimes[1]);
	setTimeout(function() {
		if(coloursPicked[2]){
			//alert("in 2");
		   displayColour(coloursAvailable[2]);
		}
	}, colourTimes[2]);*/
	setTimeout(function() {
	    if(coloursPicked[0]){
			//alert("in 0");
			displayColour(coloursAvailable[0]);
		}
		setTimeout(function() {
		    if(coloursPicked[1]){
			//	alert("in 1");
				displayColour(coloursAvailable[1]);
		    }
			setTimeout(function() {
			    if(coloursPicked[2]){
				//	alert("in 2");
				  displayColour(coloursAvailable[2]);
				}
				setTimeout(function() {
					if(coloursPicked[3]){
						//alert("in 3");
					  displayColour(coloursAvailable[3]);
					}
					setTimeout(function() {
						if(coloursPicked[4]){
						//	alert("in 4");
						   displayColour(coloursAvailable[4]);
						}
						setTimeout(function() {
							if(coloursPicked[5]){
							//	alert("in 5");
							   displayColour(coloursAvailable[5]);
							}
							setTimeout(function() {
								if(coloursPicked[6]){
									//alert("in 6");
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