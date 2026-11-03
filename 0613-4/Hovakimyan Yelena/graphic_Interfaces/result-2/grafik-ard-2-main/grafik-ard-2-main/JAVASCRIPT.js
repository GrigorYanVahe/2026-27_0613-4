const menuButton = document.getElementById("menuButton");
const menuItems = document.getElementById("menuItems");
const loginButton = document.getElementById("loginButton");
const exitButton = document.getElementById("exitButton");
const submitBt = document.getElementById("submitBt");
const nikname = document.getElementById("nikname");
const passwordd = document.getElementById("passwordd")

const loginPage = document.getElementById("loginPage");
const seccessPage = document.getElementById("seccessPage");
const welcomeSection = document.getElementById("welcomeSection");
const mainMenuContainer = document.getElementById("mainMenuContainer");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const backFromSuccessBtn = document.getElementById("backFromSuccessBtn");

const usernameInput = document.querySelector('input[type="text"]')
const passwordInput = document.querySelector('input[type="password"]')

menuButton.addEventListener("click", function () {
    menuItems.classList.toggle("show");
});

loginButton.addEventListener("click", function () {
    welcomeSection.style.display = "none";
    mainMenuContainer.style.display = "none";
    loginPage.style.display = "block";
    seccessPage.style.display = "none";
    menuItems.classList.remove("show");
    menuItems.classList.remove("show");
});

function submitAction(){
    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Խնդրում ենք լրացնել բոլոր դաշտերը։");
    } else {
        loginPage.style.display = "none";
        seccessPage.style.display = "block";
    }
}

submitBt.addEventListener("click", submitAction)

nikname.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        passwordd.focus();
    }
})
passwordd.addEventListener("keydown", function(el){
    if(el.key == "Enter"){
        submitAction()
    }
})

function goToHome() {
    welcomeSection.style.display = "block";
    mainMenuContainer.style.display = "block";
    loginPage.style.display = "none";
    seccessPage.style.display = "none";
    usernameInput.value = "";
    passwordInput.value = "";
}

backToHomeBtn.addEventListener("click", goToHome);
backFromSuccessBtn.addEventListener("click", goToHome);

exitButton.addEventListener("click", function () {
    document.body.innerHTML = "";
});