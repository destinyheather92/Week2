const form = document.getElementById("greet-form");
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  greeting.textContent = `Hello, ${name}!`;
});

// Step 5:
// Comment out event.preventDefault(); (add // in front). Save. Refresh. Type a name. Click Greet me. What happens? Why?
    //When event.preventDefault() is commented out, the form submits and the page reloads, which is the default behavior of a form submission. This prevents us from seeing the greeting message because the page refreshes before it can be displayed.
// Restore event.preventDefault();. Now change greeting.textContent to greeting.innerHTML and the message to <strong>Hello, ${name}!</strong>. Save, refresh, try it. What changed?
    //When we change greeting.textContent to greeting.innerHTML and use <strong> tags, the greeting message is now displayed in bold. This is because innerHTML allows us to include HTML tags in the string, which are then rendered as part of the content. textContent, would treat the tags as plain text and display them as they are without rendering them as HTML.
// With .innerHTML still in place, try entering <em>injected</em> as your name. What does the page show? (This is exactly why .innerHTML is risky for user input.) Switch back to .textContent and try the same input -- now it shows the literal text including the angle brackets.
    //When we enter <em>injected</em> as the name with .innerHTML, the page will render "injected" in italics because the <em> tags are interpreted as HTML. This demonstrates the risk of using .innerHTML with user input.  When we switch back to .textContent and enter the same input, it will display the literal text "<em>injected</em>" without rendering it as HTML. 