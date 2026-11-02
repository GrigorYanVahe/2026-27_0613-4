function log(text) {
    const logBox = document.getElementById('log');
    logBox.innerHTML += text + '<br>';
    logBox.scrollTop = logBox.scrollHeight;
}

const box = document.getElementById('myBox');




box.onclick = () => log('Մկնիկ: Ձախ կտոց (Click)');
box.ondblclick = () => log('Մկնիկ: Կրկնակի կտոց (Double Click)');
box.onmouseenter = () => log('Մկնիկ: Մտավ տուփի մեջ');
box.onmouseleave = () => log('Մկնիկ: Դուրս եկավ տուփից');



document.onkeydown = (e) => {
    log(`Ստեղնաշար: Սեղմվեց "${e.key}" ստեղնը`);
};