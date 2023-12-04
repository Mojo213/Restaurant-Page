function createContact() {
const contact = document.createElement('div');
contact.className = 'contact-main';

const img = document.createElement('img');

contact.appendChild(createPara('Contact number: 0207362829930'));
contact.appendChild(createPara('2 Fiat Drive London NW1 6PW'));
contact.appendChild(img);

return contact;

}

function createPara(text) {
    const para = document.createElement('p');
    para.className = 'paragraph';
    para.innerText = text;

    return para;
  }


  export default function loadContact() {
    const mainContainer = document.querySelector('.main-container'); 
    mainContainer.innerHTML = '';
    const contact = createContact();
    mainContainer.appendChild(contact);
  }