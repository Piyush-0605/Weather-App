
let searchbox=document.querySelector('.search input');
let searchbtn=document.querySelector('.search button');
let error=document.querySelector('.error');
let weather=document.querySelector('.weather');
let city=document.querySelector('.city');
let temp=document.querySelector('.temp');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let weathericon=document.querySelector('.weather-icon');



apikey="a4b513f573d882167494359e11248892";
apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(cityname){
    let response=await fetch(apiUrl+ cityname +`&appid=${apikey}`);

    if(response.status==404){
        error.style.display="block";
        weather.style.display="none";
    }
    else{
        let data=await response.json();
        // console.log(data)

        city.innerHTML=`${data.name}`
        temp.innerHTML=`${Math.round(data.main.temp)}` + `°C`;
        humidity.innerHTML=`${data.main.humidity}`+`%`;
        wind.innerHTML=`${data.wind.speed}`+` km/h`;

        if(data.weather[0].main=="Clouds"){
            weathericon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png";
        }

        weather.style.display="block";
        error.style.display="none";     
    }
   
}



searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
    searchbox.value="";
})
searchbox.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        checkWeather(searchbox.value);
        searchbox.value="";
    }
})