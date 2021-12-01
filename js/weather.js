const API = '9de7d34dd5cebeb0d9725fa2be7ec143';
const weatherLayer = document.querySelector('.weather__layer');
const weatherBtn = document.querySelector('.weatherBtn')


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather .weather__state");
        const cityContainer = document.querySelector("#weather .weather__city");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

weatherBtn.addEventListener('click', () => {
    weatherLayer.classList.toggle('hidden');
})