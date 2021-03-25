//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light and sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence


//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var allowedMistakes = 3;
var emptyPattern = [];

function startGame() {
  //initialize game variables 
  emptyPattern = [];
  pattern = generatePattern(emptyPattern);
  console.log(pattern)
  allowedMistakes = 3;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  document.getElementById('remaining').innerHTML = "Number of tries: " + allowedMistakes;
}


function generatePattern(pattern) {
  // will generate an array of random numbers from 1-8
    for (var i=0; i < 5; i++) {
    pattern.push(getRandomIntInclusive(1, 8))
  }
  return pattern;
}

function stopGame() {
  // will remove the stop button and add the start button
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function getRandomIntInclusive(min, max) {
  // will return a random number from min - max, inclusive on both ends
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}


function guess(btn) {
  // logic for player's guesses
  document.getElementById('remaining').innerHTML = "Number of tries left: " + (allowedMistakes-1);
  if(!gamePlaying) {
    return;
  }
 
  if(pattern[guessCounter] == btn){
    //guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //Game over: Win!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //Correct answer, check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    allowedMistakes--;
    progress++;
    playClueSequence();
    if(allowedMistakes === 0) {
    //Game over: Lose!
      console.log("im here")
      loseGame();  
    }
  }
}    


function winGame() {
  // will stop the game and create the appropriate winning alert
  stopGame();
  alert("Congratulations! You've won :D");
}

function loseGame() {
  // will stop the game and create the appropriate losing alert
  stopGame();
  alert("Game over. You've lost :(");
}

function lightButton(btn) {
  // will add .lit to the specific button being pressed
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  // will clear the .lit to the specific button being pressed
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  // will play a single sound based off the button
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn);
  }
}

function playClueSequence() {
  // will play the entire sequence of sounds based off the pattern
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i=0; i <= progress; i++) { //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392.0,
  6: 440.0,
  7: 493.9,
  8: 533.3,
}
function playTone(btn,len){ 
  //takes a button and a length of time and will play for that length
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  //will start playing the tone for that button number
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
  //will stop playing the tone for that button number
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)