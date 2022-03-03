 function menu () {
    let h1 = document.createElement(`h1`);
    h1.innerHTML = "Menu";

    let h21 = document.createElement(`h2`);
    h21.innerHTML="Item 1";
    let p1 = document.createElement(`p`);
    p.innerHTML = "Price 5rupees";
    
    let h22 = document.createElement(`h2`);
    h22.innerHTML="Item 2";
    let p2 = document.createElement(`p`);
    p2.innerHTML = "Price 52rupees";

    let content = document.querySelector(`#content`);

    content.appendChild(h21);
    content.appendChild(p1);
    content.appendChild(h22);
    content.appendChild(p2);
}

export default menu;