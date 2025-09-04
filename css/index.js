
const mobileHamburger = document.querySelector(".mobile-ham")
const mobileSubmenu = document.querySelector("#mobileMenu")
const mobileMenuCloseBtn = document.querySelector(".mobile-close-icon")


mobileHamburger.addEventListener("click", ()=>{

    mobileSubmenu.classList.toggle("hide")
})
mobileMenuCloseBtn.addEventListener("click", ()=> {
        mobileSubmenu.classList.toggle("hide")
})