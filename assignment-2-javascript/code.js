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
    console.log("Your correct")
  } else {
    console.log("Try again")
  }

  if (wordNumber+1 !== wordsArray.length) {
    wordNumber ++
  } else {
    congratulationsMessage()
  }

  displayWordToBeRead()
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
  {word: "cab", real: "yes"}
]
