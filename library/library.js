function Book (title,author,pages, read) {
    this.id= Math.random();
this.title = title;
this.author=author;
this.pages=pages;
this.read =read;
}

Book.prototype.info=function(){
    return `${this.title} by ${this.author},${this.pages} pages, ${this.read?"read":"not read yet"}`
}

let Books = []



function render() {
    let html=`<tr>
<th>Title</th>
<th>Author</th>
<th>numberOfPages</th>
<th>read</th>
<th>Action</th>
</tr>`;
let table = document.querySelector("table");
console.log(Books);
if(Books.length ==0) {
    table.innerHTML = html;
}
    for(let book of Books) {
    console.log(book);
    html += `<tr> 
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><button onclick='remove(${book.id})'>remove</button><button onclick="read(${book.id})">read</button></td></tr>`
    table.innerHTML=html;
}
}
render();
let read = (id) => {
    console.log(id, Books);
    let book = Books.find( book=> book.id ===id) ;
    console.log(book)
    book.read = !book.read;
    render();
}

let remove = (id) => {
console.log(id)
let index=Books.findIndex( book => book.id === id);
Books.splice(index,1);
console.log(Books);
render()
}

let add = () => {
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let numberOfPages = document.querySelector("#numberOfPages").value;
    let book = new Book(author, title, numberOfPages, false);
    Books.push(book);
    let form = document.querySelector( `form`);
    form.style.display="none";

    render();
    form.reset();
}

let newbook = () => {
    let form = document.querySelector( `form`);
    console.log(form.style.display)
    if(form.style.display  == '' || form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none";
    }
}