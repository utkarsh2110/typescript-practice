type Users = {
    username: String;
    password: String;
}

function Signin(user: Users): String{
    return "Hello " + user.username + " your password is " + user.password;
}

console.log(Signin({
    username: "Utkarsh",
    password: "hi"
}));