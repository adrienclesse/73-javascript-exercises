let getIT = document.getElementById("source");
let link = getIT.getAttribute("data-image");

    console.log(link);
    var img = document.createElement('img'); 
    img.src =link;
    document.getElementById('target').appendChild(img); 

    getIT.remove();
//document.getElementById("target").src=link;
