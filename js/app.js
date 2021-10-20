const input = document.querySelector("#math-input")
const displayResult = document.querySelector("#display-math-result")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")

plusButton.addEventListener("click", add)
minusButton.addEventListener("click", subtract)

function add(evt) {
  let result = parseInt(input.value) + parseInt(displayResult.textContent)
  displayResult.textContent = result
}


function subtract(evt) {
  let result = parseInt(displayResult.textContent) - parseInt(input.value)
  displayResult.textContent = result
  negRed()
}

function negRed () {
  if(parseInt(displayResult.textContent) < 0) {
    displayResult.style.color = "red"
  }
}
