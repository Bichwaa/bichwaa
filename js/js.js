/**
 * @description - A class whose instances mimics a human typing out a string to a 'text displaying html element'.
 */
class TypeWrite{

    constructor(txt){
        this.text = txt;
        this.i = 0;
        this.speed = 35; //The speed/duration of the effect in milliseconds 
        this.executed = false; //you may want it to run only once.
    }

    typewriteTo(el) {
        if(this.i < this.text.length ) {
            el.innerHTML += this.text.charAt(this.i);
            this.i++;
            setTimeout(()=>this.typewriteTo(el), this.speed);
        }
    }      

}


/**
 * 
 * @description - A helper function to tell you if an element is in the viewport
 * @param {HTMLElement} elem  - Element whoe presence in the viewport we want to check.
 * @returns {Boolean} 
 */
function isInViewport (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



let introTypewriteTarget = document.getElementById("intro-sidenote");
let introSideText = `Hi! I am Newton. Here to build the website and app you need while your
             focus remains on the business.`

let clientsTypewriteTarget = document.getElementById('clients-sidenote');
let clientsSideText = `Here are some of my clients. You can't see their faces but you can tell they are happy people.`

//type intro text immediately after the page loads
window.onload =  function (){
let typeWriter = new TypeWrite(introSideText);
typeWriter.typewriteTo(introTypewriteTarget)

}

//type clients text once it shows u in the viewport
document.addEventListener("scroll",()=>{
    if(isInViewport(clientsTypewriteTarget) && clientsTypewriteTarget.innerHTML==''){
        const clientsTypewriter = new TypeWrite(clientsSideText);
        clientsTypewriter.typewriteTo(clientsTypewriteTarget)
    }
})