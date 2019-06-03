
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
    var date1 = new Date();


var date2 = new Date('May 15, 1973 00:00');
var daysOld=Math.floor((date1 - date2)/86400000)+" days old";

 
document.getElementById("daysOld").innerHTML = daysOld;
  });
        
function explainDelay(){
 return confirm("This project is hosted on at a free Heroku domain which 'sleeps' when not in use. You may experience a short delay while it 'wakes up'")
}

function redirect(url){ 
   
  if(explainDelay()){
   
    window.location.href=url;
  }
}