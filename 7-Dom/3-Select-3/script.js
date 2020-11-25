var elements = document.querySelectorAll(".target");
for(var x=0; x<elements.length; x++) {
   elements[x].innerHTML="Owned"
}

var elements = document.querySelectorAll(".target");
elements.forEach(x => {
    x.innerHTML = "owned";
})
