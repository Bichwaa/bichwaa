let about = document.getElementById("about");
let skills = document.getElementById("skills")


const mq = window.matchMedia( "(max-width: 458px)" );
let sections = Array.from(document.getElementsByTagName('section'));



// self typing about text
let i = 0;
let j=0;
let ilist=[]
let elem1 = document.getElementById("intro-text")
let txt = `Hi! I am Newton. Here to build the website and app you need while your focus remains on the business.`
let speed = 35; /* The speed/duration of the effect in milliseconds */



function typeWriter() {

        if (i < txt.length ) {
            elem1.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
}      


   window.onload =  function (){
    typeWriter();

    
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
    
    