var age = prompt("How old are you?");
var gender = prompt("Male or female?");
var town  = prompt("In which town do you live?");

alert('you are a '+ gender+ ' of ' + age + ' years old ' + ' from ' + town);

let result = confirm("Do you confim all your answeres?");

console.log(result)

if (result==true) {
    document.getElementById("confirm").innerHTML =
    "Thanks for submitting!" 
  } 

  else{
    var age = prompt("How old are you?");
    var gender = prompt("Male or female?");
    var town  = prompt("In which town do you live?");
    
    alert('you are a '+ gender+ ' of ' + age + ' years old ' + ' from ' + town);
    
    let result = confirm("Do you confim all your answeres?");
    
    console.log(result)
  }
    


