import {topmost,navbar,bottom_nav} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("topmost").innerHTML = topmost();
document.getElementById("bottom_nav").innerHTML =bottom_nav();

let listData = JSON.parse(localStorage.getItem("list")) || []
console.log(listData);

