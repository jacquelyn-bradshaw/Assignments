function saveName(event) {
  event.preventDefault
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
}
