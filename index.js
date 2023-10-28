const url = '';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6843060240msha83318a02b1e09dp17cf45jsna130143cdcbd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeatherOfCity = (city) => {
    let cityName = document.getElementById("cityName")
    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options)
        .then(response => response.json())
        .catch(err => console.log(err))
        .then((response) => {
            console.log(response);
            temp.innerHTML = response.temp 
            humidity.innerHTML = response.humidity
            feels_like.innerHTML = response.feels_like
            cloud_pct.innerHTML = response.cloud_pct
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            sun_rise.innerHTML = response.sunrise
            sun_set.innerHTML = response.sunset
            wind_speed.innerHTML = response.wind_speed
        })  
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherOfCity(city.value);
})

getWeatherOfCity("Rajahmundry")
