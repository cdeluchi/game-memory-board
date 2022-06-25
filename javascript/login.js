console.log("It's Friday then");

const input = document.querySelector(".loginInput");
const button = document.querySelector(".loginButton");
const form = document.querySelector(".loginForm");

const validateInput = ({ target }) => {
  // console.log(target.value.length);
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("Player", input.value);
  window.location = "../pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
