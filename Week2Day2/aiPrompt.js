const button = document.getElementById("doubleBtn");

    // Add a click event listener to the button
    button.addEventListener("click", function(event) {

      // Prevent default behavior (useful if inside a form to stop page reload)
      event.preventDefault();

      // Get the input element from the DOM
      const input = document.getElementById("numberInput");

      // Get the value entered by the user and convert it to a number
      const value = Number(input.value);

      // Calculate the doubled value
      const doubled = value * 2;

      // Get the paragraph element where the result will be displayed
      const resultParagraph = document.getElementById("result");

      // Update the paragraph text with the result
      resultParagraph.textContent = "Your number doubled is: " + doubled;
    });