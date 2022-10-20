function formatDate(timestamp){
    let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = date.getFullYear();
  console.log(year);
  let currentDate = date.getDate();
  console.log(currentDate);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[date.getMonth()];
  console.log(month);
 
  return `${day}, ${month} ${currentDate}, ${year} </br> Last updated:${hours}:${minutes}`;
}




function displayTemperature(response){
    
let temperatureElement=document.querySelector("#temperature");
temperatureElement.innerHTML= Math.round(response.data.main.temp);
let humidityElement=document.querySelector("#humidity");
humidityElement.innerHTML= response.data.main.humidity
let windElement=document.querySelector("#wind");
windElement.innerHTML= Math.round(response.data.wind.speed);

let cityElement=document.querySelector("#city");
cityElement.innerHTML=response.data.name;
let descriptionElement=document.querySelector("#description");
descriptionElement.innerHTML=response.data.weather[0].description;
let dateElement=document.querySelector("#date");
dateElement.innerHTML=formatDate(response.data.dt * 1000);
}


let apiKey ="9560ff313b286b0ba47037c9fdaafbe3";
let city="Lagos";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);