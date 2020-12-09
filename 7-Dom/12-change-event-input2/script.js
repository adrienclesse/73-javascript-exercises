/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#pass-one").addEventListener("keydown", function(){

        let y = document.querySelector("#pass-one").value;
        let x = y.length+1; 
        let a;
        let b;


        var numbers =  /[0-9]/g;   
        if (y.match(numbers)=true) {a=true} 
        
 
   console.log(x);
  

   if (y.match(numbers) && x>7){document.getElementById("validity").innerHTML="ok";}
        

    });
    

})();