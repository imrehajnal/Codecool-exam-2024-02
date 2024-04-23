import data from './data.js';

const root = document.querySelector('#root');

function main() {
  let i = 1
  const introSection = document.createElement('section');
  introSection.className = 'intro';

  const h1 = document.createElement('h1');
  h1.className = 'intro__header'; 
  h1.innerText = 'Visualized and clarified by AI.';

  introSection.append(h1);
  root.append(introSection);
  
  const containerSection = document.createElement('section');
  containerSection.className = 'container';

  let keys = Object.keys(data);

  for (let key in data) {
    let item = data[key];
    
    const cards = document.createElement("div");
    cards.className = 'card';

    const header = document.createElement("h1");
    header.className = 'card__header';
    header.innerText = item.title;

    const body = document.createElement("div");
    body.className = 'card__body';

    const bodyImage = document.createElement("div");
    bodyImage.className = 'card__body__image';


    cards.append(header, body);
    //body.append(img);
    containerSection.append(cards);
    i++;
  }
  root.append(containerSection);
   console.log(image);
}

main();
