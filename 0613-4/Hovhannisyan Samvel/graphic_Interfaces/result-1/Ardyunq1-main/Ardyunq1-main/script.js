let textMessage = document.getElementById('textMessage');
let selectInput = document.getElementById('selectInput');
let myCheckbox = document.getElementById('myCheckbox');
let selectionMessage = document.getElementById('selectionMessage');
let checkboxMessage = document.getElementById('checkboxMessage');

function showText() {
    const textInput = document.getElementById('textInput');
    if (textInput && textMessage) {
        const value = textInput.value.trim();
        if (value === "") {
            textMessage.innerText = `Խնդրում ենք լրացնել անունը։`;
        } else {
            textMessage.innerText = `Բարև, ${value}!`;
        }
    }
}

function showSelection() {
    if (selectInput && selectionMessage) {
        const selectedValue = selectInput.value;
        if (selectedValue === "") {
            selectionMessage.innerText = `Խնդրում ենք ընտրել տարբերակ։`;
        } else {
            selectionMessage.innerText = `Ձեր ընտրած քաղաքն է: ${selectedValue}`;
        }
    }
}

function showCheckbox() {
    if (myCheckbox && checkboxMessage) {
        if (myCheckbox.checked) {
            checkboxMessage.innerText = 'Ծանուցումները միացված են ✅';
        } else {
            checkboxMessage.innerText = 'Ծանուցումները անջատված են ❌';
        }
    }
}