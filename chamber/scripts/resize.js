
window.addEventListener('resize', function() {
    var viewport_width = window.innerWidth;
    const heroImageLabel = document.getElementById("hero-img-label");
  
    if (viewport_width < 750) {
      heroImageLabel.innerHTML = "Small picture";
    }
    else if (viewport_width < 950) {
      heroImageLabel.innerHTML = "Medium picture";
    }
    else {
      heroImageLabel.innerHTML = "Large picture";
    }
  }
  )