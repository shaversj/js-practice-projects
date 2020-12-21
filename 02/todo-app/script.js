function addTodoToList(){
    let todo = document.getElementById("todo-input-bar");
    let todoList = document.getElementById("todo-list").innerHTML += ('<li><input type="checkbox"> '+todo.value+'</li>');
    todo.value = ""
}

document.getElementById("add-todo-button").onclick = function () {addTodoToList()};