let temples = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(templeList) {
    templeList.forEach(function(temple) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let h4location = document.createElement('h4');
        h4location.textContent = 'Location: ' + temple.location;
        let h4dedicated = document.createElement('h4');
        h4dedicated.textContent = 'Dedicated: ' + temple.dedicated;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName

        article.appendChild(h3);
        article.appendChild(h4location);
        article.appendChild(h4dedicated);
        article.appendChild(img);
        document.getElementById('temples').appendChild(article);
    });
}
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
async function getTemples() {
    try {
        let response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
        let templeList = await response.json();
        temples = templeList;
        output(temples);
    }   catch (error){
        console.log("Error: ", error)
    }
}

getTemples();
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    let templesArticle = document.getElementById('temples');
    while (templesArticle.firstChild) {
        templesArticle.removeChild(templesArticle.firstChild)
    }
}
// Step 8: Declare a function named sortBy that does the following:
const sortBy = () => {
    reset();
    var sortByElement = document.getElementById('sortBy');
    var selectedValue = sortByElement.value;
    let sorted = temples.sort((temple1,temple2) => {
        if (selectedValue == "templeNameAscending") {
            if (temple1.templeName > temple2.templeName)
                return 1
            else if (temple1.templeName < temple2.templeName)
                return -1
            else
                return 0
        }

        if (selectedValue == "templeNameDescending") {
            if (temple1.templeName > temple2.templeName)
                return -1
            else if (temple1.templeName < temple2.templeName)
                return 1
            else
                return 0
        }
    });
    
    output(sorted)
}

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
let sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener('change', sortBy);
