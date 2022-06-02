let newMonth = document.querySelector("#new-month");
let btn = document.querySelector(".btn");

function june() {
    document.querySelector("#new-month").textContent = "Cheers to an awesome and interesting month ahead. A month full of fun, adventures and gladness. Happy New Month my dear friend.";
    document.querySelector("#new-month").style.background ="purple";
    document.querySelector(".btn").style.background= "red";
    document.querySelector("#new-month").style.fontSize = "100px";
    document.querySelector("#new-month").style.marginTop = "0";
    document.querySelector("#new-month").style.color = "black";
    document.getElementById("new-month").style.fontStyle = "italic";
}