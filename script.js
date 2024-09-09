const mainContainer = document.getElementById("main");
let login = false;

// Login From

// const formEl = document.createElement("form");
// formEl.setAttribute("id", "login-form");
// formEl.classList.add("form");

// const usernameInputEl = document.createElement("input");
// usernameInputEl.setAttribute("id", "username");
// usernameInputEl.setAttribute("type", "text");
// usernameInputEl.setAttribute("name", "username");
// usernameInputEl.setAttribute("placeholder", "Användarnamn");
// usernameInputEl.classList.add("form-input");

// const passwordInputEl = document.createElement("input");
// passwordInputEl.setAttribute("id", "password");
// passwordInputEl.setAttribute("type", "password");
// passwordInputEl.setAttribute("name", "password");
// passwordInputEl.setAttribute("placeholder", "Lösenord");
// passwordInputEl.classList.add("form-input");

// const submitButtonEl = document.createElement("button");
// submitButtonEl.setAttribute("type", "submit");
// submitButtonEl.setAttribute("form", "login-form");
// submitButtonEl.classList.add("form-submit");
// submitButtonEl.innerText = "Logga in";

// submitButtonEl.addEventListener("click", (event) => handleSubmit(event));

// formEl.appendChild(usernameInputEl);
// formEl.appendChild(passwordInputEl);
// formEl.appendChild(submitButtonEl);

// const registeredUserName = "test";
// const registeredPassword = "1234";

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (
//     usernameInputEl.value === registeredUserName &&
//     passwordInputEl.value === registeredPassword
//   ) {
//     login = true;
//     console.log("login: ", login);
//   }
// };

// Login Page

// const loginPage = document.createElement("div");
// loginPage.classList.add("login-page");

// const loginPageTitle = document.createElement("h1");
// loginPageTitle.classList.add("login-page__title");
// loginPageTitle.innerText = "Logga In";

// const loginFormContainer = document.createElement("section");
// loginFormContainer.classList.add("login-page__form");

// const loginPageHero = document.createElement("section");
// loginPageHero.classList.add("login-page__hero");

// const heroImage = document.createElement("img");
// heroImage.classList.add("login-page__hero-image");
// heroImage.setAttribute("src", "images/hero.jpg");

// loginFormContainer.appendChild(loginPageTitle);
// loginFormContainer.appendChild(formEl);
// loginPageHero.appendChild(heroImage);
// loginPage.appendChild(loginFormContainer);
// loginPage.appendChild(loginPageHero);

// mainContainer.appendChild(loginPage);

// Welcome Page

// const welcomePage = document.createElement("div");
// welcomePage.classList.add("welcome-page");

// const headerEl = document.createElement("header");
// headerEl.classList.add("header");

// const headerLogInOutButton = document.createElement("button");
// headerLogInOutButton.classList.add("header__logout-button");
// if (login) {
//   headerLogInOutButton.innerText = "Logga ut";
// } else {
//   headerLogInOutButton.innerText = "Logga in";
// }

// const welcomePageInner = document.createElement("section");
// welcomePageInner.classList.add("welcome-page__inner");
// const welcomePageTitle = document.createElement("h1");
// welcomePageTitle.innerText = "Välkommen!";
// welcomePageInner.appendChild(welcomePageTitle);

// headerEl.appendChild(headerLogInOutButton);
// welcomePage.appendChild(headerEl);
// welcomePage.appendChild(welcomePageInner);

// mainContainer.appendChild(welcomePage);

// Error Page

const handleReturnToLogin = () => {
  console.log("Go back to login page");
};

const errorPage = document.createElement("div");
errorPage.classList.add("error-page");

const headerEl = document.createElement("header");
headerEl.classList.add("header");

const headerLogInOutButton = document.createElement("button");
headerLogInOutButton.classList.add("header__logout-button");
if (login) {
  headerLogInOutButton.innerText = "Logga ut";
} else {
  headerLogInOutButton.innerText = "Logga in";
}

const errorPageInner = document.createElement("section");
errorPageInner.classList.add("error-page__inner");

const errorPageTitle = document.createElement("h1");
errorPageTitle.innerText = "Något gick fel!";

const errorPageReturnButton = document.createElement("button");
errorPageReturnButton.classList.add("error-page__return-button");
errorPageReturnButton.innerText = "Försöka logga in igen";
errorPageReturnButton.addEventListener("click", handleReturnToLogin);

errorPageInner.appendChild(errorPageTitle);
errorPageInner.appendChild(errorPageReturnButton);

headerEl.appendChild(headerLogInOutButton);
errorPage.appendChild(headerEl);
errorPage.appendChild(errorPageInner);

mainContainer.appendChild(errorPage);
