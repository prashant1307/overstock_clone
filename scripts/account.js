

let register = async (e) => {
    e.preventDefault();
    let form_data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirm: document.getElementById("confirm").value,
    }

    form_data = JSON.stringify(form_data)
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: form_data,
        headers: {
            "Content-Type": "application/json",
        },
    });

    let data = await res.json();
    console.log(data)
    if (data.error === true) {
        alert("User already exist")

    }
    else {
        window.location.href = "login.html"
    }

};
document.getElementById("accbutton").addEventListener("click", register)

