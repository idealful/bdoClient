const elemAreaAlert = document.querySelector('#areaAlert');
const elemBtnShowPopup = document.querySelector('#btnShowPopup');
const elemBtnPopup = document.querySelector('#btnPopup');

function btnShowPopupClickHandler(evt) {
    if(elemAreaAlert.classList.contains('dspn')) {
        elemAreaAlert.classList.remove('dspn');
    }
}

function btnPopupClickHandler(evt) {
    if(!elemAreaAlert.classList.contains('dspn')) {
        elemAreaAlert.classList.add('dspn');
    }
}

function init() {
    elemBtnShowPopup.addEventListener('click', btnShowPopupClickHandler);
    elemBtnPopup.addEventListener('click', btnPopupClickHandler);
}

init();