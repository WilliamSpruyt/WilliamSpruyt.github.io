
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
        