/* W05: Programming Tasks */
/* Declare and initialize global variables */
let temples = [];

/* async displayTemples Function */
function displayTemple(templeList) {
    templeList.forEach(function (temple) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let h4Location = document.createElement('h4');
        h4Location.textContent = 'Location: ' + temple.location;
        let h4Dedicated = document.createElement('h4');
        h4Dedicated.textContent = 'Dedicated: ' + temple.dedicated;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;

        article.appendChild(h3);
        article.appendChild(h4Location);
        article.appendChild(h4Dedicated);
        article.appendChild(img);
        document.getElementById('temples').appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
async function getTemples() {
    try {
        let response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
        let templeList = await response.json();
        temples = templeList;
        displayTemple(temples);
    } catch (error) {
        console.log("Error: ", error);
    }
}


/* reset Function */
function reset() {
    let templesArticle = document.getElementById('temples');
    while (templesArticle.firstChild) {
        templesArticle.removeChild(templesArticle.firstChild);
    }
}
/* sortBy Function */
const sortBy = (filter) => {
    reset();

    switch (filter) {
        case "utah":
            // "utah": filter for temples where the location contains "Utah" as a string.
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            // "notutah": filter for temples where the location does not contain "Utah" as a string.
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}
getTemples();
/* Event Listener */
let sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener('change', () => {
    sortBy(sortByElement.value);
});

function displayTemples(filteredTemples) {
    displayTemple(filteredTemples);
}
