const searchButton =document.getElementById("searchButton")
const cityInput =document.getElementById("cityInput")
const cityName =document.getElementById("city-name");
const cityTime =document.getElementById("city-time")
const cityTemp =document.getElementById("city-temp")
const cityCondition =document.getElementById("city-condition")

async function getData(cityInput){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=e1436d6d4fa24de89b2194451252205&q=${cityInput}&aqi=yes`);
   return await promise.json();
}

searchButton.addEventListener('click', async() =>{
 const city = cityInput.value;
const result = await getData(city);

cityName.innerText= `${result.location.name}, ${result.location.region}, ${result.location.country}`;
cityTime.innerText=`Local Time : ${result.location.localtime}`;
cityTemp.innerText=`Temp : ${result.current.temp_c}`;
cityCondition.innerText=`Condition : ${result.current.condition.text}`
})


//http://api.weatherapi.com/v1/current.json?key=e1436d6d4fa24de89b2194451252205&q=Pithoragarh&aqi=yes
