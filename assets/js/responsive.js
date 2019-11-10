const ELEM_MENU_UL_ALL = document.querySelectorAll('header .menu-content > ul');
const ELEM_MENU_UL = document.querySelector('header .menu-content > ul');
const ELEM_MENU_UL_LI = document.querySelectorAll('header .menu-content > ul > li');
const ELEM_MENU_MOBILE = document.querySelector('#btn-nav-mobile');

function elemMenuUlLiMouseOverHandler(event) {
    ELEM_MENU_UL_LI.forEach((item) => {
        item.classList.add('active');
    });
}

function elemMenuUlLiMouseOutHandler(event) {
    ELEM_MENU_UL_LI.forEach((item) => {
        item.classList.remove('active');
    });
}

function toggleMenuList() {
    ELEM_MENU_UL.classList.toggle('active');
}

function hideMenuList() {
    ELEM_MENU_UL.classList.remove('active');
}

function setResponsiveMenuDesktop() {
    ELEM_MENU_UL_LI.forEach((item) => {
        item.addEventListener('mouseover', elemMenuUlLiMouseOverHandler);
        item.addEventListener('mouseout', elemMenuUlLiMouseOutHandler);
    });
    toggleMenuList();
}

function setResponsiveMenuMobile() {
    hideMenuList();
    ELEM_MENU_MOBILE.addEventListener('click', toggleMenuList);
}

function setResponsiveAutomatic() {
    if (window.outerWidth >= 1024) {
        setResponsiveMenuDesktop();
    } else {
        setResponsiveMenuMobile();
    }
}