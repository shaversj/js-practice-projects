function addTodoToList(){
    let todo = document.getElementById("new-todo");
    let todoList = document.getElementById("list").innerHTML += ('<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" aria-label="..."> '+todo.value+'</li>');
    todo.value = ""
}

document.getElementById("add-todo-button").onclick = function () {addTodoToList()};