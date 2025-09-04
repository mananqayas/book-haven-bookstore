// Contact us form
// Thank you for your message
console.log("ok")
const contactForm = document.querySelector(".contact-form")
console.log(contactForm)
contactForm.addEventListener("submit", (e)=>{
    e.preventDefault()
   alert("Thank you for your message")
   
})