const welcomeText = document.querySelector(".welcome")


const currentUser = JSON.parse(localStorage.getItem("currentUser"))
window.addEventListener("load", ()=>{
welcomeText.textContent = `Welcome,${currentUser.userName}`
})