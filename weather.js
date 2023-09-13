const ApiKey= "d8183c6420c6e8b7ab0af59824541af9";
const ApiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



const Searchtxtbox =document.querySelector(".search input")
const Searchbtn =document.querySelector(".search button")
const WeatherIcon =document.querySelector(".weather_icon")

async function Weathercheck(city){
  const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
 

  if(response.status == 404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display="none"

  }else {
    var data =await response.json();
    console.log(data)
  
    document.querySelector(".city").innerHTML =data.name
    document.querySelector(".temp").innerHTML =Math.floor(data.main.temp)+" °c"
    document.querySelector(".humidity").innerHTML =data.main.humidity+` %`;
    document.querySelector(".wind").innerHTML =data.wind.speed +` km/h`

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src="clouds.png"
      }else if(data.weather[0].main == "Clear"){
        WeatherIcon.src="clear.png"
      }else if(data.weather[0].main == "Rain"){
        WeatherIcon.src="rain.png"
      }else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src="drizzle.png"
      }else if(data.weather[0].main == "Mist"){
        WeatherIcon.src="mist.png"
      }
    
      document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"

    
  }

}


 Searchbtn.addEventListener("click",()=>{
    Weathercheck(Searchtxtbox.value)

 })