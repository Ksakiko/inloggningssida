const mainContainer = document.getElementById("main");

// ----------------------------------------- //

const formEl = document.createElement("form");
formEl.setAttribute("id", "login-form");
formEl.classList.add("form");

const usernameInputEl = document.createElement("input");
usernameInputEl.setAttribute("id", "username");
usernameInputEl.setAttribute("type", "text");
usernameInputEl.setAttribute("name", "username");
usernameInputEl.setAttribute("placeholder", "Användarnamn");
usernameInputEl.classList.add("form-input");

const passwordInputEl = document.createElement("input");
passwordInputEl.setAttribute("id", "password");
passwordInputEl.setAttribute("type", "password");
passwordInputEl.setAttribute("name", "password");
passwordInputEl.setAttribute("placeholder", "Lösenord");
passwordInputEl.classList.add("form-input");

const submitButtonEl = document.createElement("button");
submitButtonEl.setAttribute("type", "submit");
submitButtonEl.setAttribute("form", "login-form");
submitButtonEl.classList.add("form-submit");
submitButtonEl.innerText = "Logga in";

formEl.appendChild(usernameInputEl);
formEl.appendChild(passwordInputEl);
formEl.appendChild(submitButtonEl);
mainContainer.appendChild(formEl);

const registeredUserName = "test";
const registeredPassword = "1234";

const handleSubmit = (event) => {
  event.preventDefault();

  if (
    usernameInputEl.value === registeredUserName &&
    passwordInputEl.value === registeredPassword
  ) {
    console.log("login");
  }
};

submitButtonEl.addEventListener("click", (event) => handleSubmit(event));

// ----------------------------------------- //
