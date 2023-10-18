// Step One Select Elements
let input = document.querySelector("input");
let button = document.querySelectorAll("button");
let ansBox = document.querySelector(".ans-box");
// Step Two Convert All Buttons to Array To perfome event
let btnToArr = Array.from(button);
// Step Three Take Empty String;
let string = "";
// Step Four Iterate THe foreach loop with array elements
btnToArr.forEach((currentItem) => {
    // Step Five add Event Listener Onclick 
    currentItem.addEventListener("click", e => {
      // Step Six add the condition if our current element content is equal to = then we perform condition base built-in function eval() its will do everything for us in calculation. 
    if (e.target.innerHTML === "=") {
      string = eval(string);
      ansBox.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
      // input.value = input.value.slice(string,-1);
      // ansBox.value = input.value;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
      ansBox.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
