let columnsRand = [];
let score = 0;
const columnsRandIds = [ {"noneId": "none00", "plusId" : "plus00", "eqId" : "eq00", "ndId":"nd00"}, 
                         {"noneId": "none01", "plusId" : "plus01", "eqId" : "eq01", "ndId":"nd01"},
                         {"noneId": "none02", "plusId" : "plus02", "eqId" : "eq02", "ndId":"nd02"}, 
                         {"noneId": "none03", "plusId" : "plus03", "eqId" : "eq03", "ndId":"nd03"},
                         {"noneId": "none04", "plusId" : "plus04", "eqId" : "eq04", "ndId":"nd04"}, 
                         {"noneId": "none05", "plusId" : "plus05", "eqId" : "eq05", "ndId":"nd05"},
                         {"noneId": "none06", "plusId" : "plus06", "eqId" : "eq06", "ndId":"nd06"}, 
                         {"noneId": "none07", "plusId" : "plus07", "eqId" : "eq07", "ndId":"nd07"},
						 {"noneId": "none08", "plusId" : "plus08", "eqId" : "eq08", "ndId":"nd08"}, 
                         {"noneId": "none09", "plusId" : "plus09", "eqId" : "eq09", "ndId":"nd09"},
                         {"noneId": "none10", "plusId" : "plus10", "eqId" : "eq10", "ndId":"nd10"}, 
                         {"noneId": "none11", "plusId" : "plus11", "eqId" : "eq11", "ndId":"nd11"}  ];
const numberSizeLimit = 9;
const arraySizeLimit = 12;
let entries = [];


// constructor to create number column objects
function NumberCol(numberSizeLimit){
  this.none = true,
  this.plus = false,
  this.equals = false,
  this.numberSizeLimit = numberSizeLimit,
  this.number = Math.floor(Math.random() * numberSizeLimit) + 1;
};

let objectPic = () => new NumberCol(numberSizeLimit);

setUp();

function setUp(){
	for (let i=0; i<arraySizeLimit; i++){
		  columnsRand.push(objectPic());
		  let radiobtn = document.getElementById(columnsRandIds[i].noneId);
		  radiobtn.checked = true;
		  document.getElementById(columnsRandIds[i].ndId).innerHTML = columnsRand[i].number;
	}
}
function howToPlay(){
	document.getElementById('how-to-play').style.display = "block";
}
function closeHow(){
	document.getElementById('how-to-play').style.display = "none";
}
function count(){
    let plusSum = 0;
	let equal = 0;
	let entry = '';
	document.getElementById('user-notify').innerHTML = "";
    for (let i=0; i<arraySizeLimit; i++){
	    let plusCheck = document.getElementById(columnsRandIds[i].plusId);
	    if( plusCheck.checked ){
			plusSum += columnsRand[i].number;
			entry += columnsRandIds[i].plusId;
		}
	}
	for (let i=0; i<arraySizeLimit; i++){
	    let eqCheck = document.getElementById(columnsRandIds[i].eqId);
	    if( eqCheck.checked && equal == 0){
			equal = columnsRand[i].number;
			entry += columnsRandIds[i].eqId;
		}
	}
	if (plusSum == equal && equal != 0){
	    let dupCheck = duplicateCheck(entry);
	         if(dupCheck == 0){
				 score += 5;		 
				 document.getElementById('score').innerHTML = score;
				 entries.push(entry);
				 resetRads(); 
			 }
			 else{
				 document.getElementById('user-notify').innerHTML = "Sorry, that combination has already been used. Please try again.";
			 }
	}
	else{
		document.getElementById('user-notify').innerHTML = "Sorry, that is not a valid combination. Please try again.";
	}
	
}
function resetRads(){
     document.getElementById('user-notify').innerHTML = "";
     for (let i=0; i<arraySizeLimit; i++){
	    let radiobtn = document.getElementById(columnsRandIds[i].noneId);
        radiobtn.checked = true;
	 }
}
function duplicateCheck(entry){
     for (let i=0; i<entries.length; i++){
	     if(entry === entries[i]){
			 return 1;
		 }
	 }
	 return 0;
}
function startNewGame(){
	score = 0;
	document.getElementById('score').innerHTML = '';
	entries = [];
	columnsRand = [];
	resetRads();
	setUp();
}