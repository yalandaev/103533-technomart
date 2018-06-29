var productAddedModal = document.querySelector('.modal-product-added');
var close = productAddedModal.querySelector('.modal-close');
var orderButton = productAddedModal.querySelector('.modal-product-added__order');
var continueButton = productAddedModal.querySelector('.modal-product-added_continue');


close.addEventListener('click', function (evt) {
    evt.preventDefault();
    productAddedModal.classList.remove('modal-show');
});
continueButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    productAddedModal.classList.remove('modal-show');
});

var buyButtons = document.getElementsByClassName('catalog-item-actions__buy');
for (var i = 0; i < buyButtons.length; i++) {
    var item = buyButtons[i];
    
    item.addEventListener('click', function (evt) {
        evt.preventDefault();
        productAddedModal.classList.add('modal-show');
        continueButton.focus();
    });   
} 