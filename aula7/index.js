const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")

    /* Para fazer acesivel o menu para pessoas com discapacidade visual*/
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menu")
    } else {
        navToggle.setAttribute("aria-label", "Abrir Menu")
    }
})