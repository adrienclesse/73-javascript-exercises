/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
    document.getElementById("run").addEventListener("click", function() {
    // your code here
    
        
        var inputyear= document.getElementById("dob-year").value;
        var inputmonth= document.getElementById("dob-month").value;
        var inputday= document.getElementById("dob-day").value;

        console.log(inputday , inputmonth , inputyear );

        var myDate = new Date();

        var y = myDate.getFullYear();
        var m = myDate.getMonth()+1;
        var d = myDate.getDate();

        

        var bday = d-inputday;
        var bmonth= m-inputmonth;
        var byear= y-inputyear;
        

        var age= byear;

       
            if (bmonth<0)  {alert (age-1);}
            else if(bmonth>0) {alert(age);}
            else if (bmonth==0)
                {if(bday<0) {alert(age-1);}
                else if(bday>0) {alert(age)}
                else if (bday==0) {alert("HAPPY BIRTHDAY!")}
                 };
            
                    
    });

})();