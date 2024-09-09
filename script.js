const mainContainer = document.getElementById("main");

// Login From

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

// Login Page

const loginPage = document.createElement("div");
loginPage.classList.add("login-page");

const loginPageTitle = document.createElement("h1");
loginPageTitle.classList.add("login-page__title");
loginPageTitle.innerText = "Logga In";

const loginFormContainer = document.createElement("section");
loginFormContainer.classList.add("login-page__form");

const loginPageHero = document.createElement("section");
loginPageHero.classList.add("login-page__hero");

const heroImage = document.createElement("img");
heroImage.classList.add("login-page__hero-image");
heroImage.setAttribute("src", "images/hero.jpg");

loginFormContainer.appendChild(loginPageTitle);
loginFormContainer.appendChild(formEl);
loginPageHero.appendChild(heroImage);
loginPage.appendChild(loginFormContainer);
loginPage.appendChild(loginPageHero);

mainContainer.appendChild(loginPage);
