const yesButton = document.getElementById("yesButton")
const noButton = document.getElementById("noButton")
const wordToBeReadElement = document.getElementById("wordToBeRead")
const tractorsDisplay = document.getElementById("tractorsDisplay")
const gameButtons = document.getElementById("gameButtons")

let wordNumber = 0
let score = 0
let previousRandomNumber = 0

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

function saveName() {
  const usersNameInput = document.getElementById("usersName")
  const usersName = usersNameInput.value
  console.log(usersName)

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
  wordToBeReadElement.replaceChildren()
  tractorsDisplay.replaceChildren()
  yesButton.disabled = false
  noButton.disabled = false
  yesButton.style.backgroundColor = "rgb(245, 245, 176)"
  noButton.style.backgroundColor = "rgb(245, 245, 176)"

  const array = wordsArray[wordNumber].word.split("")

  for (i=0; i < array.length; i++) {
    const listElement = document.createElement("li")
    listElement.textContent = array[i]
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
  console.log(buttonClicked)

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
    wordNumber ++
  } else {
    setTimeout(congratulationsMessage, 500)
  }

  setTimeout(displayWordToBeRead, 500)
}

function pickImage() {
  const randomNumber = Math.floor(Math.random() * tractorImageArray.length)
  console.log(`Generated random Number: ${randomNumber}`)
  if (randomNumber === previousRandomNumber) {
    console.log("in if statement")
    
    console.log(`Previous random Number in if statement: ${previousRandomNumber}`)
    return pickImage()
  }
  previousRandomNumber = randomNumber;
  console.log(`Previous random Number out of if statement: ${previousRandomNumber}`)
  const imageToUse = tractorImageArray[randomNumber]
  return imageToUse
}

function scoreTracker(isCorrect) {
  const scoreTrackerWord = document.querySelector("[data-id=" + CSS.escape(wordNumber+1) + "]")
  if (isCorrect) {
    scoreTrackerWord.style.backgroundColor = "green"
    score++
  } else {
    scoreTrackerWord.style.backgroundColor = "red"
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
