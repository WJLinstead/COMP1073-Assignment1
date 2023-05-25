// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
var firstNoun = new Array();
    firstNoun[0] = "The Turkey ";
    firstNoun[1] = "Mom ";
    firstNoun[2] = "Dad ";
    firstNoun[3] = "The Dog ";
    firstNoun[4] = "The Elephant ";
    firstNoun[5] = "The Cat ";

var verbs = new Array();
    verbs[0]=" Sat On ";
    verbs[1]=" Ate ";
    verbs[2]=" Danced With ";
    verbs[3]=" Saw ";
    verbs[4]=" Doesn't Like ";
    verbs[5]=" Kissed ";

var adjectives = new Array();
    adjectives[0]=" A Funny ";
    adjectives[1]=" A Scary ";
    adjectives[2]=" A Goofy ";
    adjectives[3]=" A Slimy ";
    adjectives[4]=" A Barking ";
    adjectives[5]=" A Fat ";

var secondNoun = new Array();
    secondNoun[0]=" Goat ";
    secondNoun[1]=" Monkey ";
    secondNoun[2]=" Fish ";
    secondNoun[3]=" Cow ";
    secondNoun[4]=" Frog ";
    secondNoun[5]=" Bug ";
    secondNoun[6]=" Worm ";

var place = new Array();
    place[0]=" On The Moon";
    place[1]=" On The Chair";
    place[2]=" In My Spaghetti";
    place[3]=" In My Soup";
    place[4]=" On The Grass";
    place[5]=" In My Shoes";

// Variables for count to grab array elements
var firstNounGrabber;
var firstNounCounter=0;

var verbGrabber;
var verbCounter=0;

var adjectiveGrabber;
var adjectiveCounter=0;

var secondNounGrabber;
var secondNounCounter=0;

var placeGrabber;
var placeCounter=0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {//grabs the first noun from the array
  // variable to get array element and displaying it
    firstNounGrabber=firstNoun[firstNounCounter];
    document.getElementById("choosenNoun1").innerHTML = firstNounGrabber;
    firstNounCounter++;
  // if-else to change count setting
    if (firstNounCounter===6){
        firstNounCounter=0;
    }
}

function verb_on_click() {//Grabs the verb from the array
    verbGrabber=verbs[verbCounter];
    document.getElementById("choosenVerb").innerHTML = verbGrabber;
    firstNounCounter++;
    if (verbCounter===6){
        verbCounter=0;
    }
}

function adjective_on_click() {//grabs the adjective from the array
    adjectiveGrabber=adjectives[adjectiveCounter];
    document.getElementById("choosenAdjective").innerHTML = adjectiveGrabber;
    adjectiveCounter++;
    if (adjectiveCounter===6){
        adjectiveCounter=0;
    }
}

function noun2_on_click() {//grabs the second noun from the array
    secondNounGrabber=secondNoun[secondNounCounter];
    document.getElementById("choosenNoun2").innerHTML = secondNounGrabber;
    secondNounCounter++;
    if (secondNounCounter===6){
        secondNounCounter=0;
    }
}

function setting_on_click() {//Grabs the setting word from the array
    placeGrabber=place[placeCounter];
    document.getElementById("choosenSetting").innerHTML = placeGrabber;
    placeCounter++;
    if (placeCounter===6){
        placeCounter=0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    var fullStory = firstNounGrabber.concat(verbGrabber,adjectiveGrabber,secondNounGrabber,placeGrabber);
    document.getElementById("story").innerHTML = fullStory;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    //random number generators for the array grabbers
    firstNounGrabber=firstNoun[Math.floor(Math.random() * 6)];
    verbGrabber=verbs[Math.floor(Math.random() * 6)];
    adjectiveGrabber=adjectives[Math.floor(Math.random() * 6)];
    secondNounGrabber=secondNoun[Math.floor(Math.random() * 7)];
    placeGrabber=place[Math.floor(Math.random() * 6)];
    //concats the "story"
    var randomStory = firstNounGrabber.concat(verbGrabber,adjectiveGrabber,secondNounGrabber,placeGrabber);
    document.getElementById("story").innerHTML = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
