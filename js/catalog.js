// Подписка кнопок "Купить" на события focusin и focusout
var buyButtons = document.getElementsByClassName('catalog-item-actions__buy');
for (var i = 0; i < buyButtons.length; i++) {
    var item = buyButtons[i];
    item.addEventListener('focusin', onActionButtonFocus);
    item.addEventListener('focusout', onActionButtonFocusOut);
}  
// Подписка кнопок "В закладки" на события focusin и focusout
var bookmarkButtons = document.getElementsByClassName('catalog-item-actions__bookmark');
for (var i = 0; i < bookmarkButtons.length; i++) {
    var item = bookmarkButtons[i];
    item.addEventListener('focusin', onActionButtonFocus);
    item.addEventListener('focusout', onActionButtonFocusOut);
}  

/**
 * Обработчик события при focusin кнопки "Купить" или "В закладки"
 *
 * @param event - событие OnFocusIn
 */
function onActionButtonFocus(event) {
    var actionsContainer = event.target.parentNode.parentNode;
    actionsContainer.setAttribute('style', 'z-index: 12');
}
/**
 * Обработчик события при focusout кнопки "Купить" или "В закладки"
 *
 * @param event - событие OnFocusOut
 */
function onActionButtonFocusOut(event) {
    var actionsContainer = event.target.parentNode.parentNode;
    actionsContainer.removeAttribute('style');
}

// Подписка кнопок "Купить" на событие нажатия
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