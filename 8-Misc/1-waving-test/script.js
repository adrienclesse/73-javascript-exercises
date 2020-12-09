/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = document.querySelector("#target");
    var textContent = text.innerText;
    

    var letters = textContent.split("");
     text.innerText="";

    for (i=0;i<letters.length;i++){
        //function getNumber(max, min) {
       // return Math.floor(Math.random() * (max - min + 1) ) + min;
      //  }
        var fontSize=i%8;
        
        var result = letters[i].fontsize(fontSize);
        document.getElementById("target").innerHTML+=result;
        console.log(result);

       
    };
        
 
})();