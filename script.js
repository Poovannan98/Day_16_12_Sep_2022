function createCountries(countries){
    countries.forEach((country) => {
        var final = document.getElementById("poo")
            final.innerHTML +=`<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card text-center h-100">
                <div class="card-header">
                    <h1 class="text-center" id="title">${country.name.common}</h1>
                </div>            
                    <div class="card-body">
                        <img src="${country.flags.svg}" class="card-img-top" alt="${country.flags.png}">
                        <div class="card-text">
                            <p><span id="sp" class="captial">Capital: </span><span id="sp1">${country.capital}</span></p>
                            <p><span id="sp">Region: </span><span id="sp1">${country.region}</span></p>
                            <p><span id="sp">Population: </span><span id="sp1">${country.population}</span></p>
                            <p><span id="sp">Country Code: </span><span id="sp1">${country.cioc}</span></p>
                            <p><span id="sp">Latitude and Longitude: </span><span id="sp1">${country.latlng[0]}</span><span id="sp"> and</span> <span id="sp1">${country.latlng[1]}</span></p>
                        </div>
                        <a onclick="getingWeather()" class="btn btn-primary">Click for Weather</a>
                    </div>
                </div>            
            </div>`;
    });
}

fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((countries) => createCountries(countries))
    .catch((errMsg) => console.log("An error occurred:", errMsg));


function getingWeather(){
var out = document.querySelector('.capital');
console.log(out);
}

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${}&appid=5ffb2bf73007aff071ad4d176e997efd`)
// .then((data1) => data1.json())
// .then((weather) => console.log(weather))
// .catch((errMsg1) => console.log("An Error:",errMsg1));