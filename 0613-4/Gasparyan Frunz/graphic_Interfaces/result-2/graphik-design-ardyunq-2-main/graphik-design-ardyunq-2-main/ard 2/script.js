
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const subBtn = document.getElementById("subBtn");
const submenu = document.getElementById("submenu");
const result = document.getElementById("result");

let selected = 0;

// Հիմնական մենյուի բացում և փակում
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    result.textContent = "Հիմնական մենյուն բացվեց կամ փակվեց։";
});

// Ենթամենյուի բացում
subBtn.addEventListener("click", () => {
    submenu.classList.toggle("show");
    result.textContent = "Ենթամենյուի գործողություն։";
});

// Մենյուի կոճակների հաղորդագրություններ
document.getElementById("openBtn").addEventListener("click", () => {
    result.textContent = "Դուք ընտրեցիք Բացել հրամանը։";
});

document.getElementById("infoBtn").addEventListener("click", () => {
    result.textContent = "Սա գրաֆիկական մենյուի տեղեկատվական բաժինն է։";
});

document.getElementById("clearBtn").addEventListener("click", () => {
    result.textContent = "Տեղեկությունը մաքրվեց։";
});

document.getElementById("exitBtn").addEventListener("click", () => {
    menu.classList.remove("show");
    submenu.classList.remove("show");
    result.textContent = "Մենյուն փակվեց։";
});

// Մկնիկի հաղորդագրությունների մշակում
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        result.textContent = "Մկնիկը գտնվում է՝ " + button.textContent;
    });
});

// Ստեղնաշարի հաղորդագրությունների մշակում
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowDown") {
        selected++;
        result.textContent = "Սեղմվեց ներքև սլաքը։ Ընտրություն՝ " + selected;
    }

    if (event.key === "ArrowUp") {
        selected--;
        result.textContent = "Սեղմվեց վերև սլաքը։ Ընտրություն՝ " + selected;
    }

    if (event.key === "Enter") {
        result.textContent = "Սեղմվեց Enter ստեղնը։";
    }

    if (event.key === "Escape") {
        menu.classList.remove("show");
        submenu.classList.remove("show");
        result.textContent = "Մենյուն փակվեց Escape ստեղնով։";
    }
});
