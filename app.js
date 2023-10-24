function search() {
    let input=document.getElementById("input").value
    let place =document.getElementById("place")
    let degree=document.getElementById("degree")
    let windspeed =document.getElementById("wind")
    let humidity=document.getElementById("humidity")
    let sunrise=document.getElementById("sunrise")
    let sunset =document.getElementById("sunset")


let Key="559ecfd973b50e7d6a2f4ff7bce1a2c4"
let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${Key}`
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    place.innerHTML=data.name
    degree.innerHTML=Math.floor(data.main.feels_like-273)+"°C"
    windspeed.innerHTML=data.wind.speed+"km/h"
    humidity.innerHTML=data.main.humidity+"%"
    sunrise.innerHTML=data.sys.sunrise
    sunset.innerHTML=data.sys.sunset
  });
}
