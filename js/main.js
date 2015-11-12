
$(document).ready(function(){ 
  var mgrammes = 0;

  Start(); 
  
  
  function chrono(){ 

    mgrammes += 20; 
    

    $("#timer").html(mgrammes);

  } 
  
  function Start(){ 

      timerID = setInterval(chrono, 1000); 
 
    } 
  } 
  
}); 