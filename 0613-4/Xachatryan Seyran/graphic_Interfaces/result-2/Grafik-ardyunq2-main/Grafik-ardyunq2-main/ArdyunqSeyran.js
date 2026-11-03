
document.body.innerHTML = "";

document.body.style.cssText = `
    background: #eaf1f4;
    font-family: Arial;
    text-align: center;
    margin: 0;
    color: #263746;
`;

const style = document.createElement("style");
style.textContent = `
    nav {
        background: #244b5a;
        padding: 15px;
    }
    button {
        padding: 12px 18px;
        margin: 5px;
        border: none;
        border-radius: 8px;
        background: #438397;
        color: white;
        cursor: pointer;
    }
    button:hover, button:focus {
        background: #193d4b;
        outline: 2px solid #8ccbd7;
    }
    .menu { display: inline-block; position: relative; }
    .submenu {
        display: none;
        position: absolute;
        background: white;
        width: 150px;
        z-index: 5;
    }
    .submenu button {
        display: block;
        width: 90%;
    }
    .open .submenu { display: block; }
    main {
        margin: 60px auto;
        padding: 25px;
        max-width: 400px;
        background: white;
        border-radius: 15px;
    }
`;

document.head.appendChild(style);

const nav = document.createElement("nav");
document.body.appendChild(nav);

const main = document.createElement("main");
main.innerHTML = `
    <h1>📚 My Library</h1>
    <h3 id="result">Welcome to the library!</h3>
    <input id="book" placeholder="Enter book name">
    <button id="add">Add Book</button>
    <ul id="books"></ul>
`;
document.body.appendChild(main);

const data = {
    Books: ["Show Books", "Add Book"],
    Actions: ["Borrow Book", "Return Book"],
    Help: ["About", "Instructions"]
};

function closeMenus() {
    document.querySelectorAll(".menu")
        .forEach(m => m.classList.remove("open"));
}

// Create menus and submenus
Object.keys(data).forEach(name => {
    const menu = document.createElement("div");
    menu.className = "menu";

    const btn = document.createElement("button");
    btn.textContent = name;

    const sub = document.createElement("div");
    sub.className = "submenu";

    data[name].forEach(item => {
        const option = document.createElement("button");
        option.textContent = item;

        option.onclick = () => {
            runAction(item);
            closeMenus();
        };

        sub.appendChild(option);
    });

    // Mouse click
    btn.onclick = () => {
        const open = menu.classList.contains("open");
        closeMenus();
        if (!open) menu.classList.add("open");
    };

    // Mouse hover
    menu.onmouseenter = () => menu.classList.add("open");
    menu.onmouseleave = () => menu.classList.remove("open");

    // Keyboard
    menu.onkeydown = e => {
        const options = [...sub.querySelectorAll("button")];

        if (e.key === "ArrowDown") {
            e.preventDefault();
            menu.classList.add("open");
            options[0].focus();
        }

        if (e.key === "Escape") {
            closeMenus();
            btn.focus();
        }
    };

    menu.append(btn, sub);
    nav.appendChild(menu);
});

// Library functions
let books = ["Harry Potter", "The Little Prince"];

function showBooks() {
    document.getElementById("books").innerHTML = "";
    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book;
        document.getElementById("books").appendChild(li);
    });
}

function runAction(action) {
    const result = document.getElementById("result");

    if (action === "Show Books") {
        showBooks();
        result.textContent = "Our Books";
    }

    if (action === "Add Book") {
        document.getElementById("book").focus();
        result.textContent = "Enter a book name";
    }

    if (action === "Borrow Book") {
        result.textContent = "Select a book to borrow!";
    }

    if (action === "Return Book") {
        result.textContent = "Book returned successfully!";
    }

    if (action === "About") {
        result.textContent = "Welcome to My Library!";
    }

    if (action === "Instructions") {
        result.textContent = "Use menus, mouse and keyboard.";
    }
}

// Add book
document.getElementById("add").onclick = () => {
    const input = document.getElementById("book");

    if (input.value.trim()) {
        books.push(input.value.trim());
        input.value = "";
        showBooks();
        document.getElementById("result").textContent =
            "Book added successfully!";
    }
};

// Keyboard shortcuts
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenus();
});

showBooks();
