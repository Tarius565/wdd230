// select HTML elements in the document
const currentTemp1 = document.querySelector('#temp1');
const currentHumid1 = document.querySelector('#humid1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#weather-descriptor1');
const currentTemp2 = document.querySelector('#temp2');
const currentHumid2 = document.querySelector('#humid2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#weather-descriptor2');
const currentTemp3 = document.querySelector('#temp3');
const currentHumid3 = document.querySelector('#humid3');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#weather-descriptor3');
const q = "carlsbad,us";
const units = "imperial";
const appid = "ee20c33c78e841405a23f2328aadb035";
const url = "https://api.openweathermap.org/data/2.5/forecast/?q="+q+"&cnt=29"+"&appid="+appid+"&units="+units;
const time = " 15:00:00";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    var info1 = new Date(),
    month1 = '' + (info1.getMonth() + 1),
    day1 = '' + (info1.getDate() + 1),
    year1 = info1.getFullYear();

    if (month1.length < 2) 
        month1 = '0' + month1;
    if (day1.length < 2) 
        day1 = '0' + day1;

    var formattedDate1 = year1 + '-' + month1 + '-' + day1;

    var info2 = new Date(),
    month2 = '' + (info2.getMonth() + 1),
    day2 = '' + (info2.getDate() + 2),
    year2 = info2.getFullYear();

    if (month2.length < 2) 
        month2 = '0' + month2;
    if (day2.length < 2) 
        day2 = '0' + day2;

    var formattedDate2 = year2 + '-' + month2 + '-' + day2;

    var info3 = new Date(),
        month3 = '' + (info3.getMonth() + 1),
        day3 = '' + (info3.getDate() + 3),
        year3 = info3.getFullYear();

    if (month3.length < 2) 
        month3 = '0' + month3;
    if (day3.length < 2) 
        day3 = '0' + day3;

    var formattedDate3 = year3 + '-' + month3 + '-' + day3;
   
    var day1;
    var day2;
    var day3;

    for (let i = 0; i < weatherData.list.length; i++) {
      if (formattedDate1+time == weatherData.list[i].dt_txt)
      {
        day1 = i;
      }
    }
    for (let i = 0; i < weatherData.list.length; i++) {
      if (formattedDate2+time == weatherData.list[i].dt_txt)
      {
        day2 = i;
      }
    }
    for (let i = 0; i < weatherData.list.length; i++) {
      if (formattedDate3+time == weatherData.list[i].dt_txt)
      {
        day3 = i;
      }
    }

    currentTemp1.innerHTML = `Temp: <strong>${weatherData.list[day1].main.temp.toFixed()}</strong>`;
    currentTemp2.innerHTML = `Temp: <strong>${weatherData.list[day2].main.temp.toFixed()}</strong>`;
    currentTemp3.innerHTML = `Temp: <strong>${weatherData.list[day3].main.temp.toFixed()}</strong>`;

    currentHumid1.innerHTML = `Humidity: <strong>${weatherData.list[day1].main.humidity.toFixed()}</strong>`;
    currentHumid2.innerHTML = `Humidity: <strong>${weatherData.list[day2].main.humidity.toFixed()}</strong>`;
    currentHumid3.innerHTML = `Humidity: <strong>${weatherData.list[day3].main.humidity.toFixed()}</strong>`;

    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[day1].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[day2].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[day3].weather[0].icon}.png`;
    const desc1 = weatherData.list[day1].weather[0].description;
    const desc2 = weatherData.list[day2].weather[0].description;
    const desc3 = weatherData.list[day3].weather[0].description;

    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    captionDesc1.textContent = desc1;

    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;

    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = desc3;
  }