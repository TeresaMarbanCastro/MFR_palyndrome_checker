const result = document.querySelector(".result-container");
const button = document.querySelector(".check-btn");

function checkPalyndrome() {
  //Selects the input from the user and stores it to be checked
  const inputValue = document.querySelector("input").value;
  //Splits each word separated with a blank space and creates an array with them
  const splitWords = inputValue.split(" ");
  console.log(splitWords);
  //Joins all words together
  const joinWords = splitWords.join("");
  console.log(joinWords);
  //Separates the whole word letter by letter
  const splitJoined = joinWords.split("");
  console.log(splitJoined);
  //Reverses the whole array
  const reverseJoined = splitJoined.reverse();
  console.log(reverseJoined);
  //Joins the array into one word
  const backwardsWord = reverseJoined.join("");
  console.log(backwardsWord);

  //Checks if the input is blank and if not displays the result
  backwardsWord === ""
    ? (result.textContent = "Please enter a word")
    : backwardsWord === inputValue
    ? (result.textContent = `The word "${inputValue}" is a palyndrome`)
    : (result.textContent = `The word "${inputValue}" is not a palyndrome`);

  //Shorter way that does the same thing :)
  /*const qlq = inputValue.split(" ").join("").split("").reverse().join("");*/
}

button.addEventListener("click", checkPalyndrome);
