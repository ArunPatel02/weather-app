const cityname = document.getElementById('cityname');
const searchbtn = document.getElementById('searchbtn');
const output = document.getElementsByClassName('output');

let createele = document.createElement('h1');
output[0].innerHTML = `<h1>Enter the city name </h1>`

const getinfo = async(event)=>{
    event.preventDefault();
    let citynm = cityname.value;
    if (citynm === "") {
        output[0].innerHTML = `<h1>please enter the city name</h1>`;
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${citynm}&units=metric&appid=45f89f08e9beaa33055f2be0c500f21f`;
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            const arrdata = [data];
            console.log(data);
            console.log(arrdata);

            const icon = arrdata[0].weather[0].icon;

            output[0].innerHTML = `
            <div class="image">
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
            <h2 class="condition">${arrdata[0].weather[0].description}</h2>
        </div>
        <div id="temperature">
        <h1> Temperature = ${Math.round(arrdata[0].main.temp)} ℃ </h1>
        </div>
        <div class="allproperty">
            <h3 class="Precipitation">Precipitation : ${arrdata[0].main.humidity} %</h3>
            <h3 class="humidity">Humidity : ${arrdata[0].main.humidity} %</h3>
            <h3 class="Wind Speed">wind speed : ${Math.round((arrdata[0].wind.speed)*3.6)} km/h</h3>
        </div>
        <div class="placedetail">
            <h1 class="location">${citynm}  , ${arrdata[0].sys.country} </h1>
            <h3 class="day"></h3>
        </div>
            `
        }
        catch{
            output[0].innerHTML = `<h1>Enter the city name properly</h1>`
        }
    }
}

searchbtn.addEventListener('click', getinfo)