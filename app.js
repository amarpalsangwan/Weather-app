let apiKey = "866b50a381786a8dfcefbb9ffb6d43c2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // if(response.status == 400){
    //     document.querySelector.apply(".error").style.display = "block";
    //     document.querySelector.apply(".weather").style.display = "none";
    // } else {
        
    // }

    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
});

