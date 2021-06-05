const result = document.querySelector(".result-container");
const button = document.querySelector(".check-btn");

function checkPalyndrome() {
  //Selects the input from the user and stores it to be checked
  const inputValue = document.querySelector("input").value;
  //Divides the word and is pushed into an array
  const wordArray = inputValue.split("");
  console.log("This is the array", wordArray);
  //Reverses the array
  const reverseArray = wordArray.reverse();
  console.log("This is the array backwards", reverseArray);
  //Joins the reversed array to create the backwards word
  const joinReversed = reverseArray.join("");
  console.log("This is the word backwards:", joinReversed);
  //Checks of the input is blank and if not prints a result
  inputValue === ""
    ? (result.textContent = "Please enter a word")
    : joinReversed === inputValue
    ? (result.textContent = `The word "${inputValue}" is a palyndrome`)
    : (result.textContent = `The word "${inputValue}" is not a palyndrome`);
}

button.addEventListener("click", checkPalyndrome);
