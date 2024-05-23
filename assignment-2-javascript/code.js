const yesButton = document.getElementById("yesButton")
const noButton = document.getElementById("noButton")

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

  const gameButtons = document.getElementById("gameButtons")
  gameButtons.style.display = "flex"

  displayWordToBeRead()
}

function displayWordToBeRead () {

  wordToBeReadElement.replaceChildren()
  yesButton.style.backgroundColor = "rgb(245, 245, 176)"
  noButton.style.backgroundColor = "rgb(245, 245, 176)"

  const array = wordsArray[wordNumber].word.split("")

  for (i=0; i < array.length; i++) {
    const listElement = document.createElement("li")
    listElement.textContent = array[i]
    wordToBeReadElement.appendChild(listElement)
  }

  console.log(wordNumber)
}

function answerClicked(event) {
  // How to find out which button was clicked
  const buttonClicked = event.target.dataset.id
  console.log(buttonClicked)

  if (buttonClicked === wordsArray[wordNumber].real) {
    if (buttonClicked === "yes") {
      yesButton.style.backgroundColor = "green"
    } else {
      noButton.style.backgroundColor = "green"
    }
  } else {
    if (buttonClicked === "yes") {
      yesButton.style.backgroundColor = "red"
    } else {
      noButton.style.backgroundColor = "red"
    }
  }

  if (wordNumber+1 !== wordsArray.length) {
    wordNumber ++
  } else {
    congratulationsMessage()
  }

  setTimeout(displayWordToBeRead, 2000)
}

function congratulationsMessage() {
  const paragraphElement = document.createElement("p")
  paragraphElement.textContent = "Well done"
  const congratulationsMessageElement = document.getElementById("congratulationsMessage")
  congratulationsMessageElement.appendChild(paragraphElement)
}

wordNumber = 0;

const wordToBeReadElement = document.getElementById("wordToBeRead")

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
