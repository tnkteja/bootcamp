function fetchWeather() {
    let location = document.querySelector(`input`).value;
    console.log(location);
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=39b634982508dfaa72e293120f5402e6`, {mode: `cors`})
    .then( data => {
        let p = document.querySelector(`p`);
        p.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif">`
        data.json().then( dataa => {
            console.log(dataa)
            p.innerHTML=JSON.stringify(dataa);
        });
    })
    .catch( err => {
        console.log(err);
    })
}