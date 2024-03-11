"use strict";
function Sign(user) {
    return "Hello " + user.username + " your password is " + user.password;
}
console.log(Sign({
    username: "Utkarsh",
    password: "hi"
}));
