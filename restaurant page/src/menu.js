 function menu () {
    let h1 = document.createElement(`h1`);
    h1.innerHTML = "Menu";
let img1 = document.createElement(`img`);
img1.src="https://chakriskitchen.com/wp-content/uploads/2018/12/Idly19.jpg";
img1.style="height: 10em;"
let h21 = document.createElement(`h2`);
h21.innerHTML="Item 1";
let p1 = document.createElement(`p`);
p1.innerHTML = "Price 5rupees";

let img2 = document.createElement(`img`);
img2.src="https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900";
img2.style="height: 10em;"
    let h22 = document.createElement(`h2`);
    h22.innerHTML="Item 2";
    let p2 = document.createElement(`p`);
    p2.innerHTML = "Price 52rupees";

    let content = document.querySelector(`#content`);

    content.appendChild(h21);
    content.appendChild(p1);
    content.appendChild(img1);
    content.appendChild(h22);
    content.appendChild(p2);
    content.appendChild(img2);
}

export default menu;