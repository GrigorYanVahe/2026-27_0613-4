
let textMessage = document.getElementById('textMessage');
let selectInput = document.getElementById('selectInput');
let myCheckbox = document.getElementById('myCheckbox');
let selectionMessage = document.getElementById('selectionMessage');
let checkboxMessage = document.getElementById('checkboxMessage');

function showText() {
    if (textMessage) {
        let textInput = document.getElementById('textInput');
        if (textInput) {
            let value = textInput.value;
            if (value == undefined || value == "") {
                textMessage.innerText = `Խնդրում ենք լրացնել անունը։`;
            } else {
                textMessage.innerText = `Բարև, ${value}!`;
            }
        }
    }
}

function showSelection() {
    if (selectionMessage) {
        if (selectInput) {
            let selectedValue = selectInput.value;
            if (selectedValue == undefined || selectedValue == "") {
                selectionMessage.innerText = `Խնդրում ենք ընտրել տարբերակ։`;
            } else {
                selectionMessage.innerText = `Ձեր ընտրած քաղաքն է: ${selectedValue}`;
            }
        }
    }
}

function showCheckbox() {
    if (checkboxMessage) {
        if (myCheckbox) {
            if (myCheckbox.checked) {
                checkboxMessage.innerText = 'Ծանուցումները միացված են ✅';
            } else {
                checkboxMessage.innerText = 'Ծանուցումները անջատված են ❌';
            }
        }
    }
}
