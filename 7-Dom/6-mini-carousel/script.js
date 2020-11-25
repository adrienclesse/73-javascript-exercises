/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

let image = document.getElementsByTagName("img")[0];
let imageOn = 0;

document.getElementById("next").addEventListener('click',function() {
    if(imageOn===4) {imageOn=0;}
    else {imageOn++;} 

    return image.src= gallery[imageOn];

});












    //document.getElementById("next").addEventListener('click',function() {
       // var myImage = document.getElementById('image');
        //var imageIndex = 1;
       // for (i=0;i<gallery.length;x++)

        
       //  function nextImage() { myImage.setAttribute("src",gallery[imageIndex]);
        //  return imageIndex++;}

            
       


    
    //});
})();