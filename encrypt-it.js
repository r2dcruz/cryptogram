/*
  Romaine De La Cruz
  assignment 6

 * Starter file 
 */

// part I: Write JavaScript testing code that logs a message to the console
console.log("Window loaded!");

(function() {
  "use strict";

  // function handleClick() {
  //   console.log("Button clicked!");
  // }

  // function resetClick() {
  //   console.log("Reset clicked!");
  // }
  
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    
    // calling encrypt button
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    // calling reset button
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetClick);

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  // cipher example
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  // reset function
  function resetClick() {
    console.log("Reset clicked!");

    // reset the input field
    const inputText = document.getElementById("input-text");
    inputText.value = "";
    // const inputText = document.getElementById("input-text").value;
    // const reset = document.getElementById("input-text").innerHTML;

    // reset the results field
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";

  }

  // encrypt function
  function handleClick() {
    console.log("Button clicked")
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    const resultElement = document.getElementById("result");
    resultElement.textContent = encryptedText;
    }

})();
