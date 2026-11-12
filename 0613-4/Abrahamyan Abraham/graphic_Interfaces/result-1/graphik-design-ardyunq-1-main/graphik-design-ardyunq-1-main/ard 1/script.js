const name = document.getElementById("name");
const surname = document.getElementById("surname");
const profession = document.getElementById("profession");
const study = document.getElementById("study");

const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

// Տեքստային արժեքների և սեղմակի մշակում
sendBtn.addEventListener("click", function() {

    if (name.value.trim() === "" || surname.value.trim() === "") {
        result.textContent = "Խնդրում ենք լրացնել անունը և ազգանունը։";
        return;
    }

    if (profession.value === "" || study.value === "") {
        result.textContent = "Խնդրում ենք կատարել բոլոր ընտրությունները։";
        return;
    }

    result.innerHTML =
        "Անուն՝ " + name.value + "<br>" +
        "Ազգանուն՝ " + surname.value + "<br>" +
        "Մասնագիտություն՝ " + profession.value + "<br>" +
        "Ուսուցման ձև՝ " + study.value;
});

// Ընտրության էլեմենտների հաղորդագրությունների մշակում
profession.addEventListener("change", function() {
    result.textContent = "Ընտրված մասնագիտությունը՝ " + profession.value;
});

study.addEventListener("change", function() {
    result.textContent = "Ընտրված ուսուցման ձևը՝ " + study.value;
});

// Մաքրման սեղմակի հաղորդագրության մշակում
clearBtn.addEventListener("click", function() {
    name.value = "";
    surname.value = "";
    profession.value = "";
    study.value = "";
    result.textContent = "Բոլոր դաշտերը մաքրված են։";
});