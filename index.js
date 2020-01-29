
const toggle = document.querySelector('.js-toggle');
const dropdown = document.querySelector('.js-nav');
const contact = document.querySelector('.js-contact');
const contactDropdown = document.querySelector('.js-contactDropdown');


let dropdownClicked = false;
let contactClicked = false;

toggle.addEventListener("click", showMenuDropdown);
dropdown.addEventListener("click", showMenuDropdown);
contact.addEventListener("click", showContactDropdown);

function showMenuDropdown() {
    dropdownClicked = !dropdownClicked;
    if (dropdownClicked === true) {
        contactDropdown.style = "display: none;";
        dropdown.style = "display: flex;";
    } else {
        dropdown.style = "display: none;";
    }
}

function showContactDropdown() {
    contactClicked = !contactClicked;
    if (contactClicked === true) {
        dropdown.style = "display: none;";
        contactDropdown.style = "display: flex;";
    } else {
        contactDropdown.style = "display: none;";
    }
}

// var screenSize = window.matchMedia("(min-width: 400px)")

// function disableDropdown(screenSize) {
//     if (screenSize.matches) {
//         console.log(`Screen bigger than 400px`);
//         dropdownClicked = false;
//     } else {
//         console.log(`Screen smaller than 400px`);
//     }
// }

