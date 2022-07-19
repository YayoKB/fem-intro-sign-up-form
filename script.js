const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".claim-btn");
const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
}

function validateInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (re.test(emailValue) === false) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
}
