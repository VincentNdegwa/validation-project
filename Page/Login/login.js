const userName = document.querySelector(".user-name")
const password = document.querySelector(".password")
const errorText = document.querySelector(".error")
const userData = JSON.parse(localStorage.getItem("allUsersData"))

let currentUser 
let passwordInput 
let userNameInput

userName.addEventListener("change", (event)=>{
    console.log(event.target.value)

    // validate the username length
    userNameInput = event.target.value
    if (userNameInput.length <3 || userNameInput.length > 13) {
        errorText.textContent = "Username should be between 3 to 13 characters"
    }else{
        errorText.textContent = ""
    }


    currentUser = userData.find((item)=> item.userName === userNameInput)
    if (!currentUser) {
        errorText.textContent = "Account don't exist please create an account"
    } else {
        errorText.textContent=""
    }
    
    console.log(currentUser)
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


//   if (passwordInput === currentUser.password) {
//     errorText.textContent =""
//   } else {
//     errorText.textContent = "Password or Username did not match"
//   }
})