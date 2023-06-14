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
   // test@gmail.com
   // o,1,2,3,4
   // 14

   const emailTest=(email)=>{
    let atIndex = email.indexOf("@")
    let domainPart = email.slice(atIndex,email.length)
    let localPart = email.slice(0, atIndex)
    let emailArray = email.split("")
    let arrayOfAt = emailArray.filter((item)=> item == "@")
    let firstIndexOfQuoted = email.indexOf('"')
    let lastIndexOfQuoted = email.lastIndexOf('"')
    let quotedEmail = email.slice(firstIndexOfQuoted, lastIndexOfQuoted+1)
    let arrSpecialChars = emailArray.filter((item)=>{
       let specialChars = [" ", "(", ")", ",",":", ";", "<", ">","[","]","\\", ".."]
        return specialChars.includes(item)        
    })
    let dotFirstIndex = email.indexOf(".")
    // let printableChars = ["#","!","$","&","'","*","+","-","=","?","^","_","`","{","}","|","~"]
    let unqoutedString = localPart.replace(quotedEmail,"")
    
    if (atIndex == 0 || atIndex >= email.length-1) {
        console.log("false emale, related with @")
    }
    if (localPart > 64) {
        console.log("long email")
         return false
        }
    if (domainPart.includes("_")) {
    
        console.log("no underscores in the domain part")
        return false
    }
    if (arrayOfAt.length>1 || arrayOfAt.length < 1) {
        console.log("email should have one @")
        return false
    }
    if (email.startsWith(".")|| email.endsWith(".")) {
        
       console.log("email shoul not start or end with a dot") 
       return false
    }
     if(email.startsWith("-")|| email.endsWith("-")) {
        
       console.log("email should not start or end with a hyphen") 
       return false
    }
    if (unqoutedString.length>0) {
        if (arrSpecialChars.some((item)=> unqoutedString.includes(item))) {
            console.log("special characters should be quoted")
            return false
        }
    }
    if ((quotedEmail.length> 0) && (email[lastIndexOfQuoted+1] !== ".")) {
      if (quotedEmail == localPart) {
         console.log("dot is an exception when the the quoted part is the local part")
      }else{
         console.log(quotedEmail.length)
         console.log(lastIndexOfQuoted);
         console.log("the quote must have a period after it ")
         return false
      }
    }
  
   return true
}


   if (emailTest(emailInput) ) {
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
    
  let password1Input = event.target.value;
  if (password1Input.length < 6) {
    errorText.textContent = "Password must not contain less than 6 letters";
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