const output = document.getElementById('output');
const mainMenuBtn = document.getElementById('mainMenuBtn');

// Ընդհանուր ֆունկցիա՝ հաղորդագրություն ցուցադրելու համար
const show = (type, text) => {
    output.innerHTML = `<strong>${type} հաղորդագրություն:</strong> ${text}`;
};

// Մենյուներ
const menuItems = { openSub: 'Բացել', exitSub: 'Ելք' };

for (const [id, name] of Object.entries(menuItems)) {
    document.getElementById(id).addEventListener('click', e => {
        e.preventDefault();
        show('Մենյուի', `Սեղմվեց «${name}» ենթամենյուն:`);
    });
}

// Մկնիկ
const buttons = ['Ձախ',  'Աջ'];

window.addEventListener('mousedown', e => {
    if (mainMenuBtn.contains(e.target)) return;
    show('Մկնիկի', `Սեղմվել է մկնիկի <b>${buttons[e.button]}</b> կոճակը (X: ${e.clientX}, Y: ${e.clientY})`);
});

// Ստեղնաշար
window.addEventListener('keydown', e => {
    show('Ստեղնաշարի', `Սեղմվել է <b>${e.key}</b> ստեղնը (Կոդը՝ ${e.code})`);
});