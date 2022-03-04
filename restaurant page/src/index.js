import home from "./home";
import menu from "./menu";
import contact from "./contact";

home(); // default

let clearContent = ()=>{
    let content = document.querySelector("#content");
    content.innerHTML='';
}

document.querySelector("#home").addEventListener( "click", ()=> {
    clearContent();
    home();
})

document.querySelector("#menu").addEventListener("click", ()=> {

    clearContent();
menu();
})
document.querySelector("#contact").addEventListener("click", ()=> {

    clearContent();
contact();
})



function used() {
console.log("used");
}
used();

console.log("here")