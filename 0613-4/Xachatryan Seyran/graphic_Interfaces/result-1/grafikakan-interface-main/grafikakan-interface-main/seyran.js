let button = document.getElementById("Button")
let h1 = document.getElementById("h1")
let input = document.getElementById("input")
let checkbox = document.getElementById("checkbox")
button.addEventListener("click", function () {
    if (checkbox.checked) {
        let name = input.value
        h1.textContent = `Hello ${name}`
        button.textContent = "Submit"
    } else {
        alert("Please click the button below if you are not a robot.")
    }

})


function showName() {
    let name = document.getElementById("name").value;

    if (name.trim() === "") {
        document.getElementById("result").textContent =
            "Խնդրում ենք մուտքագրել անունը։";
    } else {
        document.getElementById("result").textContent =
            "Բարև, " + name + "։";
    }
}


function checkRobot() {
    let robot = document.getElementById("robot");
    let message = document.getElementById("message");

    if (robot.checked) {
        message.innerHTML = "Հաստատումը հաջողվեց։";
    } else {
        message.innerHTML = "Նշեք վանդակը։";
    }
}

function showColor() {
    let color = document.getElementById("color").value;

    if (color === "") {
        document.getElementById("result").innerHTML =
            "Խնդրում եմ ընտրել գույնը։";
    } else {
        document.getElementById("result").innerHTML =
            "Դու ընտրեցիր՝ " + color;
    }
}