const forgotEmailInput = document.querySelector(".forgotEmail")
const form = document.querySelector("form")
const errorText = document.querySelector(".error")


let emailValid = false
forgotEmailInput.addEventListener("change",(event)=>{
    emailInput = event.target.value
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(emailInput)) {
        emailValid = true
        errorText.textContent = ""
    } else {
        errorText.textContent = "Please enter a valid email"       
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (emailValid) {
        errorText.textContent = ""
        form.submit()
    } else {
        errorText.textContent = "Please enter valid email"        
    }
})