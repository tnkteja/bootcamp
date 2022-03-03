import home from "./home";
import menu from "./menu";
// import menu from "./menu";
// import contact from "./contact";

home();

let clearContent = ()=>{
    let content = document.querySelector("#content");
    content.innerHTML='';
}

function ghome(){
    clearContent();
    home();
}

function gmenu(){
clearContent();
menu();
}