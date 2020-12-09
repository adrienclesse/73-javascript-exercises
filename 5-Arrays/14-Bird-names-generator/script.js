/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "seagull", num: 1},
        {name: "raven", num: 3},
        {name: "chickadee", num: 2},
        {name: "owl", num: 4},
        {name: "buzzard", num: 8},
        {name: "pigeon", num: 1},
        {name: "magpie", num: 3},
        {name: "vulture", num: 2},
        {name: "falcon", num: 1},
        {name: "robin", num: 2},
        {name: "dove", num: 1},
        {name: "crow", num: 5},
    ];
    const adjectives = new Set([
      'gray',
      'hoopoe',
      'singing',
      'howling',
      'perched',
      'tall',
      'small',
      'blue',
      'panting',
      'tangent',
      'sported',
    ]);

   const arrayOfAdjectives = Array.from(adjectives);

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      num1= getRandomNumber(0,13);
      num2= getRandomNumber(0,12);

      randomBird= birds[num1].name;
      randomAdjective= arrayOfAdjectives[num2];

      document.getElementById("run").addEventListener("click",function() {

        if (birds[num1].num===1){document.getElementById("target").innerHTML= "a " + randomAdjective + " " +randomBird;}

        else {document.getElementById("target").innerHTML= "some " + randomAdjective + " " +randomBird+"s";}

        

      });
     



      
})();