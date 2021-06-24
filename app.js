const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.screenY;
    if (scroll_position > 250) {
        header.getElementsByClassName.backgroundColor = "#29323c";
    } else {
        header.getElementsByClassName.backgroundColor = "transparent";
    }
})