//desativar o botão submit até todos os campos estarem preenchidos

// Get a reference to the form and submit button
const form = document.querySelector("form");
const submitButton = document.querySelector("button[type='submit']");

// Disable the submit button by default
submitButton.disabled = true;

// Add an event listener to the form that listens for input change events
form.addEventListener("input", () => {
  // Get a reference to all required inputs
  const requiredInputs = form.querySelectorAll("input[required]");

  // Check if all required inputs have a value
  const allInputsFilled = Array.prototype.every.call(requiredInputs, input => input.value.trim() !== "");

  // Enable or disable the submit button based on whether all required inputs have a value
  submitButton.disabled = !allInputsFilled;
});
