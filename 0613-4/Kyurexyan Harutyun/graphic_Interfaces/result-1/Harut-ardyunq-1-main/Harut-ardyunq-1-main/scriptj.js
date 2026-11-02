// 1. Radio կոճակների արժեքի ստուգում
function showPlan() {
    const selectedPlan = document.querySelector('input[name="plan"]:checked');
    const message = document.getElementById('planMessage');
    
    if (selectedPlan) {
        message.textContent = `Ընտրված փաթեթը՝ «${selectedPlan.value}»`;
    }
}

// 2. Textarea արժեքի ստուգում
function showGoal() {
    const goalInput = document.getElementById('goalInput');
    const message = document.getElementById('goalMessage');
    
    if (goalInput.value.trim() !== "") {
        message.textContent = `Ձեր նպատակը՝ «${goalInput.value}»`;
    } else {
        message.textContent = "Խնդրում ենք լրացնել նպատակի դաշտը:";
    }
}

// 3. Range (սահող) արժեքի թարմացում տեքստում
function updateSessions() {
    const sessionsInput = document.getElementById('sessionsInput');
    const sessionsValue = document.getElementById('sessionsValue');
    sessionsValue.textContent = sessionsInput.value;
}

// Range արժեքի հաստատում
function showSessions() {
    const sessionsInput = document.getElementById('sessionsInput');
    const message = document.getElementById('sessionsMessage');
    message.textContent = `Շաբաթական մարզումների քանակը՝ ${sessionsInput.value} օր`;
}

// 4. Ամսաթվի ստուգում
function showDate() {
    const dateInput = document.getElementById('dateInput');
    const message = document.getElementById('dateMessage');
    
    if (dateInput.value) {
        message.textContent = `Ընտրված ամսաթիվը՝ ${dateInput.value}`;
    } else {
        message.textContent = "Խնդրում ենք ընտրել ամսաթիվ:";
    }
}
