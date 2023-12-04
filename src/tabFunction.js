import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

export default function tabFunc () {
    const homeButton = document.querySelector('.nav-button.home');
    const menuButton = document.querySelector('.nav-button.menu');
    const contactButton = document.querySelector('.nav-button.contact');
    
    homeButton.addEventListener('click', () => {
        loadHome();
    });
    
    menuButton.addEventListener('click', () => {
        loadMenu();
    });

    contactButton.addEventListener('click', ()=> loadContact());
}