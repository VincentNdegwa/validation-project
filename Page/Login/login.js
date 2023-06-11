const userName = document.querySelector(".user-name")
const password = document.querySelector(".password")
const errorText = document.querySelector(".error")
const userData = JSON.parse(localStorage.getItem("allUsersData"))
const form = document.querySelector("form")

let currentUser 
let passwordInput 
let userNameInput
// 
let passwordValid = false
let userNameValid = false
let allowLogin = false

// 
userName.addEventListener("change", (event)=>{
    console.log(event.target.value)

    // validate the username length
    userNameInput = event.target.value
    if (userNameInput.length < 3 || userNameInput.length > 13) {
      userNameValid= false
        errorText.textContent = "Username should be between 3 to 13 characters"
    }else{
      userNameValid= true
        errorText.textContent = ""
    }
    currentUser = userData?.find((item)=> item.userName === userNameInput)
    if (!currentUser) {
        errorText.textContent = "Account don't exist please create an account"
    } else {
        errorText.textContent=""
        localStorage.removeItem("currentUser")
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
    
})

password.addEventListener("change",(event)=>{
    passwordInput = event.target.value
    let numberRegex = /^(?=.*\d).+$/
  if (passwordInput.length < 6 || passwordInput.length > 13) {
    errorText.textContent = "Password must not contain less than 6 or greater than 13 characters";
    passwordValid = false
  } else if(!numberRegex.test(passwordInput)){
    errorText.textContent = "Password should contain atleast one number"
    passwordValid = false
  }else{
    errorText.textContent = ""
    passwordValid = true
  }

  if (passwordInput === currentUser?.password) {
    errorText.textContent =""
    passwordValid = true
  } else {
    passwordValid = false
    errorText.textContent = "Password or Username did not match"
  }
})

form.addEventListener("submit", (event)=>{
  event.preventDefault()
  if (passwordValid && userNameValid) {
    form.submit()
    errorText.textContent= ""
    allowLogin = true
    window.location.href = "../Dashboard/dashboard.html"

  } else {
    allowLogin = false
    errorText.textContent = "Username and Password did not match"
  }
})


