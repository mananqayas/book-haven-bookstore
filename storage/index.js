
const mobileHamburger = document.querySelector(".mobile-ham")
const mobileSubmenu = document.querySelector("#mobileMenu")
const mobileMenuCloseBtn = document.querySelector(".mobile-close-icon")
let cartData = sessionStorage.getItem("cartItems")


mobileHamburger.addEventListener("click", ()=>{

    mobileSubmenu.classList.toggle("hide")
})
mobileMenuCloseBtn.addEventListener("click", ()=> {
        mobileSubmenu.classList.toggle("hide")
})



const signUpForm = document.querySelector(".footer__signup__form")
const emailData = document.querySelector('input[name="email"]')
const signUpDiv = document.querySelector(".footer__signup")

const clearCart = document.querySelector(".clear-cart")
const processOrder = document.querySelector(".process-order")

signUpForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const emailValue = emailData.value

    
    if(!emailValue){
        const el = document.createElement('p')
        el.innerHTML = "Please enter your email"
        el.style.color = "red"
        signUpDiv.appendChild(el)

       return
    } else {

    



 alert(`Thank you for subscribing`)
    }
    
   
})


// gallery page features

const products = document.querySelectorAll(".books_card")
const cartDiv = document.getElementById("cart-result")

const cartClose = document.getElementById("closeCart")

const cartItemsDiv = document.querySelector(".cart__items")

const viewCartItems = document.getElementById("viewCartBtn")
const quanityDiv = document.querySelector(".cart_quantity")


clearCart.addEventListener("click", ()=>{


    if(sessionStorage.getItem("cartItems") !== null) {
        alert("Cart cleared")
      
        sessionStorage.removeItem("cartItems")
        cartItemsDiv.innerHTML = ""
        quanityDiv.innerHTML = "There are no items in your cart!"
    } else {
            alert("No items to clear")
    }
})


processOrder.addEventListener("click", ()=> {

    if(sessionStorage.getItem("cartItems") !== null) {
          alert("Thank you for your order")
          sessionStorage.removeItem("cartItems")
          cartItemsDiv.innerHTML = ""
          quanityDiv.innerHTML = "There are no items in your cart!"
    } else {
          alert("Cart is empty")
    }
})
viewCartItems.addEventListener("click", ()=>{

    cartDiv.style.opacity = "100"
    cartDiv.style.pointerEvents = "auto"
    if(sessionStorage.getItem("cartItems") === null){
  
    quanityDiv.innerHTML = "There are no items in your cart!"
    quanityDiv.style.paddingTop = "10px"
}  else {

    quanityDiv.innerHTML = ""
    addProductsInDiv(JSON.parse(sessionStorage.getItem("cartItems")))

}
})

cartClose.addEventListener("click",()=>{

    cartDiv.style.opacity = "0"
       cartDiv.style.pointerEvents = "none"

})

document.addEventListener("keyup", (e)=> {

    if(e.key === "Escape") {
    cartDiv.style.opacity = "0"
       cartDiv.style.pointerEvents = "none"

    }
 })


const cartItems = []


products.forEach((element, index) => {

    const title = element.children[1].innerHTML

    const addToCartButton = element.querySelector(".books_card__add_to_cart")
    addToCartButton.addEventListener("click", ()=> {
        cartItems.push(title)

        const result = organizeCartItems(cartItems)

        console.log("Final result", result)
        alert(`Item added to the cart`)
  
    })
 
});


function organizeCartItems(items) {
let result = []
    if(cartData !== null){

        const data = JSON.parse(cartData)

        result = [...data]

        items.forEach(item => {

            const existing = result.find(i=>i.title === item)

            if(existing) {
                existing.quantity += 1
            } else {
                result.push({
                    title: item,
                    quantity: 1,
                    price: 9.99
                })
            }
        })
        sessionStorage.setItem("cartItems", JSON.stringify(result))



    } else {

        items.forEach(item=> {

            const existing = result.find(i=>i.title === item)

            if(existing){
                existing.quantity  +=1
                
            } else {
                result.push({
                    title: item,
                    quantity: 1,
                    price: 9.99
                })
            }
        })

        sessionStorage.setItem("cartItems", JSON.stringify(result))
        

    }

return result

    
}

function addProductsInDiv(products){


cartItemsDiv.innerHTML = ""

products.forEach(p=> {
        const el = document.createElement("p")

    

    
        el.innerHTML = `<p><b>${p.title}</b></p>
        
        
        <p style="margin-top: 10px">Quantity: ${p.quantity}</p>
        
        
        <p style="margin-top: 8px; margin-bottom: 8px">Price: $${p.price}</p>
        
        <hr />
        `
        cartItemsDiv.appendChild(el)
        
    })

    const el = document.createElement("p")

    const total = products.reduce((sum, item)=> sum + item.quantity * item.price ,0)

    el.innerHTML = `<p><b>Total:<b> $${total}</p>`
cartItemsDiv.appendChild(el)
}


