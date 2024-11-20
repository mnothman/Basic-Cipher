(function() {
    "use strict";

    window.addEventListener("load", init);

    function init() {

      const encryptButton = document.getElementById("encrypt-it");
      encryptButton.addEventListener("click", handleClick);

      const resetButton = document.getElementById("reset");
      resetButton.addEventListener("click", handleReset);
    }
 
    function handleReset() {
        document.getElementById("input-text").value = ""; // Clear input text
        document.getElementById("result").textContent = ""; // Clear result
        console.log("Reset button clicked!");
    }

    function handleClick() {
        const inputText = document.getElementById("input-text").value;
        const encryptedText = shiftCipher(inputText);
        document.getElementById("result").textContent = encryptedText;
        console.log("Text encrypted!");
      }

  /**
   * Basic shift cipher
   * @param {string} text Text to be encrypted.
   * @return {string} The encrypted text after.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= 'a' && char <= 'z') {
        if (char === 'z') {
          result += 'a'; // wrap 'z' to 'a'
        } else {
          result += String.fromCharCode(char.charCodeAt(0) + 1);
        }
      } else {
        result += char;
      }
    }
    return result;
  }
})();
  