interface User{     // interfaces should start with uppercase letter 
    username: String;
    password: String;
}

function Sign(user: User): String{
    return "Hello " + user.username + " your password is " + user.password;
}

console.log(Sign({
    username: "Utkarsh",
    password: "hi"
}));