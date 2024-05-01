
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
   
});
 

var voices = [];
 
hour = 0;
minute = 0;
timechangecheck="";
timeCounter=0;
typespeed=50;

$(document).ready(function () {
  $('.collapsible').collapsible();
  var date1 = new Date();


  var date2 = new Date('May 15, 1973 00:00');
  var daysOld = Math.floor((date1 - date2) / 86400000) + " days old";
  d = new Date();
  hour = d.getHours();
  minute = d.getMinutes();

  MINUTEWORDS = ['bang on', 'just gone', 'about', 'nearly', 'just about']
  MINUTETIMEWORDS = ['', 'five past', 'ten past', 'a quarter past', 'twenty past', 'twenty-five past', 'half', 'twenty-five to',
    'twenty to', 'a quarter to', 'ten to', 'five to', '']
  HOURWORDS = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'noon',
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
  window.requestAnimationFrame(step);
  
  document.getElementById("daysOld").innerHTML = daysOld;
});


function step(timestamp) {
  var d = new Date();
      
	  hour=d.getHours();
	 minute=d.getMinutes();
	   
  var theTime="it\'s "+wordTimeMaker(hour,minute);
  
if (theTime!==timechangecheck){
    

  document.getElementById("timeReadOut").innerHTML = timechangecheck;
    
     
    timechangecheck=theTime.slice(0,timeCounter);
	 	timeCounter+=1;
	
	
	}
  else{timeCounter=0;document.getElementById("timeReadOut").innerHTML = theTime;}
 
   
    window.requestAnimationFrame(step);
  
}
 function wordTimeMaker(hora,mins){
	 var wordTime='';
	 var h=hora;
	 
	 var handPos=Math.round(mins/5);
	 var handMod=mins%5;
	 if  (handPos>6){h++}
	 wordTime=MINUTEWORDS[handMod]+' '+MINUTETIMEWORDS[handPos]+' '+HOURWORDS[h] ;
	  
	return wordTime;
	 
 }
 
  

