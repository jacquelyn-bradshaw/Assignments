// Elements given global scope so they can be used in mulitple functions
const yesButton = document.getElementById("yesButton")
const noButton = document.getElementById("noButton")
const wordToBeReadElement = document.getElementById("wordToBeRead")
const tractorsDisplay = document.getElementById("tractorsDisplay")
const gameButtons = document.getElementById("gameButtons")

// Global variables used in multiple functions
let wordNumber = 0
let score = 0

const wordsArray = [
  {word: "grain", real: "yes"},
  {word: "mub", real: "no"},
  {word: "trees", real: "yes"},
  {word: "seed", real: "yes"},
  {word: "grass", real: "yes"},
  {word: "crod", real: "no"},
  {word: "cab", real: "yes"},
  {word: "farm", real: "yes"},
  {word: "banure", real: "no"},
  {word: "harvest", real: "yes"},
]

const tractorImageArray = [
  "./images/blueTractor.png",
  "./images/orangeTractor.png",
  "./images/purpleTractor.png",
  "./images/redTractor.png",
  "./images/yellowTractor.png"
]

// Global variable so it is not reset during each function call
let previousRandomNumber = 0

function saveName() {
  const usersNameInput = document.getElementById("usersName")
  const usersName = usersNameInput.value
  console.log(`Inputted name: ${usersName}`)

  if (usersName.trim() === "") {
    window.alert("Please enter your name")
    return
  }

  const form = document.getElementById("usersNameInputForm")
  form.style.display = "none"

  const usersNameParagraph = document.getElementById("usersNameParagraph")
  usersNameParagraph.textContent = `Hi ${usersName}`

  const gameInstructionsDiv = document.getElementById("gameInstructions")
  gameInstructionsDiv.style.display = "block"

  gameButtons.style.display = "flex"

  displayWordToBeRead()
}

function displayWordToBeRead() {
  // Reset children back to 0
  wordToBeReadElement.replaceChildren()
  tractorsDisplay.replaceChildren()

  // Reset buttons
  yesButton.disabled = false
  noButton.disabled = false
  yesButton.style.backgroundColor = "rgb(245, 245, 176)"
  noButton.style.backgroundColor = "rgb(245, 245, 176)"

  // Split the word to be read into individual characters
  const splitWordArray = wordsArray[wordNumber].word.split("")

  for (i=0; i < splitWordArray.length; i++) {
    const listElement = document.createElement("li")
    listElement.textContent = splitWordArray[i]
    wordToBeReadElement.appendChild(listElement)
    const imageElement = document.createElement("img")
    const image = pickImage()
    imageElement.src = image
    tractorsDisplay.appendChild(imageElement)
  }
}

function answerClicked(event) {
  // How to find out which button was clicked
  const buttonClicked = event.target.dataset.id

  if (buttonClicked === wordsArray[wordNumber].real) {
    if (buttonClicked === "yes") {
      yesButton.style.backgroundColor = "green"
      noButton.disabled = true
    } else {
      noButton.style.backgroundColor = "green"
      yesButton.disabled = true
    }
    scoreTracker(true)
  } else {
    if (buttonClicked === "yes") {
      yesButton.style.backgroundColor = "red"
      noButton.disabled = true
    } else {
      noButton.style.backgroundColor = "red"
      yesButton.disabled = true
    }
    scoreTracker(false)
  }

  if (wordNumber+1 !== wordsArray.length) {
    wordNumber++
    setTimeout(displayWordToBeRead, 500)
  } else {
    setTimeout(congratulationsMessage, 500)
  }
}

function pickImage() {
  const randomNumber = Math.floor(Math.random() * tractorImageArray.length)
  if (randomNumber === previousRandomNumber) {
    // Immediately rerun the function if the random number is the same as the previous random number
    return pickImage()
  }
  previousRandomNumber = randomNumber
  const imageToUse = tractorImageArray[randomNumber]
  return imageToUse
}

function scoreTracker(isCorrect) {
  // Access the correct score tracker circle for the current word number
  const scoreTrackerDisplay = document.querySelector("[data-id=" + CSS.escape(wordNumber+1) + "]")
  if (isCorrect) {
    scoreTrackerDisplay.style.backgroundColor = "green"
    score++
  } else {
    scoreTrackerDisplay.style.backgroundColor = "red"
  }
}

function congratulationsMessage() {
  const paragraphElement = document.createElement("p")
  paragraphElement.innerHTML = `Well done! <br /> Your score was ${score} out of 10`
  const congratulationsMessageElement = document.getElementById("congratulationsMessage")
  congratulationsMessageElement.appendChild(paragraphElement)
  wordToBeReadElement.style.display = "none"
  gameButtons.style.display = "none"
  tractorsDisplay.style.display = "none"
}
