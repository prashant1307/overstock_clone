import { topmost, navbar, bottom_nav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topmost").innerHTML = topmost()
document.getElementById("bottom_nav").innerHTML =bottom_nav()




//  SignUP Part Starts From Here

// document.querySelector("#form").getElementById("submit", signUp);
document.getElementById("accbutton").addEventListener("click", signUp)
var userData = JSON.parse(localStorage.getItem("userData")) || [];

var flag = false;
let username = JSON.parse(localStorage.getItem("username")) || [];

function signUp(e) {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let create_pass = document.querySelector("#password").value;
    let c_pass = document.querySelector("#confirm").value;

    let userDetail = {
        userEmail: email,
        userPass: create_pass,
        conPass: c_pass,
    };

    if (userData.length != 0) {
        let arr = JSON.parse(localStorage.getItem("userData")) || [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userEmail === email) {
                flag = true;
                break;
            }
        }
        if (flag) {
            alert("User already exists!!");
        }
        else {
            userData.push(userDetail);
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Sign Up Successfull !! Enter LogIn Credentials");
            window.location.href = "#";
            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
            document.querySelector("#confirm").value = "";

        }
    }
}



// LogIn Part Starts From Here


document.getElementById("signinbutton").addEventListener("click", logIn);

function logIn(e) {
    e.preventDefault();

    let email = document.querySelector("#regemail").value;
    let pass = document.querySelector("#regpassword").value;

    let arr = JSON.parse(localStorage.getItem("userData"));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].userEmail === email && arr[i].conPass === pass) {
            let name = email[0] + email[1] + email[2] + email[3] + email[4] + email[5] + email[6] + email[7] + email[8]

            // let username= JSON.parse(localStorage.getItem("username"))||[];

            username.push(name)
            localStorage.setItem("username", JSON.stringify(username));
            flag = true;
            alert("Login Successfull !!")
            setTimeout(() => {
                window.location.href = "index.html"
            }, 800)
            break;
        }
    }
    if (flag === false) {
        alert("Wrong Credentials")
    }
}