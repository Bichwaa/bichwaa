

var about = document.getElementById("about");
var skills = document.getElementById("skills")


const mq = window.matchMedia( "(max-width: 458px)" );
let sections = Array.from(document.getElementsByTagName('section'));



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

    
    if(mq.matches){
        let slider = document.getElementById('pages')
        let ul = Array.from(this.document.getElementsByTagName('ul'))[0]
      slider.classList.remove('pages')
      sections.forEach((section)=>{
          section.classList.remove('ops-page', 'section')
      })
    this.document.styleSheets[1].disabled=true;
    ul.style.display='none'
    }
    }
    
    