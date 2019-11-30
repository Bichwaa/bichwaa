/**
 * THIS IS INTENDED TO BE A DYNAMICALLY DOCUMENTED MODULE THAT HANDLES FULL PAGE SCROLL IN THE FRONT END
 * I just need my own full page scrolling tool that does fade effects with  as little vanilla JS as I can manage
 * I intend to open source it after it has gone through some testing
 * It is not a JS only library, there is gonna be some css too
 */


class Section {

    /**
     * Represents a section rendered to a full page inside a container instance
     */
    constructor(node, id) {
        this.node = node;
        this.id = `data-id-${id}`;
    }

}





class Container {

    /**
     * Represents the full page container.. where each full page section is rendered
     */
    constructor(id) {
        this.id = id;
        this.node = document.getElementById(id)
        this.init = this.assignNode();
        this.children = this.getChildren();
    }

    assignNode() {
        this.node.classList += 'fp-container'
        return true;
    }

    getChildren() {
        let d = {}
        let childNodes = document.getElementsByClassName('section')
        childNodes[0].classList.add('fp-active')
        for (let i = 0; i <= childNodes.length; i++) {
            //make section child nodes into section objects
            d[`${i}`] = new Section(childNodes[i], i)
        }
        return d;
    }
}


let next = document.getElementById('next');
let pres =document.getElementById('prev');

let a = new Container('fullpage');
let children = a.children;

next.addEventListener('click', () => {
    a.node.scrollBy(0,window.innerHeight)
});

prev.addEventListener('click',()=>{
    a.node.scrollBy(0,-window.innerHeight)
});

a.node.addEventListener('scroll',()=>{
    console.log('scrolled.')
})