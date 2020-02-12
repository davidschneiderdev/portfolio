
const toggle = document.querySelector('.js-toggle');
const mobileHeader = document.querySelector('.js-mobileHeader');
const desktopHeader = document.querySelector('.js-desktopHeader');
const dropdown = document.querySelector('.js-nav');
const mobileContact = document.querySelector('.js-mobileContact');
const desktopContact = document.querySelector('.js-desktopContact');
const contactDropdown = document.querySelector('.js-contactDropdown');


let dropdownClicked = false;
let contactClicked = false;

toggle.addEventListener("click", showMenuDropdown);
dropdown.addEventListener("click", showMenuDropdown);
mobileContact.addEventListener("click", showContactDropdown);
desktopContact.addEventListener("click", showContactDropdown);


function showMenuDropdown() {
    dropdownClicked = !dropdownClicked;
    if (dropdownClicked === true) {
        contactDropdown.style = "display: none;";
        dropdown.style = "display: flex;";
        mobileHeader.style = "background-color: rgba(50, 103, 113, 1);"
        desktopHeader.style = "background-color: rgba(50, 103, 113, 1);"
    } else {
        dropdown.style = "display: none;";
        mobileHeader.style = "background-color: none;"
        desktopHeader.style = "background-color: none;"
        

    }
}

function showContactDropdown() {
    console.log('contact clicked');
    contactClicked = !contactClicked;
    if (contactClicked === true) {
        dropdown.style = "display: none;";
        contactDropdown.style = "display: flex;";
        mobileHeader.style = "background-color: rgba(50, 103, 113, 1);"
        desktopHeader.style = "background-color: rgba(50, 103, 113, 1);"

    } else {
        contactDropdown.style = "display: none;";
        mobileHeader.style = "background-color: none;"
        desktopHeader.style = "background-color: none;"
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

