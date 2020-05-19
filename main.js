const pies = [
  {
    id: 1,
    type: 'Apple',
    taxRate: .07,
    size: 'Family',
    crust: 'Lattuce',
    price: 30,
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2019%2F08%2Fmain%2F2589601_mailb_mailbox_apple_pie_003.jpg%3Fitok%3DXkbaosJ5',
    owner: 'luke',
    aLaMode: true
  },
  {
    id: 2,
    type: 'Pecan',
    taxRate: .08,
    size: 'Personal',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Mini-Pecan-Pies-3.jpg?resize=1360%2C2040&ssl=1',
    owner: 'michael',
    aLaMode: false
  },
  {
    id: 3,
    type: 'Blueberry',
    taxRate: .07,
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK8Vps5vD5FKfXH1Cvkln0n1p-M5kzkgsy95z-W1JgFrFE0ukk&usqp=CAU',
    owner: 'matt',
    aLaMode: true
  },
  {
    id: 4,
    type: 'Meat Pie',
    taxRate: .1,
    size: 'Real Big',
    crust: 'Meat Crust',
    price: 1,
    imageUrl: 'https://culinaryginger.com/wp-content/uploads/Minced-Beef-and-Onion-Pies-10-480x480.jpg',
    owner: 'luke',
    aLaMode: true
  },
  {
    id: 5,
    type: 'Pizza Pie',
    taxRate: .02,
    size: 'XL',
    crust: 'regular',
    price: 6,
    imageUrl: 'https://themercenaryresearcher.files.wordpress.com/2012/07/ginormous-pizza.jpg',
    owner: 'michael',
    aLaMode: true
  },
  {
    id: 6,
    type: 'Rhubarb',
    taxRate: .04,
    size: 'Pie Sized',
    crust: 'Normal',
    price: 2147483647,
    imageUrl: 'https://assets.kraftfoods.com/recipe_images/opendeploy/54036_640x428.jpg',
    owner: 'matt',
    aLaMode: true
  },
  {
    id: 7,
    type: 'Spanakopita',
    taxRate: .07,
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

const clickOnThemPies = (event) => {
  console.log(event.target)
}

const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    const aLaModeText = (pieCollection[i].aLaMode) ? 'w/Ice Cream' : 'w/o Ice Cream';

    domString += `
      <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
        <p>
          This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner},
          <br>
          and has a ${pieCollection[i].crust} crust, and is served ${aLaModeText}
        </p>
        <h4>Price: ${pieCollection[i].price}</h4>
      </div>
    `;
  }

  printToDom('#pieContainer', domString);

  const allPieCards = document.querySelectorAll('.pie');
  allPieCards.forEach(card => {
    card.addEventListener('click', clickOnThemPies);
  })
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
