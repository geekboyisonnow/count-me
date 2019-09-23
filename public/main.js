let count = 0

const counter = () => {

  // Function does this:
  // increment the count 
  count = count + 1

  // Change the p tag to show the variable count
  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text to the variable count.
  ptag.textContent = count

}

const reset = (event) => {
  // Don't do default functionality that this
  // Event would do
  event.preventDefault()

  // Set counter to 0
  count = 0

  // Change the p tag text to the variable count.
  const ptag = document.querySelector('p')
  ptag.textContent = count

}

const main = () => {
  // write all my code here inside main
  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text to what the variable is
  ptag.textContent = count

  // When the button is clicked
  // Find the button

  const button = document.querySelector('button')
  console.log(button)

  // When the button is clicked - call a Function
  // Call the function
  button.addEventListener('click', counter)
  button.addEventListener('contextmenu', reset)

}

document.addEventListener('DOMContentLoaded', main)
