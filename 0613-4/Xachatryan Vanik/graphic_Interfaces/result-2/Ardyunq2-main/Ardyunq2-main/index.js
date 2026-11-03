
const result = document.getElementById("output");
const menu = document.getElementById("fileMenu");

function showMessage(message) {
    result.textContent = message;
}

// Մենյուի գործողություններ

document.getElementById("open").onclick = function(event) {
    event.preventDefault();
    showMessage("Ընտրվել է «Բացել» հրամանը։");
};

document.getElementById("exit").onclick = function(event) {
    event.preventDefault();
    showMessage("Ընտրվել է «Ելք» հրամանը։");
};

// Մկնիկի գործողություններ

document.addEventListener("mousedown", function(event) {
    if (!menu.contains(event.target)) {
        let buttons = ["Ձախ", "Միջին", "Աջ"];
        showMessage(
            "Մկնիկի " + buttons[event.button] +
            " կոճակ։ X: " + event.clientX +
            ", Y: " + event.clientY
        );
    }
});

// Ստեղնաշարի գործողություններ

document.addEventListener("keydown", function(event) {
    showMessage(
        "Սեղմված ստեղնը՝ " + event.key +
        " | Կոդը՝ " + event.code
    );
});
