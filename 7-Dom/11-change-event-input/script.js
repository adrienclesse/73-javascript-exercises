/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").maxLength=10;
    let x=document.getElementById("pass-one").maxLength

    console.log(x);

    document.querySelector("#pass-one").addEventListener("keydown", function(){

         let y = document.querySelector("#pass-one").value.length;
  
    console.log(y);

        document.getElementById("counter").innerHTML=y +"/10";
    });
    

})();