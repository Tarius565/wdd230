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
