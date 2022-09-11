// 로그인 기능
const myStorage = window.localStorage;
function greeting() {
  const loginEl = document.querySelector(".login");
  const todoListEl = document.querySelector(".todo-list");
  const userId = myStorage.getItem("userId");
  const usernameEl = document.querySelector(".username");
  loginEl.classList.add("hidden");
  if (userId === null) {
    loginEl.classList.remove("hidden");
  } else {
    loginEl.classList.add("hidden");
    todoListEl.classList.remove("hidden");
    usernameEl.innerText = `Hello, ${userId}!`;
  }
}
greeting();

const loginFormEl = document.querySelector(".login__form");
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginInputEl = document.querySelector(".login__input");
  const userId = loginInputEl.value;
  myStorage.setItem("userId", userId);
  greeting();
});
