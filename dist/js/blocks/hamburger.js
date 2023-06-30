function hamburger() {

    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector(".menu")
    const cross = document.querySelector(".menu__close")

    hamburger.addEventListener("click", () => {
        menu.classList.add("menu_active");
    })
    cross.addEventListener("click", () => {
        menu.classList.remove("menu_active");
    })

}

export default hamburger;