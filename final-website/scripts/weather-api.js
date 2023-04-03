// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-descriptor');
const windSpeed = document.querySelector('#windspeed');
const q = "carlsbad";
const units = "imperial";
const appid = "ee20c33c78e841405a23f2328aadb035";
const url = "api.openweathermap.org/data/2.5/forecast?q="+q+"&appid="+appid+"&units="+units;
const today = new Date();


async function apiFetch() {
    try {
      console.log(today);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed()}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windspeed = weatherData.wind.speed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeed.textContent = windspeed;
  }