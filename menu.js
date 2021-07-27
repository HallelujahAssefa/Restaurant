const appetizerNav = document.querySelector('#appNav');
const entreeNav = document.querySelector('#entreeNav')
const drinkNav = document.querySelector('#drinkNav');
const app = document.querySelector("#app");
const entree = document.querySelector('#entree');
const drink = document.querySelector('#drink');
const seemore = document.querySelector('button .seemore')

function clickedEntree(e){ 
    if(e.currentTarget = entreeNav){ 
        entree.style.display= "inline";
        app.style.display= "none";
        drink.style.display= "none";
    } 
}

function clickedApp(e){
        if (e.currentTarget = appetizerNav){
                app.style.display= "inline";
                entree.style.display= "none";
                drink.style.display= "none";
    } 
    }
function clickedDrink(e){
    if(e.currentTarget = drinkNav) {
            drink.style.display= "inline";
        entree.style.display= "none";
        app.style.display= "none";
    } 
}

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
  
appetizerNav.addEventListener('click', clickedApp);
entreeNav.addEventListener('click', clickedEntree);
drinkNav.addEventListener('click',clickedDrink);

