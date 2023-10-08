/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name:'Shepherd Ncube', 
    photo:'../images/placeholder.jpg', 
    favouriteFoods: ['Jollof/Fried rice', 'Fried/Roasted ripe plantains', 'Burger'],
    hobbies: ['Playing soccer', 'Solving the rubiks cube', 'Watching anime'], 
    placesLived:[
    ]
};


// This occurs outside of the object definition.
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Zimbabwe, BYO',
      length: '23 years'
    }
  );
  
  myProfile.placesLived.push(
      {
        place: 'Kenya, NAI',
        length: '2 years'
      }
    );
  
    myProfile.placesLived.push(
      {
        place: 'USA, ID',
        length: '1 years'
      }
    );



/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').textContent = myProfile.name;

// let myName = myProfile['name']
// document.querySelector('#name').innerHTML = myName;

/* Photo with attributes */

let myPic = myProfile.photo;
document.querySelector('#photo').setAttribute('src', myPic);
document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
let myFavFoods = document.getElementById('favorite-foods');
for (food of myProfile.favouriteFoods) {
    myFavFoods.innerHTML += '<li>' + food + '</li>'; 
}


/* Hobbies List */

let myHobbies = document.getElementById('hobbies');
for (hobby of myProfile.hobbies) {
    myHobbies.innerHTML += '<li>' + hobby + '</li>'; 
}


/* Places Lived DataList */

let placese = myProfile.placesLived;

let places = document.querySelector('#places-lived')
let list = ''
placese.forEach(element => { 
    list += `<dt><strong>${element.place}</strong></dt>
    <dd>${element.length}</dd>`;
});

places.innerHTML += list

