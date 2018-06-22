// var catalogItems = document.getElementsByClassName('catalog-item');
// for (var i = 0; i < catalogItems.length; i++) {
//     var item = catalogItems[i];
//     item.addEventListener("focusin", onCatalogItemFocus);
//     item.addEventListener("focusout", onCatalogItemFocusOut);
// }     

// function onCatalogItemFocus(item) {
//     console.log(item);
//     console.log('1');
    
//     var actionsContainer = getFirstOrDefaultElementByClass(item.target, "catalog-item-actions");
//     if(!actionsContainer) {
//         console.log('e1');
//         return;
//     }
//     hideOtherCatalogItemActions();
//     console.log('2');
//     if(item.relatedTarget.className == "btn btn--buy catalog-item-actions__buy") {
//         console.log('e2');
//         return;
//     }
//     actionsContainer.setAttribute("style", "display: block");
//     console.log('3');
//     var actionListItem = getFirstOrDefaultElement(actionsContainer);
//     var actionHref = getFirstOrDefaultElement(actionListItem);
//     console.log('4');
//     actionHref.focus();
//     console.log('5');
//     console.log(actionHref);
// }
// function onCatalogItemFocusOut(item) {
//     var actionsContainer = getFirstOrDefaultElementByClass(item.target, "catalog-item-actions");
//     console.log(actionsContainer);
// }

// function hideOtherCatalogItemActions() {    
//     var catalogItems2 = document.getElementsByClassName('catalog-item-actions');
//     for (var i = 0; i < catalogItems2.length; i++) {
//         var item = catalogItems2[i];
//         item.removeAttribute("style", "");
//     }  
// }

// function getFirstOrDefaultElementByClass(node, className) {
//     var found = null;
//     for (var i = 0; i < node.childNodes.length; i++) {
//         if (node.childNodes[i].className == className) {
//         var found = node.childNodes[i];
//         break;
//         }        
//     }
//     return found;
// }
// function getFirstOrDefaultElement(node) {
//     return node.children[0];
// }