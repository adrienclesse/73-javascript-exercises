/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
    
        fetch("http://localhost:3000/heroes")

            .then(response => {console.log(response);
                return response.json();
            })
            
            .then(data=> {
                console.log(data);
                data.forEach(hero => {
                    let name = hero.name;
                    let alterEgo = hero.alterEgo;
                    let abilities = hero.abilities;
        
                        document.getElementById("target").innerHTML += `<li><h1>${name}</h1></li> <li> alter ego : ${alterEgo}</li> `
                        document.getElementById("target").style.textAlign = "left";
                       // document.querySelector(h2).style.fontStyle = "left";
                })
            });
          
    });
})();
