let count = 0

const counter = () => {

  // Function does this:
  // increment the count 
  count += 1

  // Change the p tag to show the variable count
  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text to the variable count.
  ptag.textContent = count

}

const main = () => {
  // write all my code here inside main



  // When the user clicks the button; 
  // find the button

  const button = document.querySelector('button')
  console.log(button)

  counter()

  // When the button is clicked - call a Function

  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }
}

document.addEventListener('DOMContentLoaded', main)
