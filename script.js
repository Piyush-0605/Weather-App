let city=document.querySelector('.city');
let temp=document.querySelector('.temp');
let humidity=document.querySelector(".humidity");
let wind=document.querySelector('.wind');
let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let weatherIcon= document.querySelector(".weather-icon");
let weather=document.querySelector('.weather');
let error=document.querySelector('.error');


const apikey="a4b513f573d882167494359e11248892";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(cityname){
    const response=await fetch(apiUrl + cityname + `&appid=${apikey}`);

    if(response.status==404){
        error.style.display="block";
        weather.style.display="none";
    }
    else{
        var data=await response.json();
        console.log(data);
    
        city.innerHTML=data.name;
        temp.innerHTML=Math.round(data.main.temp)+ "°C";
        humidity.innerHTML=data.main.humidity+ '%';
        wind.innerHTML=data.wind.speed+ "km/h";
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png";
        }
        weather.style.display="block";
        error.style.display="none";
    }
}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

