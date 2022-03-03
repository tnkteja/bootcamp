let table = document.querySelector(`table`);

let create = ()=> {
    let html='';
    for(let i=0;i<3;i++) {
    html+=`<tr id=${i}>`
    for(let j=0;j<3;j++) {
     html+= `<td id=${String(i)+String(j)}></td>`
    }
    html+=`</tr>`
    }
table.innerHTML=html;
document.querySelector("#b").disabled = true;
}

let gB = [[`_`,`_`,`_`], [`_`,`_`,`_`], [`_`,`_`,`_`]]
let player1turn = true;
let count=0;
let addMark = ([i,j]) => {
let td = document.querySelector(`#e${String(i)+String(j)}`);
if(player1turn)  {
    td.children[0].innerHTML = `X`;
    
    gB[i][j] = `X`
}
else {
    td.children[0].innerHTML = 'O'
    gB[i][j] = `O`
}
td.children[0].disabled = true;
if(isWinningMove(player1turn)) {

    let h1=document.querySelector("h1");
    h1.style.display=`block`;
    let label = document.querySelector(`label`)
    if(player1turn) {
        label.innerHTML = "1"
    } else {
        label.innerHTML = "2"
    }
}
count++;
if(count == 9) {
    let h1=document.querySelector("h1");
    h1.style.display=`block`;
    h1.innerHTML = "It's a tie!";

}
player1turn =!player1turn
}

function isWinningMove(player1turn) {
    let mark = player1turn? `X`:`O`;
    return (
        (gB[0][0] == mark && gB[0][1] == mark && gB[0][2] == mark)
        ||
        (gB[1][0] == mark && gB[1][1] == mark && gB[1][2] == mark)
        ||
        (gB[2][0] == mark && gB[2][1] == mark && gB[2][2] == mark)
        ||
        (gB[0][0] == mark && gB[1][0] == mark && gB[2][0] == mark)
        ||
        (gB[0][1] == mark && gB[1][1] == mark && gB[2][1] == mark)
        ||
        (gB[0][2] == mark && gB[1][2] == mark && gB[2][2] == mark)
        ||
        (gB[0][0] == mark && gB[1][1] == mark && gB[2][2] == mark)
        ||
        (gB[0][2] == mark && gB[1][1] == mark && gB[2][0] == mark)
    )
}


function start() {
    location.reload()
}


