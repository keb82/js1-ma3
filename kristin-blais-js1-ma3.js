// question 1
const doSomething = (a, b) => {
    return a - b;
};

// question 2
const url = "https://api.rawg.io/api/games?genres=sports";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        
        for(let i = 0; i < json.results.length; i++){
            console.log(json.results[i].name);
        }
    })
    .catch(function(error){
        document.location.href = "error.html";
    });

// question 3
var correctedString = "These cats are outrageous.".replace("cats", "giraffes");

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
 
var userId = 0;

if(params.has("userId")){
    userId = params.get("userId");
    
    if(userId < 10)
        document.location.href = "first.html";
    else 
        document.location.href = "second.html";
}
else{
    document.location.href = "third.html";
}

// question 5
const div = document.querySelector(".container");
const button = document.querySelector(".btn");

div.removeChild(button);

// question 6
const div2 = document.querySelector(".animals");

const parrotElement = document.createElement("li");
parrotElement.innerHTML = "Parrots";
parrotElement.classList.add("parrots");

div2.appendChild(parrotElement);

var cowsElement = document.querySelector(".cows");
cowsElement.after(parrotElement);


// question 7
const gamesUrl = "https://api.rawg.io/api/games/3801";

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function assignRating(json){
    
        console.log(json.rating);
    
        var ratingDiv = document.querySelector(".rating");
        ratingDiv.innerHTML = json.rating;
    
    })
    .catch(function(error){
        console.log(error);
    });

