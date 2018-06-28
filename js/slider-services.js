var slideIndex = 1;
showServiceByIndex(slideIndex);

// Thumbnail image controls
function setServiceByIndex(n) {
    showServiceByIndex(slideIndex = n);
}

function showServiceByIndex(n) {
  var i;
  var slides = document.getElementsByClassName('service-item');
  var dots = document.getElementsByClassName('main-services__tab');
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' main-services__tab--active', '');
  }
  slides[slideIndex-1].style.display = 'block'; 
  dots[slideIndex-1].className += ' main-services__tab--active';
}