
window.addEventListener("load", ()=>{
    console.log("window loaded")
    window.location.href= "http://127.0.0.1/validation-project/login.php"
    localStorage.removeItem("currentUser")
    localStorage.removeItem("allUsersData")
})