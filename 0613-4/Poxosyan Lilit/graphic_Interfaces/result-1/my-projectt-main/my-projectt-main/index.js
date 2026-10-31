
function greet() {
    alert("Բարի գալուստ");
}

function showMessage() {
    let fruit = document.querySelector('input[name="fruit"]:checked');
    let color = document.querySelector('input[name="color"]:checked');
    let name = document.getElementById("name").value;

    if (fruit && color) {
        document.getElementById("message").innerText =
            "Ողջույն, " + name + "։ Դու ընտրեցիր " +
            fruit.value + " և " + color.value + " գույնը։";
    } else {
        document.getElementById("message").innerText =
            "Ընտրիր միրգ և գույն։";
    }
}