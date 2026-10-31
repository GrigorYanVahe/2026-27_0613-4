let button = document.getElementById("button")
let h1 = document.getElementById("h1")
let Input = document.getElementById("Input")
let checkbox = document.getElementById("checkbox")
button.addEventListener("click", function () {
    if (checkbox.checked) {
        let name = Input.value
        h1.textContent = `Hello ${name}`
        button.textContent = "Submited"
        Input.value = ""
        button.textContent = "Submit"
    } else {
        alert("Please click the button below if you are not a robot.")
    }
})
