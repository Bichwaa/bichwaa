////animation options generators

const slideDown = {reset:true,distance:"-100%"}


const slideRight = {reset:true, distance:'100%', origin:"left", duration:2000, mobile:false}


//animation staging
ScrollReveal().reveal('.section-title', {...slideDown});

ScrollReveal().reveal('.about-content', {delay:300, reset:true});

ScrollReveal().reveal('#port-1', {delay:300, reset:true});

ScrollReveal().reveal('#port-2', { reset:true, distance:'100%'});

ScrollReveal().reveal('#port-3', {delay:300, ...slideRight, distance:"200%"});

ScrollReveal().reveal('#port-4', {delay:300, ...slideDown, duration:2000});

ScrollReveal().reveal('#port-5', {delay:300, reset:true, duration:3000});