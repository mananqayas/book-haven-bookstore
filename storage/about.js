// Contact us form
// Thank you for your message
console.log("ok")
const contactForm = document.querySelector(".contact-form")

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault()


const formData = new FormData(contactForm)

const data = Object.fromEntries(formData.entries())
localStorage.setItem("contactData", JSON.stringify(data))



   
})