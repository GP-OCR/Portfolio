function handleNavbar() {
    const header = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById(
        "navbarSupportedContent"
    );
    let i;

    window.onscroll = function () {
        const top = window.scrollY;

        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
    // ferme le menu mobile au clic
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            new bootstrap.Collapse(menuToggle, {
                toggle: false
            }).hide();
        });
    }
}

async function loadJson(path) {
    let response;
    let data;

    try {
        response = await fetch(path);
        if (!response.ok) {
            return [];
        }
        data = await response.json();
        return data;
    } catch (error) {
        console.log("Chargement impossible : " + path);
        return [];
    }
}

function asText(value) {
    if (typeof value !== "string") {
        return "";
    }
    return value;
}

function imageSrc(name) {
    let i;
    let ok;
    const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";

    if (typeof name !== "string" || name.length === 0) {
        return "";
    }
    ok = true;
    for (i = 0; i < name.length; i++) {
        if (allowed.indexOf(name.charAt(i)) === -1) {
            ok = false;
        }
    }
    if (!ok) {
        return "";
    }
    return "images/" + name;
}

function pageLink(url) {
    if (typeof url !== "string") {
        return "#";
    }
    if (url.indexOf("https://") === 0 || url.indexOf("http://") === 0) {
        return url;
    }
    return "#";
}

function skillCard(item) {
    const card = document.createElement("div");
    const body = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    const src = imageSrc(item.image);

    card.classList.add("card", "skillsText");
    body.classList.add("card-body");
    if (src !== "") {
        img.src = src;
    }
    img.alt = asText(item.title);
    img.loading = "lazy";
    title.classList.add("card-title", "mt-3");
    title.textContent = asText(item.title);
    text.classList.add("card-text", "mt-3");
    text.textContent = asText(item.text);
    body.appendChild(img);
    body.appendChild(title);
    body.appendChild(text);
    card.appendChild(body);
    return card;
}

function projectCard(item) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    const wrap = document.createElement("div");
    const link = document.createElement("a");
    const src = imageSrc(item.image);

    card.classList.add("card", "portfolioContent");
    img.classList.add("card-img-top");
    if (src !== "") {
        img.src = src;
    }
    img.alt = "Aperçu du projet " + asText(item.title);
    img.loading = "lazy";
    body.classList.add("card-body");
    title.classList.add("card-title");
    title.textContent = asText(item.title);
    text.classList.add("card-text");
    text.textContent = asText(item.text);
    wrap.classList.add("text-center");
    link.classList.add("btn", "btn-success");
    link.href = pageLink(item.link);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Lien";
    wrap.appendChild(link);
    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(wrap);
    card.appendChild(img);
    card.appendChild(body);
    return card;
}

async function fillSection(selector, path, kind) {
    const container = document.querySelector(selector);
    const items = await loadJson(path);
    let row = document.createElement("div");
    let col;
    let i;

    row.classList.add("row");
    for (i = 0; i < items.length; i++) {
        col = document.createElement("div");
        if (kind === "skills") {
            col.classList.add("col-lg-4", "mt-4");
            col.appendChild(skillCard(items[i]));
        } else {
            col.classList.add("col-lg-4", "col-md-6", "mt-4",
                "portfolioCol");
            col.appendChild(projectCard(items[i]));
        }
        row.appendChild(col);
        if ((i + 1) % 3 === 0 || i === items.length - 1) {
            container.appendChild(row);
            row = document.createElement("div");
            row.classList.add("row");
        }
    }
}

handleNavbar();
fillSection("#skills .container", "data/skills.json", "skills");
fillSection("#portfolio .container", "data/portfolio.json",
    "portfolio");
