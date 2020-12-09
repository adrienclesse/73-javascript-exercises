/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#run").addEventListener("click",function() {
        let array1 = [];
        for (i=0; i < 10; i++){
        array1.push(Math.floor((Math.random()*100)+1));
        //console.log(array1[i]);

        let cell = "n-" + (i+1) ;

        document.getElementById(cell).innerHTML = array1[i];  

        
    
        }
        document.getElementById("min").innerHTML= Math.min(array1[i]);
        
        document.getElementById("max").innerHTML= Math.max(array1[i]);

    });
})();
