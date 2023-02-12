const temp = parseFloat(document.getElementById("temp").innerHTML);
const windspd = parseFloat(document.getElementById("windspeed").innerHTML);
const windchill  = document.getElementById("windchill");

if (temp <= 50 && windspd > 3) {
    const windChillFactor = 35.74 + 0.6215 * temp- 35.75 *(windspd ** 0.16) + 0.4275 * temp * (windspd ** 0.16);
    windchill.innerHTML = windChillFactor.toFixed(2) + "°F";
} 
else {
    windchill.innerHTML = "N/A";
}