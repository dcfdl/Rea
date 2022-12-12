// esconde o header

const nav= document.querySelector("header");
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else{
        nav.classList.remove('hide')
    }

    prevScrollpos = currentScrollPos;
    
})