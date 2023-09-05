const inputBox=document.querySelector('.input-box')
const searchBtn=document.getElementById('searchBtn')
const weatherImg=document.querySelector('.weather-img')
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description')
const humidity=document.getElementById('humidityId')
const wind_speed=document.getElementById('wind-speed')
const errorLoc=document.querySelector('.error-loc')
const weatherBody=document.querySelector('.weather-body')

async function checkWeather(city){
        const key="cc501ca94eb292323ed27cc92ca3c516"
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

        const weatherData= await fetch(`${url}`).then(response => response.json())
        
        temperature.innerHTML=`${Math.round(weatherData.main.temp - 273.15)}°C`
        description.innerHTML=`${weatherData.weather[0].description}`
        humidity.innerHTML=`${weatherData.main.humidity}%`
        wind_speed.innerHTML=`${weatherData.wind.speed}Km/H`
        // console.log(weatherData)
        
        if(weatherData.cod === `404`){
            errorLoc.style.display="flex"
            weatherBody.style.display="none"
            console.log("error")
            return;
        }
        weatherBody.style.display="flex"
        errorLoc.style.display="none"
        switch (weatherData.weather[0].main){
            case 'Clouds':
                weatherImg.src="/images/cloud.png"
            break
            case 'Clear':
                weatherImg.src="/images/clear.png"
                break
            case 'Rain':

                weatherImg.src="/images/rain.png"
                break
            case 'Mist':
                weatherImg.src="/images/mist.png"
                break
            case 'Snow':
            weatherImg.src="/images/snow.png"
                break  
            
            }
    }

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
})