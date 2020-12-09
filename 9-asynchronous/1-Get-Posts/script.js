/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
        
        window.lib.getPosts(function(error, articles){
            console.log(error,articles);

        });

    });
    //fetch(https://restcountries.eu/rest/v2/all)
})();


(() => {
    document.getElementById("run1").addEventListener("click",function(){
        
        fetch("https://restcountries.eu/rest/v2/all");
            then(response => response.json())
            then(data => console.log(data));
    })();
            

})();