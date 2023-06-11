
window.addEventListener("load", ()=>{
    console.log("window loaded")
    window.location.href= "./Page/Login/login.html"
    localStorage.removeItem("currentUser")
    localStorage.removeItem("allUsersData")
})