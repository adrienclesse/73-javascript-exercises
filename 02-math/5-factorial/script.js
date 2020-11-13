/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    
    // to get the value of an input: document.getElementById("element-id").value
    var n =Number(document.getElementById("number").value);

        document.getElementById("run").addEventListener("click", function factorial (n){

           var b = (n != 1) ? n * factorial(n - 1) : 1 ;  
            alert( factorial (b));       

         });

        