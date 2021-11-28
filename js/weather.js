const API_KEY = "40b2a29bfc8bd34c23ba1b72810415be"



function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child") //첫번째
        const city = document.querySelector("#weather span:last-child")     //두번쨰
        city.innerText = data.name;                                         //두번째
        weather.innerText = `날씨 : ${data.weather[0].main} / 온도 : ${data.main.temp}°`//첫번쨰
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)