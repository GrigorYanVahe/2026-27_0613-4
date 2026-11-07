const myH1 = document.getElementById("myH1");
const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myCheck = document.getElementById("myCheck");
const welcomeForm = document.getElementById("welcomeForm");

welcomeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = myInput.value.trim();

    if (name === "") {
        alert("Խնդրում ենք մուտքագրել Ձեր անունը։");
        myInput.focus();
        return;
    }

    if (!myCheck.checked) {
        alert("Խնդրում ենք հաստատել, որ ռոբոտ չեք։");
        return;
    }

    myH1.textContent = `Բարի գալուստ, ${name}։`;
    myInput.value = "";
    myCheck.checked = false;
    myButton.innerHTML = 'Կատարված է <span>✓</span>';
});
