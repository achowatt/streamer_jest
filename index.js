const axios = require("axios");

async function getContent(param) {
    if (param == "pokemon") {
        let id = Math.floor(Math.random() * 801);
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-form/${id}/`
        );
        let obj = response.data["sprites"]["front_default"];
        console.log(`This is the picture url: ${obj}`);
        console.log(typeof obj);
        return obj;
    } else if (param == "joke") {
        let response = await axios.get("https://api.chucknorris.io/jokes/random");
        let obj = response.data["value"];
        console.log(`This is the joke url: ${obj}`);
        console.log(typeof obj);
        return obj;
    } else if (param == "weather") {
        let response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=1ed70474cd650d1d691933fc05212256"
        );
        let temperature = response.data["main"]["temp"];
        console.log(`Toronto's temperature is ${temperature} kelvins.`);
        console.log(typeof temperature);
        return temperature;
    }
}

module.exports = getContent;