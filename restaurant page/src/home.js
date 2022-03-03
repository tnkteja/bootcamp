function home() {

    let img = document.createElement("img");
    img.setAttribute("src","https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg");
        
    let h1 = document.createElement(`h1`);
    h1.innerHTML = "London Stock Restaurant";

    let p = document.createElement(`p`);
    p.innerHTML = "Elegant & modern British fine dining meets innovative Asian cooking techniques, set in the historic heart of Wandsworth.";

    let content = document.querySelector(`#content`);

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
}

export default home;