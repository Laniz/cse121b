/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
// document.querySelector('#year').innerHTML = currentYear;

const fullName = 'Shepherd Ncube';
// const currentYear = '2023';
const profilePicture = 'images/placeholder.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ['Pizza,', 'Sushi,', 'Chocolate,', 'Ice Cream,', 'Tacos,', 'Nachos,'];

for (const food of favoriteFoods) {
    foodElement.innerHTML += `${food}&nbsp;`;
    
    // foodElement.innerHTML += `<br>${food}`;
}


const newFavoriteFoods = 'Burger';


favoriteFoods.push(newFavoriteFoods);


foodElement.innerHTML += `<br>`;

for (const food of favoriteFoods) {
    foodElement.innerHTML += `${food}&nbsp;`;
  }

foodElement.innerHTML += `<br>`;

favoriteFoods.shift();

for (const food of favoriteFoods) {
    foodElement.innerHTML += `${food}&nbsp;`;
  }

favoriteFoods.pop();

foodElement.innerHTML += `<br>`;

for (const food of favoriteFoods) {
    foodElement.innerHTML += `${food}&nbsp;`;
  }
