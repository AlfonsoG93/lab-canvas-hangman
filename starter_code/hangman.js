var hangman;
var words = ["hello", "ironhack", "javascript", "coding"];
var clickedLetters = [];
function Hangman() {
  this.words = words;
  this.secretWord ="";
  this.clickedLetters = clickedLetters;
}

Hangman.prototype._getWord = function() {
  var ranW = (Math.floor(Math.random() * this.words.length));
  this.secretWord = this.words[ranW];
  return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90)
  return true;
  else
  return false;
};

Hangman.prototype._checkClickedLetters = function(key) {
 if(this.clickedLetters.indexOf(key.toUpper === -1)){
    return true;
    }
    else{
    return false;
    }
};

Hangman.prototype._addCorrectLetter = function(i) {};

Hangman.prototype._addWrongLetter = function(letter) {};

Hangman.prototype._checkGameOver = function() {};

Hangman.prototype._checkWinner = function() {};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
