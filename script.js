function toggleMobileMenu() {
    var menu = document.querySelector('.main-nav ul');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}