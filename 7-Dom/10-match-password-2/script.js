/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click",function() {
        var password1 = document.getElementById("pass-one");
        var password2 = document.getElementById("pass-two");
        console.log(password1.value);
        console.log(password2.value);
        var v = document.getElementById("pass-one").value;
        var v1= v.length;
        var v2 = document.getElementById("pass-two");

        console.log(v1)

        if (password1.value===password2.value) {alert("your password has been correctly saved"); password1.style.color="green"}
        else {v.className+="error"; v2.className+="error"}       

    });

})();
