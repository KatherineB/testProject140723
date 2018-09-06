let firstState = -1;
let hadsDone = 0;
let arrows = 1;
function setInitialState(iState){
    firstState = iState;
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
function doHadamard(){
       if(firstState > -1){
			if(hadsDone == 0){
			   if(firstState == 0){
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
			   else if(firstState == 1){
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
			   if(firstState == 0){
				document.getElementById('tf-02').style.backgroundColor = "#5ea4ee";
				document.getElementById('bf-02').style.backgroundColor = "#5ea4ee";
				document.getElementById('tf-12').style.backgroundColor = "#ccbb88";
				document.getElementById('bf-12').style.backgroundColor = "#ccbb88";
				document.getElementById('bf-02').innerHTML = "E";
				document.getElementById('bf-12').innerHTML = "";
			   }
			   else if(firstState == 1){
				document.getElementById('tf-02').style.backgroundColor = "#ccbb88";
				document.getElementById('bf-02').style.backgroundColor = "#ccbb88";
				document.getElementById('tf-12').style.backgroundColor = "#5ea4ee";
				document.getElementById('bf-12').style.backgroundColor = "#5ea4ee";
				document.getElementById('bf-02').innerHTML = "";
				document.getElementById('bf-12').innerHTML = "E";
			   }
			   hadsDone++;
			}
	        else{
			   alert("Only two Hadamards can be performed for this demonstration. Please click the Reset button if you want to try again.");
			}
	   }
	   else{
	       alert('Please choose the initial state by clicking on the zero button or the one button');
	   }
} 
function reset(){
    firstState = -1;
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
}

