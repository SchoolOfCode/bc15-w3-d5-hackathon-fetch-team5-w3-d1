let weatherData;

async function returnWeather() {
    console.log("Fetch request is running...");

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_hours&temperature_unit=fahrenheit&timezone=GMT");    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

let usableData;

function thenHandler(d) {
    usableData = d;
    console.log(d);
}

returnWeather().then(thenHandler);

