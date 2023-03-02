const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});

var date = new Date();
var year = date.getFullYear();
document.querySelector("#copyrightYear").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("dateModified").innerHTML = lastModified

var dayOfWeek = date.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
  document.getElementById("meeting-banner").style.display = "block";
}


// var d = new Date();
// if (d.getDay() === 1) {
//   var meetGreet = document.createElement("div");
//   meetGreet.setAttribute("class", "meet-and-greet");
//   meetGreet.innerHTML =
//     "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
//   document.main.appendChild(meetGreet);
// }
