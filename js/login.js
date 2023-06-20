const userName = document.querySelector(".user-name")
const password = document.querySelector(".password")
const errorText = document.querySelector(".error")
const userData = JSON.parse(localStorage.getItem("allUsersData"))
const form = document.querySelector("form")
const eyeIcon =document.querySelector(".bi")


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
    if (userNameInput.length < 5 || userNameInput.length > 13) {
      userNameValid= false
        errorText.textContent = "Username should be between 5 to 13 characters"
    }else{
      userNameValid= true
        errorText.textContent = ""
    }  
})



password.addEventListener("input", (event)=>{
  if (eyeIcon.className === "bi bi-eye") {
  password.type="text"
} else {
  password.type="password"
}
})

password.addEventListener("change",(event)=>{
    passwordInput = event.target.value
  if (passwordInput.length < 6 || passwordInput.length > 13) {
    errorText.textContent = "Password must not contain less than 6 or greater than 13 characters";
    passwordValid = false
  } 
  else{
    errorText.textContent = ""
    passwordValid = true
  }
})

form.addEventListener("submit", (event)=>{
  event.preventDefault()
  if (passwordValid && userNameValid) {
    form.submit()
    errorText.textContent= ""
    // allowLogin = true

  } else {
    allowLogin = false
    errorText.textContent = "Username and Password did not match"
  }
})

eyeIcon.addEventListener("click", () => {
  if(eyeIcon.className === "bi bi-eye"){
    password.type="password"
    eyeIcon.className = "bi bi-eye-slash-fill"
  }else{
    password.type="text"
    eyeIcon.className = "bi bi-eye"
  }
});

