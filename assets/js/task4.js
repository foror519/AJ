const latPhrases = [
  "Consuetudo est altera natura",
  "Nota bene",
  "Nulla calamitas sola",
  "Per aspera ad astra"
];

const rusPhrases = [
  "Привычка - вторая натура",
  "Заметьте хорошо!",
  "Беда не приходит одна",
  "Через тернии к звёздам"
];

let availableIndices = latPhrases.map((_, index) => index); 

let clickCounter = 0;

const listElement = document.getElementById('targetList');
const createButton = document.getElementById('createBtn');
const recolorButton = document.getElementById('recolorBtn');

createButton.addEventListener('click', function() {

  if (availableIndices.length === 0) {
    alert("Фразы закончились");
    return;
  }
  
  clickCounter++;
  
  const randomIndexPosition = Math.floor(Math.random() * availableIndices.length);
  const phrasesIndex = availableIndices[randomIndexPosition];     
  availableIndices.splice(randomIndexPosition, 1);
  
  const currentLat = latPhrases[phrasesIndex];
  const currentRus = rusPhrases[phrasesIndex];
  const bgClass = (clickCounter % 2 === 0) ? 'class1' : 'class2';
  
  const mainLi = document.createElement('li');
  mainLi.classList.add(bgClass);     
 
  const latText = document.createTextNode(currentLat);
  mainLi.appendChild(latText);
  
  const subUl = document.createElement('ul');
  const subLi = document.createElement('li');
  
  subLi.textContent = currentRus; 
  
  subUl.appendChild(subLi);
  mainLi.appendChild(subUl);
  listElement.appendChild(mainLi);
});

recolorButton.addEventListener('click', function() {
  const listItems = listElement.children;
  for (let i = 0; i < listItems.length; i++) {     
    if ((i + 1) % 2 === 0) {
       listItems[i].classList.add('bold-row');
    }
  }
});