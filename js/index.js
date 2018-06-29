// Write us
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

// Map
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