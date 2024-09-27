const root = document.getElementById("root");
const usernameInputEl = document.createElement("input"); // <= | These two variables are placed outside of functions   |
const passwordInputEl = document.createElement("input"); // <= | so that the functions can have access to them.         |

let isLoggedIn = false; // Status for user is logged in
let isLoginPage = false; // Status for if Login Page is selected/displayed or not

let userName;

const getUsers = async () => {
  const response = await fetch(
    "https://ksakiko.github.io/inloggningssida/user.json"
  );
  const data = await response.json();
  return data;
};

const handleLogin = () => {
  // Set given username to localStorage and render Welcome Page
  localStorage.setItem("username", usernameInputEl.value);
  createWelcomePage();
};

const handleLogout = () => {
  // Remove stored username from localStorage and render Login Page
  localStorage.removeItem("username");
  createLoginPage();
};

const returnToLogin = () => {
  // Render Login Page
  createLoginPage();
};

const handleSubmit = async (event) => {
  // Prevent the form(form tag) from submitting, which is the default action of form tag
  event.preventDefault();

  const registeredUsers = await getUsers();
  const match = registeredUsers.filter((user) => {
    return (
      user.userLoginName === usernameInputEl.value &&
      user.userPassword === passwordInputEl.value
    );
  });

  // If user's input values match to user's registered info, render Welcome Page via handleLogin(), otherwise render Error Page
  if (match) {
    userName = match[0].userName;
    handleLogin();
  } else {
    createErrorPage();
  }
};

// -------------------- Header -------------------- //

const createHeader = () => {
  const headerEl = document.createElement("header");

  // If Login Page is selected/rendered, header gets modified CSS for its design, otherwise normal
  if (isLoginPage) {
    headerEl.classList.add("header");
    headerEl.classList.add("header--login");
  } else {
    headerEl.classList.add("header");
  }

  const navEl = document.createElement("nav");
  navEl.classList.add("nav");

  const logo = document.createElement("span");
  logo.setAttribute("id", "logo");
  logo.innerText = "AnkInc.";

  const headerLogInOutButton = document.createElement("button");

  // Determine menu button's design, text, and function depending on either the user is logged in or not
  if (isLoggedIn) {
    headerLogInOutButton.classList.add("header__logout-button");
    headerLogInOutButton.innerText = "Logga ut";
    headerLogInOutButton.addEventListener("click", handleLogout);
  } else {
    headerLogInOutButton.classList.add("header__login-button");
    headerLogInOutButton.innerText = "Logga in";
    headerLogInOutButton.addEventListener("click", returnToLogin);
  }

  navEl.appendChild(logo);
  navEl.appendChild(headerLogInOutButton);
  headerEl.appendChild(navEl);
  root.insertAdjacentElement("afterbegin", headerEl);
};

// -------------------- Footer -------------------- //

const createFooter = () => {
  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");

  const copyright = document.createElement("div");
  copyright.classList.add("copyright");
  copyright.innerHTML = "Copyright &copy; 2024 AnkInc.";

  const bgCredit = document.createElement("div");
  bgCredit.classList.add("bg-credit");
  bgCredit.innerHTML = `Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a>'`;

  footerEl.appendChild(copyright);
  footerEl.appendChild(bgCredit);

  root.appendChild(footerEl);
};

// -------------------- Login Page -------------------- //

const createLoginPage = () => {
  isLoggedIn = false;
  isLoginPage = true;

  root.innerHTML = "";

  createHeader();

  const loginPage = document.createElement("main");
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

  loginFormContainer.appendChild(loginPageTitle);
  loginFormContainer.appendChild(formEl);
  loginPageHero.appendChild(heroImageEl);
  loginPage.appendChild(loginFormContainer);
  loginPage.appendChild(loginPageHero);

  root.appendChild(loginPage);
};

// -------------------- Welcome Page -------------------- //

const createWelcomePage = () => {
  isLoggedIn = true;
  isLoginPage = false;
  root.innerHTML = "";
  const welcomePage = document.createElement("main");
  welcomePage.classList.add("welcome-page");

  const welcomePageInner = document.createElement("div");
  welcomePageInner.classList.add("welcome-page__inner");
  const welcomePageTitle = document.createElement("h1");
  welcomePageTitle.classList.add("welcome-page__title");

  welcomePageTitle.innerText = "Välkommen, " + userName + "!";

  const welcomePageContents = document.createElement("div");
  welcomePageContents.classList.add("welcome-page__contents");

  const welcomePageMessage = document.createElement("section");
  welcomePageMessage.classList.add("welcome-page__message");
  welcomePageMessage.innerHTML = "<p>Här välkomnas du av en snäll anka!</p>";

  const welcomePageProfile = document.createElement("section");
  welcomePageProfile.classList.add("welcome-page__profile");
  welcomePageProfile.innerHTML =
    "<img src='images/welcome.jpg' alt='En ankunge sitter på marken' class='welcome-page__profile-image' />";

  const bgElement = document.createElement("div");
  bgElement.classList.add("bgElement");

  welcomePageContents.appendChild(welcomePageMessage);
  welcomePageContents.appendChild(welcomePageProfile);
  welcomePageInner.appendChild(welcomePageTitle);
  welcomePageInner.appendChild(welcomePageContents);
  welcomePage.appendChild(welcomePageInner);
  welcomePage.appendChild(bgElement);

  root.appendChild(welcomePage);
  createHeader();
  createFooter();
};

// -------------------- Error Page -------------------- //

const createErrorPage = () => {
  isLoggedIn = false;
  isLoginPage = false;

  root.innerHTML = "";

  const errorPage = document.createElement("main");
  errorPage.classList.add("error-page");

  createHeader();

  const errorPageInner = document.createElement("div");
  errorPageInner.classList.add("error-page__inner");

  const errorPageContents = document.createElement("section");
  errorPageContents.classList.add("error-page__contents");

  const errorPageImage = document.createElement("figure");
  errorPageImage.classList.add("error-page__image-container");
  errorPageImage.innerHTML =
    "<img src='images/error.jpg' alt='Många gummiankor' class='error-page__image' />";

  const errorPageTitle = document.createElement("h1");
  errorPageTitle.classList.add("error-page__title");
  errorPageTitle.innerText = "Något gick fel...";

  const errorPageDescription = document.createElement("p");
  errorPageDescription.classList.add("error-page__description");
  errorPageDescription.innerText = "Dina uppgifter är felaktiga.";

  const errorPageReturnButton = document.createElement("button");
  errorPageReturnButton.classList.add("error-page__return-button");
  errorPageReturnButton.innerText = "Försöka logga in igen";
  errorPageReturnButton.addEventListener("click", returnToLogin);

  errorPageContents.appendChild(errorPageTitle);
  errorPageContents.appendChild(errorPageDescription);
  errorPageContents.appendChild(errorPageReturnButton);

  errorPageInner.appendChild(errorPageContents);
  errorPageInner.appendChild(errorPageImage);
  errorPage.appendChild(errorPageInner);

  root.appendChild(errorPage);
  createFooter();
};

// Render a selected page
const renderPage = async () => {
  // Get stored username info from localStorage
  const storedUserInfo = localStorage.getItem("username");

  const registeredUsers = await getUsers();
  const match = registeredUsers.filter((user) => {
    return user.userLoginName === storedUserInfo;
  });

  if (match) {
    userName = match[0].userName;
    createWelcomePage();
  } else {
    createLoginPage();
  }
};

renderPage();
