const mainContainer = document.getElementById("main");
const registeredUserName = "test";
const registeredPassword = "1234";

const handleLogout = () => {
  // TODO: Clear localStorage
  showLoginPage();
};

const handleLogin = () => {
  // TODO: Set localStorage
  showWelcomePage();
};

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

submitButtonEl.addEventListener("click", (event) => handleSubmit(event));

formEl.appendChild(usernameInputEl);
formEl.appendChild(passwordInputEl);
formEl.appendChild(submitButtonEl);

const handleSubmit = (event) => {
  event.preventDefault();

  if (
    usernameInputEl.value === registeredUserName &&
    passwordInputEl.value === registeredPassword
  ) {
    handleLogin();
  } else {
    showErrorPage();
  }
};

// Login Page

const showLoginPage = () => {
  mainContainer.innerHTML = "";
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
};

// Welcome Page

const showWelcomePage = () => {
  mainContainer.innerHTML = "";
  const welcomePage = document.createElement("div");
  welcomePage.classList.add("welcome-page");

  const headerEl = document.createElement("header");
  headerEl.classList.add("header");

  const headerLogoutButton = document.createElement("button");
  headerLogoutButton.classList.add("header__logout-button");
  headerLogoutButton.innerText = "Logga ut";
  headerLogoutButton.addEventListener("click", handleLogout);

  const welcomePageInner = document.createElement("section");
  welcomePageInner.classList.add("welcome-page__inner");
  const welcomePageTitle = document.createElement("h1");
  welcomePageTitle.innerText = "Välkommen!";
  welcomePageInner.appendChild(welcomePageTitle);

  headerEl.appendChild(headerLogoutButton);
  welcomePage.appendChild(headerEl);
  welcomePage.appendChild(welcomePageInner);

  mainContainer.appendChild(welcomePage);
};

// Error Page

const showErrorPage = () => {
  mainContainer.innerHTML = "";

  const handleReturnToLogin = () => {
    showLoginPage();
  };

  const errorPage = document.createElement("div");
  errorPage.classList.add("error-page");

  const headerEl = document.createElement("header");
  headerEl.classList.add("header");

  const headerLoginButton = document.createElement("button");
  headerLoginButton.classList.add("header__login-button");
  headerLoginButton.innerText = "Logga in";
  headerLoginButton.addEventListener("click", handleReturnToLogin);

  const errorPageInner = document.createElement("section");
  errorPageInner.classList.add("error-page__inner");

  const errorPageTitle = document.createElement("h1");
  errorPageTitle.classList.add("error-page__title");
  errorPageTitle.innerText = "Något gick fel!";

  const errorPageReturnButton = document.createElement("button");
  errorPageReturnButton.classList.add("error-page__return-button");
  errorPageReturnButton.innerText = "Försöka logga in igen";
  errorPageReturnButton.addEventListener("click", handleReturnToLogin);

  errorPageInner.appendChild(errorPageTitle);
  errorPageInner.appendChild(errorPageReturnButton);

  headerEl.appendChild(headerLoginButton);
  errorPage.appendChild(headerEl);
  errorPage.appendChild(errorPageInner);

  mainContainer.appendChild(errorPage);
};

showLoginPage();
