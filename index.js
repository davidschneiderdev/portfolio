
const toggle = document.querySelector('.js-toggle');
const dropdown = document.querySelector('.js-nav');

let dropdownClicked = false;

toggle.addEventListener("click", showDropdown);
dropdown.addEventListener("click", showDropdown);

function showDropdown() {
    if (!screenSize.matches) {
        dropdownClicked = !dropdownClicked;
        console.log('button clicked');
        if (dropdownClicked === true) {
            dropdown.style = "display: flex;";
        } else {
            dropdown.style = "display: none;";
        }
    }
}

var screenSize = window.matchMedia("(min-width: 400px)")

function disableDropdown(screenSize) {
    if (screenSize.matches) {
        console.log(`Screen bigger than 400px`);
        dropdownClicked = false;
    } else {
        console.log(`Screen smaller than 400px`);
    }
}

disableDropdown(screenSize);
screenSize.addListener(disableDropdown);
