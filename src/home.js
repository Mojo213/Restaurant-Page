  function createHome() {
    
    const home = document.createElement('div');
    home.className = 'homeMain';
  
    const img = document.createElement('img');
    img.className = 'plates'
  
    home.appendChild(createPara('Best sea food in the country'));
    home.appendChild(createPara('made with care since 1955'));
    home.appendChild(img);
    home.appendChild(createPara('Reserve your table online today!'));

    return home; 
  }
  
  function createPara(text) {
    const para = document.createElement('p');
    para.className = 'paragraph';
    para.innerText = text;

    return para;
  }

  export default function loadHome () {
  const mainContainer = document.querySelector('.main-container'); 
  mainContainer.innerHTML = '';
  const home = createHome();
  mainContainer.appendChild(home);
  }






  