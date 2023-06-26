window.addEventListener("load", function () {
    console.log(localStorage.getItem("users"))
    var userLogin = localStorage.getItem("users")
    if (userLogin) {
        window.location.replace("./home.html")
    }

})

//creaing a login function
function login(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var getUser = JSON.parse(localStorage.getItem('users'))
    var user = getUser.find(function(value){
        if(value.email===email && value.password===password) return true
    })
    console.log(user)
    if (user !== undefined) {
        alert("successfully login")
        window.location.replace('./home.html')
    } else {
        console.log("credentials error")
        alert("email or password does not match!")
    }

}
