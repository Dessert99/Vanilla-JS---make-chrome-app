const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function savedToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); //string으로 만들기
}
function deleteToDo(event) {
  const li = event.target.parentElement; // todo 리스트
  li.remove(); //html에서 삭제
  todos = todos.filter((todo) => todo.id != parseInt(li.id));

  savedToDo();
}

function paintToDo(newTodoObj) {
  //여기서 newTodoObj는 object여서 .text, .id를 붙여줘야 함
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id; // id를 넣어서 구분해주기
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //이게 시작.

const savedToDos = localStorage.getItem(TODOS_KEY); //문자열인 채로 가져옴.

//localstorage에 배열 관리하기
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos); // parse로 배열로 가져옴
  todos = parsedToDos; // todos를 let으로 바꾸고 이 코드를 추가함으로서 새로운 요소를 추가해도 이전 목록이 사라지지 않음.
  parsedToDos.forEach(paintToDo); //parse로 가져온 배열의 모든 요소에게 paintTodo 적용
}

/*
localstorage.getItem은 항상 문자열로 데이터를 가져오지만, parse는 JS객체나 배열로 변환할 수 있다.
그러니까 [1,2,3,4] 를 getItem으로 가져오면 "[1,2,3,4]" 인 문자열을 가져오지만, parse는 배열 그대로를 가져온다.

*/
