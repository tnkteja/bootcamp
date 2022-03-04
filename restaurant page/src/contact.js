
 function contact () {
    let h1 = document.createElement(`h1`);
    h1.innerHTML = "Contact";

    let p = document.createElement(`p`);
    p.innerHTML = "Chef<br>555-555-5554<br>totallyRealEmail@notFake.com";

    let content = document.querySelector(`#content`);

    content.appendChild(h1);
    content.appendChild(p);
}

export default contact;