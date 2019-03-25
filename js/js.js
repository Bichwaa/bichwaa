// $(function () {
//     $(".sticky").sticky({
//         topSpacing: 90,
//         zIndex: 2,
//         stopper: "#YourStopperId"
//     });
// });
window.onload = function() {
	lax.setup({ /* opts */ }) // init
	  
	document.addEventListener('scroll', function(e) {
	  lax.update(window.scrollY) // update every scroll
	}, false)

	lax.update(window.scrollY) // set initial positions
}




//list of available sections
sections = ['about', 'skills', 'gallery']

var about = document.getElementById("about");
var skills = document.getElementById("skills")

console.log(about.scrollTop)


// self typing about text
var i = 0;
var j=0;
let ilist=[]
var elem1 = document.getElementById("about-text1")
var elem2 = document.getElementById("about-text2")
var txt = "Hi! I am Tony, a Tanzanian, a web and mobile app developer. Thank you for visiting my site."
var txt2 = "Its only purpose is to show off my skills and name drop clients"
var txt3 = ' And maybe show off my killer good looks'
var speed = 90; /* The speed/duration of the effect in milliseconds */

function typeWrite2(){
    if (j < txt.length ) {
        elem2.innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWrite2,speed);} }


function typeWriter() {

        if (i < txt.length ) {
            elem1.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);}
}      


function deploy(callback){
    typeWriter();
    setTimeout(callback,9000)
}
$(document).ready(
    function (){
    deploy(typeWrite2);
    }
    
)
        



   

