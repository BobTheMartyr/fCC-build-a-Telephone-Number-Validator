const input = document.getElementById('user-input')
const result = document.getElementById('results-div')
const checkButton = document.getElementById('check-btn')
const clearButton = document.getElementById('clear-btn')

const clearForm = () => {
  result.innerHTML = ''
  input.value = ''
}

const verify = () => {
  if( input.value === '' ){
    alert("Please provide a phone number.")
    return
  }
  const regex = /^1?[\(\s]{0,2}\d{3}[\)\s]{0,2}[-\s]?\d{3}[-\s]?\d{4}$/
  let isValid = regex.test(input.value)

  if( input.value.includes('(') && !input.value.includes(')') || !input.value.includes('(') && input.value.includes(')') ){
    isValid = false
  }
  
  result.innerHTML += `<p>${isValid ? "Valid" : "Invalid"} US Number: ${input.value}`
  input.value = ''
  
}

checkButton.addEventListener('click', verify)

clearButton.addEventListener('click', clearForm)



/*
const regex = /1?[\(\s]?[0-9][0-9][0-9][\)\s]?[-\s]?[0-9][0-9][0-9][-\s]?[0-9][0-9][0-9][0-9]/
*/
