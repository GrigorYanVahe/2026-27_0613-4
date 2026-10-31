const output = document.getElementById('output');
const mainMenuBtn = document.getElementById('mainMenuBtn');
const subMenu = document.getElementById('subMenu');

// -------------------------------------------------------------
// ՉԱՓԱՆԻՇ 2: Մենյուների հաղորդագրությունների մշակում (JavaScript)
// -------------------------------------------------------------
document.getElementById('openSub').addEventListener('click', function(e) {
    e.preventDefault();
    output.innerHTML = "<strong>Մենյուի հաղորդագրություն:</strong> Սեղմվեց «Բացել» ենթամենյուն:";
});

document.getElementById('exitSub').addEventListener('click', function(e) {
    e.preventDefault();
    output.innerHTML = "<strong>Մենյուի հաղորդագրություն:</strong> Սեղմվեց «Ելք» ենթամենյուն:";
});

// -------------------------------------------------------------
// ՉԱՓԱՆԻՇ 3: Մկնիկի հաղորդագրությունների մշակում (JavaScript Mouse Events)
// -------------------------------------------------------------
window.addEventListener('mousedown', function(e) {
    if(!mainMenuBtn.contains(e.target)) {
        let buttonName = e.button === 0 ? "Ձախ" : (e.button === 2 ? "Աջ" : "Միջին");
        output.innerHTML = `<strong>Մկնիկի հաղորդագրություն:</strong> Սեղմվել է մկնիկի <b>${buttonName}</b> կոճակը (X: ${e.clientX}, Y: ${e.clientY})`;
    }
});

// -------------------------------------------------------------
// ՉԱՓԱՆԻՇ 4: Ստեղնաշարի հաղորդագրությունների մշակում (JavaScript Keyboard Events)
// -------------------------------------------------------------
window.addEventListener('keydown', function(e) {
    output.innerHTML = `<strong>Ստեղնաշարի հաղորդագրություն:</strong> Սեղմվել է <b>${e.key}</b> ստեղնը (Կոդը՝ ${e.code})`;
});