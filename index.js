
const toggle = document.querySelector('.js-toggle');
const dropdown = document.querySelector('.js-nav');

let dropdownClicked = false;

toggle.addEventListener("click", showDropdown);

function showDropdown() {
    dropdownClicked = !dropdownClicked;
    console.log('button clicked');
    if (dropdownClicked === true) {
        dropdown.style = "display: flex;";
    } else {
        dropdown.style = "display: none;";
    }
}