// Write a simple function to test the Dad Jokes API
async function fetchWeather() {
    console.log("The fetch function works!");
    // Make a HTTP GET request with the fetch method
    // HTTP METHOD: GET
    // Address: https://icanhazdadjoke.com/
    // Header: Accept: application/json
    // Declare a variable to store the HTTP response
    const response = await fetch("https://open-meteo.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    // If the request fails log out an error
    if (!response.ok) {
      console.error(`Status: ${response.status}`);
      console.error(`Text: ${await response.text()}`);
      return;
    }
    // Use the json method that parses the reponses body as JSON.
    const data = await response.json();
    // Log out our parsed data
    console.log(typeof data, data);
    alert(data.joke);
    let ids = [];
    ids.push(data.id);
    console.log(ids)
  }
  fetchWeather();