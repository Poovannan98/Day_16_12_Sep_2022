function createCountries(countries){
    countries.forEach((country) => {
        var final = document.getElementById("poo")
            final.innerHTML +=`<div class="col">
            <div class="card text-center h-100">
                <h5 class="card-header">${country.name.common}</h5>
                <div class="card-body">
                    <img src="${country.flags.svg}" class="card-img-top" alt="${country.flags.png}">
                    <p class="card-text">Capital: ${country.capital}</p>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country Code: ${country.cioc}</p>
                    <p class="card-text">Latitude and Longitude: ${country.latlng[0]} and ${country.latlng[1]}</p>
                    <a href="#" class="btn btn-primary">Click for Weather</a>
                </div>
            </div>            
        </div>`;
    });
}

fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((countries) => {createCountries(countries);
        console.log(countries);})
    .catch((errMsg) => console.log("An error occurred:", errMsg));