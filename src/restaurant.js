function createHeader() {
    const header = document.createElement('div');
    header.className = 'header-container';
    const h1 = document.createElement('h1');
    h1.className = 'h1';
    h1.innerText = 'La Mise On Place';
    header.appendChild(h1);

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    return nav;
}

function createNavLinks() {
    const navLinks = document.createElement('ul');

    const home = document.createElement('button');
    home.className = 'nav-button home';
    home.innerText = 'Home';

    home.addEventListener('click', () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => button.classList.remove('active'));
        home.classList.add('active');

    })

    navLinks.appendChild(home);

    const menu = document.createElement('button');
    menu.className = 'nav-button menu';
    menu.innerText = 'Menu';

    menu.addEventListener('click', () => {
        const buttons = navLinks.querySelectorAll('button');
        buttons.forEach((button) => button.classList.remove('active'));
        menu.classList.add('active');
    });

    navLinks.appendChild(menu);

    const contact = document.createElement('button');
    contact.className = 'nav-button contact';
    contact.innerText = 'Contact';

    contact.addEventListener('click', () => {
        const buttons = navLinks.querySelectorAll('button');
        buttons.forEach((button) => button.classList.remove('active'));
        contact.classList.add('active');
    });

    navLinks.appendChild(contact);

    return navLinks;
}

 function createMain() {
    const main = document.createElement('div');
    main.className = 'main-container';
    return main;
}

 function createFooter() {
    const footer = document.createElement('div');
    const p = document.createElement('p');
    footer.className = 'footer-container';
    p.className = 'footer-text';
    p.innerText = 'Copyright © mojo213 2023';
    footer.appendChild(p);
    return footer;
}




export default function loadRestaurantPage () {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);

    const nav = createNav();
    header.appendChild(nav);

    const navLinks = createNavLinks();
    nav.appendChild(navLinks);

    const main = createMain();
    content.appendChild(main);

    const footer = createFooter();
    content.appendChild(footer);
}