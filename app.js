// creating a login page



// working on signUp page


//create a signUp function
function signUp(){

    var fullName = document.getElementById('fname').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var password = document.getElementById('password').value

    //creating a obj and assign the input value
    var userobj ={
        fullName,
        email,
        phone,
        password

    }

    var get_user = JSON.parse(localStorage.getItem("users"))
    console.log(get_user,'getuser')

    if(get_user==null){
        var arr = []
        arr.push(userobj)
        console.log("first signup")
        localStorage.setItem("users", JSON.stringify(arr))

    }else{
        console.log('signup')
        // get_user.push(userobj)
        // localStorage.setItem("users", JSON.stringify(userobj))
        var findUser = get_users.find(function (value) {
            console.log(value.email, "value")
            if (value.email === email) {
                return true
            }
        })

        if (findUser === undefined) {
            get_user.push(userobj)
            localStorage.setItem("users", JSON.stringify(get_user))
            alert("user signup")
            window.location.href = "./index.html"
        } else {
            alert("email address already exists")
        }
    

    }
}

// function login(){
//     console.log(userobj)
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//     console.log(email)
//     // if (email==userobj.email){
//     //     console.log('exist')
//     // }else{
//     //     console.log('not exist')
//     // }
// }