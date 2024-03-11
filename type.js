"use strict";
function Signin(user) {
    return "Hello " + user.username + " your password is " + user.password;
}
console.log(Signin({
    username: "Utkarsh",
    password: "hi"
}));
