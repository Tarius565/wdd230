const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold : .75,
  rootMargin : "0px 0px 2px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} 
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}