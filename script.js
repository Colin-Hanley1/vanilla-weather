
const APIKEY1 = '950af29049579fa7c5c4a9e1b1f6cbf8';
const APIKEY2 = '651113a400f2aee09923b62f431c40ae';
const input = document.getElementById('searchBar');
const temperature = document.getElementById('temperature');
const description = document.getElementById('desc');
const humidity = document.getElementById('humidity');
const feelsLike = document.getElementById('feelsLike');
const windSpeed = document.getElementById('windSpeed');
const carbonMonoxide = document.getElementById('carbonMonoxide');
const nitrogenMonoxide = document.getElementById('nitrogenMonoxide');
const nitrogenDioxide = document.getElementById('nitrogenDioxide');
const sulfurDioxide = document.getElementById('sulfurDioxide');
const fpm = document.getElementById('fpm');
const cpm = document.getElementById('cpm');
const ammonia = document.getElementById('ammonia');
const aqi = document.getElementById('aqi');
const header1 = document.getElementById('header1');

weatherSearch.addEventListener('submit', e => {
    e.preventDefault();

    let cityName = input.value;

    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY1}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.main === undefined) {
            alert('There is no data for this City. Sorry!');
        } else {
            temperature.innerHTML = `${data.main.temp} °C`;
        };
  
        description.innerHTML = data.weather[0].main;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        feelsLike.innerHTML = `Feels Like: ${data.main.feels_like} °C`;
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} meters/second`;

        fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKEY1}`)
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        header1.innerHTML = 'Air Quality';
        carbonMonoxide.innerHTML = `Carbon Monoxide: ${data.list[0].components.co} µg/m^3`;
        nitrogenMonoxide.innerHTML = `Nitrogen Monoxide: ${data.list[0].components.no} µg/m^3`;
        nitrogenDioxide.innerHTML = `Nitrogen Dioxide: ${data.list[0].components.no2} µg/m^3`;
        Ozone.innerHTML = `Ozone: ${data.list[0].components.o3} µg/m^3`;
        sulfurDioxide.innerHTML = `Sulfure Dioxide: ${data.list[0].components.so2} µg/m^3`;
        fpm.innerHTML = `Fine Particulate Matter: ${data.list[0].components.pm2_5} µg/m^3`;
        cpm.innerHTML = `Coarse Particulate Matter: ${data.list[0].components.pm10} µg/m^3`;
        ammonia.innerHTML =  `Ammonia: ${data.list[0].components.nh3} µg/m^3`;
        if (data.list[0].main.aqi == 1) {
            aqi.innerHTML = 'AQI: 1 - Good'
        } else if (data.list[0].main.aqi == 2){
            aqi.innerHTML = 'AQI: 2 - Fair'
        } else if (data.list[0].main.aqi == 3){
            aqi.innerHTML = 'AQI: 3 - Moderate'
        } else if (data.list[0].main.aqi == 4){
            aqi.innerHTML = 'AQI: 4 - Poor'
        } else {
            aqi.innerHTML = 'AQI: 5 - Very Poor'
        };
    }
    );




    }
    );

    



    



});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
