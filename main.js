// Document Object Targetting the p tag
const weatherText = document.getElementById("weatherText")

async function returnWeather () {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_hours&temperature_unit=fahrenheit&timezone=GMT")
    const data = await response.json()
    console.log(data)
}

returnWeather()

// Document Object Targetting the button - eventListener
const weatherButton = document.getElementById("newWeatherBtn")
weatherButton.addEventListener("click", returnWeather)


