document.querySelector("#form").addEventListener("submit", signUp);
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let flag = false;

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
    else {
        userData.push(userDetail)
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Sign Up Successfull !! Enter LogIn Credentials");
        window.location.href = "#";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#confirm").value = "";

    }
}