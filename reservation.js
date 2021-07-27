const mq = window.matchMedia("(max-width: 586px)");

if(mq.matches){
const ul = document.querySelector('.navUL');
const button = document.querySelector('.hButton');
const menuBar = document.querySelector('.menuBar');


function showNav(){
    if(ul.style.display != "block" & button.style.display !="block") {
        ul.style.display = "block";
        button.style.display ="block";
    } else {
        ul.style.display = "none";
        button.style.display ="none";
    }
}


menuBar.addEventListener('click', showNav)
}
