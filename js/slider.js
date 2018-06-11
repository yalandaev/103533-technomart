var slideIndex = 1;
showSlideByIndex(slideIndex);

function setPrevSlide() {
    rollSlides(-1);
}
function setNextSlide() {
    rollSlides(1);
}

// Next/previous controls
function rollSlides(n) {
    showSlideByIndex(slideIndex += n);
}

// Thumbnail image controls
function setSlideByIndex(n) {
    showSlideByIndex(slideIndex = n);
}

function showSlideByIndex(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("slider__btn-dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__btn-dot--active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " slider__btn-dot--active";
}