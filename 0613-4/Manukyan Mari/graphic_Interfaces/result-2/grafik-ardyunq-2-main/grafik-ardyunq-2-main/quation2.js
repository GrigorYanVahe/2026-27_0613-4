function sendData() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;

    let output = document.getElementById("output");

    if (name === "" || phone === "" || date === "") {
        output.textContent = "Խնդրում ենք լրացնել բոլոր դաշտերը։";
        return;
    }

    output.textContent =
        "Գրանցումը հաջողությամբ կատարվեց, " + name + "։ Այցելուների քանակը՝ " + people;
}

function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("people").value = "1";
    document.getElementById("output").textContent = "";
}