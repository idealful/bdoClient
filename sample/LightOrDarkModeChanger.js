const ELEM_BODY = document.querySelector('body');
const ELEM_BTN_MODE_ALL = document.querySelectorAll('.btnMode');
const STR_LIGHT = 'light';
const STR_DARK = 'dark';
const STR_MODE_LIGHT = 'modeLight';
const STR_MODE_DARK = 'modeDark';

function init() {
	ELEM_BTN_MODE_ALL.forEach(function (one, index) {
		one.addEventListener('click', function (event) {
			const thisTarget = event.target;
			const thisTargetDatasetMode = thisTarget.dataset.mode;
			if (thisTargetDatasetMode == STR_LIGHT) {
				ELEM_BODY.classList.remove(STR_MODE_DARK);
				ELEM_BODY.classList.add(STR_MODE_LIGHT);
			} else if (thisTargetDatasetMode == STR_DARK) {
				ELEM_BODY.classList.remove(STR_MODE_LIGHT);
				ELEM_BODY.classList.add(STR_MODE_DARK);
			} else {
				alert('There is no mode!');
			}
		});
	});
}

init();