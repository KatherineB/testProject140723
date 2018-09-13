let iState = -1;
let hadsDone = 0;
let arrows = 0;
let firstDone = 0;

setInitialState(0);

function setInitialState(firstDone){

	if(firstDone){
		if(document.getElementById('init-slider-state').checked){
		  iState = 1;
		}
		else{
		   iState = 0;
		}
	}
	else{
		iState = 0;
		firstDone = 1;
	}
    if(iState == 0){
	    document.getElementById('tf-00').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-00').style.backgroundColor = "#5ea4ee";
		document.getElementById('tf-10').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-10').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-00').innerHTML = "E";
		document.getElementById('bf-10').innerHTML = "";
	}
	else if(iState == 1){
	    document.getElementById('tf-10').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-10').style.backgroundColor = "#5ea4ee";
		document.getElementById('tf-00').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-00').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-10').innerHTML = "E";
		document.getElementById('bf-00').innerHTML = "";
	}
}
function setExtraState(){
	if(document.getElementById('extra-slider-state').checked){
	  arrows = 1;
	}
	else{
	   arrows = 0;
	}
}
function doHadamard(){
	if(hadsDone == 0){
	   if(iState == 0){
		document.getElementById('tf-01').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-01').style.backgroundColor = "#5ea4ee";
		document.getElementById('tf-11').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-11').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-01').innerHTML = "0.5 E";
		document.getElementById('bf-11').innerHTML = "0.5 E";
			if(arrows == 1){
				document.getElementById('svg-t0-s1').style.display = 'block';
			}
	   }
	   else if(iState == 1){
		document.getElementById('tf-01').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-01').style.backgroundColor = "#5ea4ee";
		document.getElementById('tf-11').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-11').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-01').innerHTML = "0.5 E";
		document.getElementById('bf-11').innerHTML = "0.5 W";
			if(arrows == 1){
				document.getElementById('svg-t1-s1').style.display = 'block';
			}
	   }
	   hadsDone++;
	}
	else if(hadsDone == 1){
	   if(iState == 0){
		document.getElementById('tf-02').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-02').style.backgroundColor = "#5ea4ee";
		document.getElementById('tf-12').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-12').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-02').innerHTML = "E";
		document.getElementById('bf-12').innerHTML = "";
			if(arrows == 1){
				 document.getElementById('svg-t0-s2').style.display = 'block';
				 document.getElementById('ps-holder').style.display = 'inline-block';
				 document.getElementById('ps-holder').style.marginTop = '-19em';
				 document.getElementById('small-label-b').innerHTML = '0.25 E';
				 document.getElementById('small-label-d').innerHTML = '0.25 W';
			}
	   }
	   else if(iState == 1){
		document.getElementById('tf-02').style.backgroundColor = "#ccbb88";
		document.getElementById('bf-02').style.backgroundColor = "#ccbb88";
		document.getElementById('tf-12').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-12').style.backgroundColor = "#5ea4ee";
		document.getElementById('bf-02').innerHTML = "";
		document.getElementById('bf-12').innerHTML = "E";
			if(arrows == 1){
				 document.getElementById('svg-t1-s2').style.display = 'block';
				 document.getElementById('ps-holder').style.display = 'inline-block';
				 document.getElementById('ps-holder').style.marginTop = '-3.7em';
				 document.getElementById('small-label-b').innerHTML = '0.25 W';
				 document.getElementById('small-label-d').innerHTML = '0.25 E';
			}
	   }
	   hadsDone++;
	}
	else{
	   alert("Only two Hadamards can be performed for this demonstration. Please click the Reset button if you want to try again.");
	}
} 
function reset(){
    hadsDone = 0;

	document.getElementById('tf-00').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-00').style.backgroundColor = "#ccbb88";
	document.getElementById('tf-10').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-10').style.backgroundColor = "#ccbb88";
	document.getElementById('tf-01').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-01').style.backgroundColor = "#ccbb88";
	document.getElementById('tf-11').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-11').style.backgroundColor = "#ccbb88";
	document.getElementById('tf-02').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-02').style.backgroundColor = "#ccbb88";
	document.getElementById('tf-12').style.backgroundColor = "#ccbb88";
	document.getElementById('bf-12').style.backgroundColor = "#ccbb88";
		
	document.getElementById('bf-00').innerHTML = "";
	document.getElementById('bf-01').innerHTML = "";
	document.getElementById('bf-02').innerHTML = "";
	document.getElementById('bf-10').innerHTML = "";
    document.getElementById('bf-11').innerHTML = "";
    document.getElementById('bf-12').innerHTML = "";
	document.getElementById('svg-t0-s1').style.display = 'none';
	document.getElementById('svg-t1-s1').style.display = 'none';
	document.getElementById('svg-t0-s2').style.display = 'none';
	document.getElementById('svg-t1-s2').style.display = 'none';
	document.getElementById('ps-holder').style.display = 'none';

	setInitialState(1);
	}

