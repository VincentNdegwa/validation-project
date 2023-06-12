const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".email")
const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
const errorText = document.querySelector(".error")
const passwords = document.querySelectorAll(".password")
const eyeIcon = document.querySelectorAll(".bi")



const form = document.querySelector("form")

const allUsersData = []


// set the state of email validity and change according to the validation
let emailIsValid = false
let passwordValid = false
let passwordMatch = false
let userNameValid = false

let email
let username
let password



// username validation

userName.addEventListener("change", (event)=>{
 let userNameInput = event.target.value
 if (userNameInput.length > 2) {
    userNameValid = true
    username = userNameInput
    errorText.textContent = ""
 } else {
    userNameValid = false
    errorText.textContent = "Username cannot be less than 3 letters"
 }
})


// email valiidation
userEmail.addEventListener("blur", (event)=>{

   const emailInput = event.target.value
// initialising the regular expression that checks the format of the email if it is  correct
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   if (emailRegex.test(emailInput) ) {
    emailIsValid = true
    email = emailInput
    errorText.textContent = ""
   } else {
    emailIsValid= false
    errorText.textContent = "Please enter a valid email";

   }
})

// password validation
password1.addEventListener("change", (event) => {
    let numberRegex = /^(?=.*\d).+$/
  let password1Input = event.target.value;
  if (password1Input.length < 6) {
    errorText.textContent = "Password must not contain less than 6 letters";
    passwordValid = false
  } else if(!numberRegex.test(password1Input)){
    errorText.textContent = "Password should contain atleast one number"
    passwordValid = false
  }else{
    errorText.textContent = ""
    passwordValid = true
  }
});
// password match validation

password2.addEventListener("change", (event)=>{
   let mainPassword = password1.value
   let confirmPassword = event.target.value
   if (mainPassword !== confirmPassword) {
    passwordMatch = false
    errorText.textContent = "Password Didn't match"
   }else{
      password= mainPassword
    errorText.textContent = ""
    passwordMatch = true
   }
    console.log(`${mainPassword}: ${confirmPassword}`)
})
//  form sending

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (emailIsValid && passwordValid && passwordMatch && userNameValid) {
        const userObject= {
         "userName":username,
         "email":email,
         "password": password
        }
        console.log(userObject)
        localStorage.removeItem("currentUser")
        localStorage.setItem("currentUser", JSON.stringify(userObject))
     allUsersData.push(userObject)
     localStorage.setItem("allUsersData", JSON.stringify(allUsersData))
     form.submit()
     window.location.href= "../Dashboard/dashboard.html"
        
        errorText.textContent = ""
    } else {
        errorText.textContent= "You have an error in filling the form"
    }
})




passwords.forEach((password, index)=>{
   password.addEventListener("input", ()=>{
      const currentPass = [...passwords].find((pass, i)=> i === index)
      if (eyeIcon[index].className === "bi bi-eye") {
        
         currentPass.type = "text"
      }else{
         
         currentPass.type = "password"
      }
   })

   eyeIcon[index].addEventListener("click", ()=>{
      if (password.type === "password") {
      password.type = "text";
      eyeIcon[index].className = "bi bi-eye";
    } else {
      password.type = "password";
      eyeIcon[index].className = "bi bi-eye-slash-fill";
    }
   })


})

// /////////

// passwords.forEach((password)=>{
//    password.addEventListener("input", ()=>{
//       password.type = "password"
//    })
// })
// eyeIcon.forEach((icon)=>{
//    icon.addEventListener("click", ()=>{
//       console.log("clicked")
//       if (icon.className === "bi bi-eye") {
//          icon.className = "bi bi-eye-slash-fill"
//       } else {
//          icon.className = "bi bi-eye"
//       }
//    })
// })