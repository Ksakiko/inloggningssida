const root = document.getElementById("root");
const registeredUserName = "test";
const registeredPassword = "1234";
const usernameInputEl = document.createElement("input");
const passwordInputEl = document.createElement("input");
let login = false;

const handleLogin = () => {
  // TODO: Set localStorage
  createWelcomePage();
};

const handleLogout = () => {
  // TODO: Clear localStorage
  createLoginPage();
};

const returnToLogin = () => {
  createLoginPage();
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (
    usernameInputEl.value === registeredUserName &&
    passwordInputEl.value === registeredPassword
  ) {
    handleLogin();
  } else {
    createErrorPage();
  }
};

// ---------- Welcome Page ---------- //

const createHeader = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  const headerLogInOutButton = document.createElement("button");

  if (login) {
    headerLogInOutButton.classList.add("header__logout-button");
    headerLogInOutButton.innerText = "Logga ut";
    headerLogInOutButton.addEventListener("click", handleLogout);
  } else {
    headerLogInOutButton.classList.add("header__login-button");
    headerLogInOutButton.innerText = "Logga in";
    headerLogInOutButton.addEventListener("click", returnToLogin);
  }

  headerEl.appendChild(headerLogInOutButton);
  root.insertAdjacentElement("afterbegin", headerEl);
};

// ---------- Login Page ---------- //

const createLoginPage = () => {
  login = false;
  root.innerHTML = "";
  const loginPage = document.createElement("div");
  loginPage.classList.add("login-page");

  const loginPageTitle = document.createElement("h1");
  loginPageTitle.classList.add("login-page__title");
  loginPageTitle.innerText = "Logga In";

  const loginFormContainer = document.createElement("section");
  loginFormContainer.classList.add("login-page__form");

  const loginPageHero = document.createElement("section");
  loginPageHero.classList.add("login-page__hero");

  const heroImageEl = document.createElement("img");
  heroImageEl.classList.add("login-page__hero-image");
  heroImageEl.setAttribute("src", "images/hero.jpg");
  heroImageEl.setAttribute("alt", "En ankunge simmar");

  const heroOverlay = document.createElement("div");
  heroOverlay.classList.add("login-page__hero-overlay");

  // Create Login From

  const formEl = document.createElement("form");
  formEl.setAttribute("id", "login-form");
  formEl.classList.add("form");

  usernameInputEl.setAttribute("id", "username");
  usernameInputEl.setAttribute("type", "text");
  usernameInputEl.setAttribute("name", "username");
  usernameInputEl.setAttribute("placeholder", "Användarnamn");
  usernameInputEl.classList.add("form-input");

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

  // Append elements

  loginFormContainer.appendChild(loginPageTitle);
  loginFormContainer.appendChild(formEl);
  loginPageHero.appendChild(heroImageEl);
  loginPageHero.appendChild(heroOverlay);
  loginPage.appendChild(loginFormContainer);
  loginPage.appendChild(loginPageHero);

  root.appendChild(loginPage);
};

// ---------- Welcome Page ---------- //

const createWelcomePage = () => {
  login = true;
  root.innerHTML = "";
  const welcomePage = document.createElement("div");
  welcomePage.classList.add("welcome-page");

  // createHeader();

  const welcomePageInner = document.createElement("div");
  welcomePageInner.classList.add("welcome-page__inner");
  const welcomePageTitle = document.createElement("h1");
  welcomePageTitle.classList.add("welcome-page__title");
  welcomePageTitle.innerText = "Välkommen " + usernameInputEl.value + "!";

  const welcomePageContents = document.createElement("div");
  welcomePageContents.classList.add("welcome-page__contents");

  const welcomePageMessage = document.createElement("section");
  welcomePageMessage.classList.add("welcome-page__message");
  welcomePageMessage.innerHTML = "<p>Här välkomnas du!</p>";

  const welcomePageProfile = document.createElement("section");
  welcomePageProfile.classList.add("welcome-page__profile");
  welcomePageProfile.innerHTML =
    "<img src='images/welcome.jpg' alt='En ankunge sitter på marken' class='welcome-page__profile-image' />";

  welcomePageContents.appendChild(welcomePageMessage);
  welcomePageContents.appendChild(welcomePageProfile);
  welcomePageInner.appendChild(welcomePageTitle);
  welcomePageInner.appendChild(welcomePageContents);
  welcomePage.appendChild(welcomePageInner);

  root.appendChild(welcomePage);
  createHeader();
};

// ---------- Error Page ---------- //

const createErrorPage = () => {
  login = false;
  root.innerHTML = "";

  const errorPage = document.createElement("div");
  errorPage.classList.add("error-page");

  createHeader();

  const errorPageInner = document.createElement("div");
  errorPageInner.classList.add("error-page__inner");

  const errorPageTitle = document.createElement("h1");
  errorPageTitle.classList.add("error-page__title");
  errorPageTitle.innerText = "Något gick fel!";

  const errorPageDescription = document.createElement("p");
  errorPageDescription.classList.add("error-page__description");
  errorPageDescription.innerText = "Dina uppgifter är felaktiga.";

  const errorPageReturnButton = document.createElement("button");
  errorPageReturnButton.classList.add("error-page__return-button");
  errorPageReturnButton.innerText = "Försöka logga in igen";
  errorPageReturnButton.addEventListener("click", returnToLogin);

  errorPageInner.appendChild(errorPageTitle);
  errorPageInner.appendChild(errorPageDescription);
  errorPageInner.appendChild(errorPageReturnButton);

  errorPage.appendChild(errorPageInner);

  root.appendChild(errorPage);
};

createLoginPage();
