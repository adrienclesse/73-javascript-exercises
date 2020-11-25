/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let here = document.getElementById("target");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 10; i++) {
        // creates a table row
        var row = document.createElement("tr");
                        for (var j = 0; j < 1; j++) {
                            var cell = document.createElement("td");
                            var cellText = document.createTextNode("APOLLO III ready for take of in " +i +" second");
                            cell.appendChild(cellText);
                    
                    cell.style.border="5px solid red";
                    
                    row.appendChild(cell);
                    }
        tblBody.appendChild(row);
    }
 // put the <tbody> in the <table>
 tbl.appendChild(tblBody);
 // appends <table> into <body>
 here.appendChild(tbl);
 


       
   

})();
