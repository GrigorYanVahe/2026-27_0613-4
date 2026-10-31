class Country {
  constructor(countryName, countryCode) {
    this.countryName = countryName;
    this.countryCode = countryCode;
  }

  getFlagUrl() {
    return `https://flagcdn.com/16x12/${this.countryCode.toLowerCase()}.png`;
  }
}

let myH1 = document.getElementById("myH1");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let showMenu = document.getElementById("showMenu");
let mySubmit = document.getElementById("mySubmit");
let dropdown = document.querySelector(".dropdown");
let user = document.getElementById("user");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let myLoginSubmit = document.getElementById("myLoginSubmit");
let countriesData = [
  new Country("Armenia", "Am"),
  new Country("Spain", "Es"),
  new Country("France", "Fr"),
  new Country("Russia", "Ru"),
  new Country("US", "Us"),
];
let currentFlag = document.getElementById("currentFlag");
let currentName = document.getElementById("currentName");
const translation = {
  Armenia: {
    hi: "Ողջույն օգտատեր",
    user: "Օգտանուն",
    mail: "Էլ․ հասցե",
    pass: "Գաղտնաբառ",
  },
  Spain: {
    hi: "Hola usuario",
    user: "Nombre de usuario",
    mail: "El e-mail",
    pass: "Contraseña",
  },
  France: {
    hi: "Bonjour utilisateur",
    user: "Nom d'utilisateur",
    mail: "E-mail",
    pass: "Mot de passe",
  },
  Russia: {
    hi: "Здравствуй пользователь",
    user: "Имя пользователя",
    mail: "Эл. почта",
    pass: "Пароль",
  },
  US: { 
    hi: "Welcome User",
    user: "Username", 
    mail: "Email", 
    pass: "Password" 
  },
};

function setLanguage(country) {
  const t = translation[country.countryName];

  currentFlag.src = country.getFlagUrl();
  currentName.textContent = country.countryName;
  myH1.textContent = `${t.hi} ${username.value}`;
  user.textContent = t.user;
  mail.textContent = t.mail;
  pass.textContent = t.pass;
}

function setupCountries() {
  countriesData.forEach((el) => {
    let link = document.createElement("a");
    link.innerHTML = `<img src="${el.getFlagUrl()}" alt="${el.countryName}"> ${el.countryName}`;

    link.addEventListener("click", (e) => {
      closeLanguages();
      e.preventDefault();
      setLanguage(el);
    });
    dropdown.append(link);
  });
}

setupCountries();

username.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    email.focus();
  }
  if (dropdown.classList.contains("showDropdown")) {
    closeLanguages();
  }
});
email.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    password.focus();
  }
  if (dropdown.classList.contains("showDropdown")) {
    closeLanguages();
  }
});
password.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    showMenu.focus();
  }
  if (dropdown.classList.contains("showDropdown")) {
    closeLanguages();
  }
});

showMenu.addEventListener("click", () => {
  if (dropdown.classList.contains("dropdown")) {
    dropdown.classList.replace("dropdown", "showDropdown");
  } else if (dropdown.classList.contains("showDropdown")) {
    dropdown.classList.replace("showDropdown", "dropdown");
  }
});

function closeLanguages() {
  dropdown.classList.replace("showDropdown", "dropdown");
}

mySubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let u = username.value.trim().length;
  let em = email.value.trim().length;
  let p = password.value.length;

  if (u === 0 || u > 15) {
    alert("Username must be between 1 and 15 characters.");
  } else if (em === 0 || em > 20) {
    alert("Email must be between 1 and 20 characters.");
  } else if (p === 0 || p > 7) {
    alert("Password must be between 1 and 7 characters.");
  } else {
    window.location.href = "page.html";
  }
});


