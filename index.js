
const toggle = document.querySelector('.js-toggle');
const mobileHeader = document.querySelector('.js-mobileHeader');
const desktopHeader = document.querySelector('.js-desktopHeader');
const dropdown = document.querySelector('.js-nav');
const desktopNav = document.querySelector('.js-desktopNav');
const mobileContact = document.querySelector('.js-mobileContact');
const desktopContact = document.querySelector('.js-desktopContact');
const contactDropdown = document.querySelector('.js-contactDropdown');
const navNonContact = document.querySelector('.js-navNonContact');


let dropdownClicked = false;
let contactClicked = false;

toggle.addEventListener("click", showMenuDropdown);
dropdown.addEventListener("click", showMenuDropdown);
mobileContact.addEventListener("click", showContactDropdown);
desktopContact.addEventListener("click", showContactDropdown);
navNonContact.addEventListener("click", closeContactDropdown);

function clicked() {
    console.log('header clicked');
}

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
    contactClicked = !contactClicked;
    if (contactClicked === true) {
        dropdown.style = "display: none;";
        contactDropdown.style = "display: flex;";
        mobileHeader.style = "background-color: rgba(50, 103, 113, 1);"
        desktopHeader.style = "background-color: rgba(50, 103, 113, 1);"
        mobileContact.className -= "far fa-envelope";
        mobileContact.className = "fas fa-times";
        desktopContact.textContent = `Close Contact X`;
    } else {
        contactDropdown.style = "display: none;";
        mobileHeader.style = "background-color: none;"
        desktopHeader.style = "background-color: none;"
        mobileContact.className = "far fa-envelope";
        desktopContact.textContent = 'Contact';
    }
}

function closeContactDropdown() {
    if (contactClicked === true) {
        showContactDropdown()
    }
}


