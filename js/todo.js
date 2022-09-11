// todolist 구현
const todoListFormEl = document.querySelector(".todo-list__submit-form");
let todos = JSON.parse(myStorage.getItem("todos"));
if (todos === null) {
  todos = [];
}
todos.map((todo) => {
  const { text, id } = todo;
  drawItem(text, id);
});

todoListFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEl = todoListFormEl.querySelector("input");
  const text = inputEl.value;
  const id = new Date().getTime();
  drawItem(text, id);
  todos.push({
    id: id,
    text: text,
  });
  myStorage.setItem("todos", JSON.stringify(todos));
  inputEl.value = "";
});

function drawItem(item, id) {
  const todoListEl = document.querySelector(".todo-list__list");

  const itemEl = document.createElement("li");
  itemEl.className = "todo-list__item";
  itemEl.id = id;

  const itemContentEl = document.createElement("div");
  itemContentEl.className = "todo-list__item__contents";
  itemContentEl.addEventListener("click", (e) => {
    itemContentEl.classList.toggle("checked");
    const icon = contents.querySelector("i");
    icon.classList.toggle("fa-square");
  });

  const checkIconEl = document.createElement("i");
  checkIconEl.className = "fa-regular fa-square-check fa-square";
  itemContentEl.appendChild(checkIconEl);

  const itemTextEl = document.createElement("span");
  itemTextEl.className = "todo-list__item__text";
  itemTextEl.innerText = item;
  itemContentEl.appendChild(itemTextEl);

  const itemRemBtn = document.createElement("i");
  itemRemBtn.className = "fa-solid fa-circle-minus todo-remove";
  itemRemBtn.addEventListener("click", (e) => {
    const targetEl = e.target.parentNode;
    todoListEl.removeChild(targetEl);
    todos = todos.filter((todo) => {
      return todo.id !== parseInt(targetEl.id);
    });
    console.log(todos);
    myStorage.setItem("todos", JSON.stringify(todos));
  });

  itemEl.appendChild(itemContentEl);
  itemEl.appendChild(itemRemBtn);
  todoListEl.appendChild(itemEl);
}
