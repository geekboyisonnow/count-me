let count = 0

const main = () => {
  // write all my code here inside main

  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text to the variable count.
  ptag.textContent = count

  // When the user clicks the button; 
  // find the button

  const button = document.querySelector('button')
  console.log(button)

  // When the button is clicked - call a Function
  // increment the count 


  // Change the p tag to show the variable count


  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }
}

document.addEventListener('DOMContentLoaded', main)
