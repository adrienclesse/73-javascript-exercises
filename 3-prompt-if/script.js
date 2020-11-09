/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var x = prompt("Do you want some cake?",);

if (x== "yes")  {
    document.getElementById("cake").innerHTML =
    "Congratulation and enjoy your cake " 
  }

   else  {
    document.getElementById("cake").innerHTML =
    "more cake for me then :p !"
  }