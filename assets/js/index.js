const ELEM_BTN_MY_PROFILE = document.querySelector('#btnMyProfile');
const ELEM_BTN_SIGN_OUT = document.querySelector('#btnSignOut');

function setBtnEventListener() {
    ELEM_BTN_MY_PROFILE.addEventListener('click', function (event) {
        alert(event.target.id + ' is not developed!');
    });

    ELEM_BTN_SIGN_OUT.addEventListener('click', (event) => {
        alert(event.target.id + ' is not developed!');
    });
}