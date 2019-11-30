

//list of available sections
sections = ['about', 'skills', 'gallery']

var about = document.getElementById("about");
var skills = document.getElementById("skills")




// self typing about text
var i = 0;
var j=0;
let ilist=[]
var elem1 = document.getElementById("intro-text")
var txt = `Hi! I am Newton. Here to build the website and app you need while your focus remains on the business.`
var speed = 60; /* The speed/duration of the effect in milliseconds */



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

   window.onload =  function (){
    deploy();
    }
    
    