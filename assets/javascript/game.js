//Letters it can be 
var letters = ["a", "b", "c"];

//Stores guessed letters
var guessedLetters = [];

//Letter that you have to guess
var letterToGuess = null;

//Initial value of guesses that we count down from
var totalGuesses = 9;
var guessesLeft = 9;

//W/L Counter
var wins = 0;
var losses = 0;

//Functions for updating 
var updateGuessesLeft = function(){
	//this sets the text on the html to the value of the variable guessesLeft
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function(){
	//picks a random letter to guess using math randomizers 
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function(){
	//shows letters that have been guessed 
	document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

//the reset function
var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters=[];
	updateGuessesLeft();
	updateLetterToGuess();
	updateGuessesSoFar();
};

//functions that run when the page loads
updateLetterToGuess();

updateGuessesLeft();

// Detects which key is pressed 
document.onkeyup = function(event) {

// Reduces guesses everytime you push a key
guessesLeft--;

// makes all letters lowercase
var letter = String.fromCharCode(event.keyCode).toLowerCase();

// adds the guessed letters to the array
guessedLetters.push(letter);

// updates our guesses left and ones that have been made
      updateGuessesLeft();
      updateGuessesSoFar();


//Checks if letter guessed is the right letter
if (letter === letterToGuess) {
	wins ++;
	document.querySelector("#wins").innerHTML = wins;

	reset();
}
//if the guesses run out
if (guessesLeft === 0) {
	losses++;
	document.querySelector("#losses").innerHTML = losses;

	reset();
}
};