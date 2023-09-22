async function returnWeather() {
    console.log("Fetch request is running...");

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_hours&temperature_unit=fahrenheit&timezone=GMT");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function changeText(){
    const newText = await returnWeather();

    let minTempOne = newText.daily.temperature_2m_min[0]

    let maxTempOne = newText.daily.temperature_2m_max[0]
    weatherDayOne.textContent = `Today's maxmimum temperature will be ${maxTempOne} degree's fehrenheit. The minimum will be ${minTempOne} fehrenheit`
}

// Create button event
let button = document.getElementById("newWeatherBtn")


// Target where the weather is going
let weatherDayOne = document.getElementById("weatherDayOne")
let weatherDayTwo = document.getElementById("weatherDayTwo")
let weatherDayThree = document.getElementById("weatherDayThree")
let weatherDayFour = document.getElementById("weatherDayFour")
let weatherDayFive = document.getElementById("weatherDayFive")
let weatherDaySix = document.getElementById("weatherDaySix")
let weatherDaySeven = document.getElementById("weatherDaySeven")
// console.log(weatherText)

// Trigger event when button is clicked

button.addEventListener("click", changeText)



