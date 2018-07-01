//// Write us
var writeUsLink = document.querySelector(".main-contacts__btn");
var writeUsModal = document.querySelector(".modal-write-us");
var closeWriteUs = writeUsModal.querySelector(".modal-close");
var writeUsNameInput = writeUsModal.querySelector("[name=name]");

writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsModal.classList.add("modal-show");
    writeUsNameInput.focus();
});   
closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsModal.classList.remove("modal-show");
    writeUsLink.focus();
});

//// Map
var mapLink = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var closeMap = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
    closeMap.focus();
});   
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (writeUsModal.classList.contains("modal-show")) {
            writeUsModal.classList.remove("modal-show");
        }
        if (mapModal.classList.contains("modal-show")) {
            mapModal.classList.remove("modal-show");
        }
    }
});

//// Slider Catalog
var currentCatalogSliderIndex = 1;
showSlideByIndex(currentCatalogSliderIndex);

function setPrevSlide() {
    rollSlides(-1);
}
function setNextSlide() {
    rollSlides(1);
}

// Next/previous controls
function rollSlides(n) {
    showSlideByIndex(currentCatalogSliderIndex += n);
}

// Thumbnail image controls
function setSlideByIndex(n) {
    showSlideByIndex(currentCatalogSliderIndex = n);
}

function showSlideByIndex(n) {
  var i;
  var slides = document.getElementsByClassName('slider-item');
  var dots = document.getElementsByClassName('slider__btn-dot');
  if (n > slides.length) {currentCatalogSliderIndex = 1} 
  if (n < 1) {currentCatalogSliderIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' slider__btn-dot--active', '');
  }
  slides[currentCatalogSliderIndex-1].style.display = 'block'; 
  dots[currentCatalogSliderIndex-1].className += ' slider__btn-dot--active';
}

//// Slider Services
var currentServiceSliderIndex = 1;
showServiceByIndex(currentServiceSliderIndex);

// Thumbnail image controls
function setServiceByIndex(n) {
    showServiceByIndex(currentServiceSliderIndex = n);
}

function showServiceByIndex(n) {
  var i;
  var slides = document.getElementsByClassName('service-item');
  var dots = document.getElementsByClassName('main-services__tab');
  if (n > slides.length) {currentServiceSliderIndex = 1} 
  if (n < 1) {currentServiceSliderIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' main-services__tab--active', '');
  }
  slides[currentServiceSliderIndex-1].style.display = 'block'; 
  dots[currentServiceSliderIndex-1].className += ' main-services__tab--active';
}