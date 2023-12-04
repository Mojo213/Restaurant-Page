function createMenu() {
    const menu = document.createElement('div');
    menu.className = 'foodMenu';

    const menuItem1 = createMenuItem('Sautéed Scallops', 'https://images.unsplash.com/photo-1612204078213-a227dba74093?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const menuItem2 = createMenuItem('Green Salad', 'https://images.unsplash.com/photo-1608032077018-c9aad9565d29?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const menuItem3 = createMenuItem('Finest French Pâté', 'https://images.unsplash.com/photo-1663427937451-f3dd78df6840?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const menuItem4 = createMenuItem('Lamb on the bone', 'https://images.unsplash.com/photo-1624290799129-60740e0ffec6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const menuItem5 = createMenuItem('Penne Arrabiata', 'https://images.unsplash.com/photo-1607116667981-ff148a14e975?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const menuItem6 = createMenuItem('Foie Gras', 'https://images.unsplash.com/photo-1677758778998-c5427bc0d33e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    menu.appendChild(menuItem5);
    menu.appendChild(menuItem6);

    const childDivs = menu.querySelectorAll('div.menu-item');
    childDivs.forEach((div, index) => {
        div.classList.add(`item-${index + 1}`);
    });

    return menu;
}

function createMenuItem(text, imgSrc) {
    const div = document.createElement('div');
    div.className = 'menu-item';

    const itemText = document.createElement('p');
    itemText.innerText = text;
    div.appendChild(itemText);

    const img = document.createElement('img');
    img.src = imgSrc; 
    div.appendChild(img);

    return div;
}

export default function loadMenu() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = '';
    const menu = createMenu();
    mainContainer.appendChild(menu);
}
