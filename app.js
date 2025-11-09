const locationEle = document.getElementById('location');
const timeEle = document.getElementById('localtime');
const tempEle = document.getElementById('temp');
const feelsEle = document.getElementById('feels');
const humidityEle = document.getElementById('humidity');
const windEle = document.getElementById('wind');
const iconEle = document.getElementById('icon');


const srcBox = document.getElementById('searchBox');
const srcBtn = document.getElementById('searchBtn');

const api = 'http://api.weatherapi.com/v1/current.json?';
const key = '';

async function weatherData(city) {
  fetch(`${api}${key}q=${city}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    iconEle.src = "https:" + data.current.condition.icon;
    locationEle.textContent = `${data.location.name}, ${data.location.country}`;
    timeEle.textContent = `${data.location.localtime}`;
    tempEle.textContent = `${data.current.temp_c} °C`;
    feelsEle.textContent = `${data.current.feelslike_c} °C`;
    humidityEle.textContent = `${data.current.humidity} %`;
    windEle.textContent = `${data.current.wind_kph} kph`;
  })
  .catch(error => console.error('Error fetching weather:', error));
    
}
srcBtn.addEventListener('click' , ()=> {
    const city = srcBox.value;
    if(city){
    weatherData(city);
    }else{
        alert('Please enter a city name!');
    }
});


