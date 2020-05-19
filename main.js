const pies = [
  {
    id: '1',
    type: 'Apple',
    name: 'Some Name Here',
    size: 'Family',
    crust: 'Lattuce',
    price: 30,
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2019%2F08%2Fmain%2F2589601_mailb_mailbox_apple_pie_003.jpg%3Fitok%3DXkbaosJ5',
    owner: 'luke',
    aLaMode: true
  },
  {
    id: '2',
    type: 'Pecan',
    name: 'Some Name Here',
    size: 'Personal',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Mini-Pecan-Pies-3.jpg?resize=1360%2C2040&ssl=1',
    owner: 'michael',
    aLaMode: false
  },
  {
    id: '3',
    type: 'Blueberry',
    name: 'Some Name Here',
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK8Vps5vD5FKfXH1Cvkln0n1p-M5kzkgsy95z-W1JgFrFE0ukk&usqp=CAU',
    owner: 'matt',
    aLaMode: true
  },
  {
    id: '4',
    type: 'Meat Pie',
    name: 'Some Name Here',
    size: 'Real Big',
    crust: 'Meat Crust',
    price: 1,
    imageUrl: 'https://culinaryginger.com/wp-content/uploads/Minced-Beef-and-Onion-Pies-10-480x480.jpg',
    owner: 'luke',
    aLaMode: true
  },
  {
    id: '5',
    type: 'Pizza Pie',
    name: 'Some Name Here',
    size: 'XL',
    crust: 'regular',
    price: 6,
    imageUrl: 'https://themercenaryresearcher.files.wordpress.com/2012/07/ginormous-pizza.jpg',
    owner: 'michael',
    aLaMode: true
  },
  {
    id: '6',
    type: 'Rhubarb',
    name: 'Some Name Here',
    size: 'Pie Sized',
    crust: 'Normal',
    price: 2147483647,
    imageUrl: 'https://assets.kraftfoods.com/recipe_images/opendeploy/54036_640x428.jpg',
    owner: 'matt',
    aLaMode: true
  },
  {
    id: '7',
    type: 'Spanakopita',
    name: 'Some Name Here',
    size: 'Pan',
    crust: 'Filo',
    price: 8,
    imageUrl: 'https://www.veggiesdontbite.com/wp-content/uploads/2018/12/healthy-vegan-spanakopita-117-500x500.jpg',
    owner: 'everybody',
    aLaMode: false
  }
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const clickOnPieEvent = (e) => {
  console.log(e.target);
  for (let i = 0; i < pies.length; i++) {
    const pie = pies[i];
    if (pie.id === e.target.id) {
      console.log('You clicked on this pie:', pie);
    }
  }
}

const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    const pie = pieCollection[i];
    const aLaModeText = (pie.aLaMode) ? 'w/Ice Cream' : 'w/o Ice Cream';

    domString += `
      <div class="pie" id="${pie.id}">
        <h2>${pie.type}</h2>
        <img src="${pie.imageUrl}" alt="image of ${pie.type} pie">
        <p>
          This ${pie.type} pie is a ${pie.size} pie, it's owned by ${pie.owner},
          <br>
          and has a ${pie.crust} crust, and is served ${aLaModeText}
        </p>
        <h4>Price: ${pie.price}</h4>
      </div>
    `;
  }

  printToDom('#pieContainer', domString);

  const pieCards = document.querySelectorAll('.pie');
  for (let i = 0; i < pieCards.length; i++) {
    const pieCard = pieCards[i];
    pieCard.addEventListener('click', clickOnPieEvent);
  }
}

const filterPiesEvent = (event) => {
  const buttonId = event.target.id;
  const tempPieCollection = [];

  if (buttonId === 'all') {
    buildPies(pies);
    return;
  }

  for (let i = 0; i < pies.length; i++) {
    if (pies[i].owner === buttonId) {
      tempPieCollection.push(pies[i]);
    }
  }

  buildPies(tempPieCollection);
}

const clickEvents = () => {
  document.querySelector('#luke').addEventListener('click', filterPiesEvent);
  document.querySelector('#michael').addEventListener('click', filterPiesEvent);
  document.querySelector('#matt').addEventListener('click', filterPiesEvent);
  document.querySelector('#all').addEventListener('click', filterPiesEvent);
}

const init = () => {
  buildPies(pies);
  clickEvents();
}

init();
