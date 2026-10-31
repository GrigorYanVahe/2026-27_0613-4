// Ստանում ենք անհրաժեշտ էլեմենտները HTML-ից՝ պահպանելով ճշգրիտ ID-ները
const mainMenuBtn = document.getElementById('mainMenuBtn');
const subMenu = document.getElementById('subMenu');
const openSub = document.getElementById('openSub');
const exitSub = document.getElementById('exitSub');
const output = document.getElementById('output');

// Մենյուի բացման / փակման տրամաբանություն
mainMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Կանխում է պատኮհական փակումը
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
        output.textContent = "Մենյուի կոճակը սեղմվեց, ենթամենյուի բացվեց:";
    }
});

// Եթե սեղմենք էկրանի ցանկացած այլ հատվածում, մենյուի ենթաբաժինը կփակվի
window.addEventListener('click', function () {
    subMenu.style.display = 'none';
});

// «Բացել» ենթամենյուի գործողություն
openSub.addEventListener('click', function (e) {
    e.preventDefault();
    output.textContent = "Ընտրվեց 'Բացել' հրամանը։";
});

// «Ելք» ենթամենյուի գործողություն
exitSub.addEventListener('click', function (e) {
    e.preventDefault();
    output.textContent = "Ընտրվեց 'Ելք' հրամանը։";
});

// Մկնիկի կտտոցի (click) գրանցում Log տարածքում
output.addEventListener('click', function () {
    output.textContent = "Մկնիկով կտտացվեց արդյունքների վահանակի (Log) վրա:";
});

// Ստեղնաշարի սեղմման (keydown) գրանցում ամբողջ էջում
document.addEventListener('keydown', function (event) {
    output.textContent = `Սեղմվել է ստեղնաշարի ստեղն՝ "${event.key}" (Կոդը: ${event.code})`;
});