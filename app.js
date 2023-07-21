//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
filterOption.addEventListener('click', filtertodo);

//FUNCTIONS
function addTodo (event){
    
    event.preventDefault();
    //create new div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create new li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    if (todoInput.value == ''){
        return;
    }
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);


    //create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    //append to todoList
    todoList.appendChild(todoDiv);
    //clear todoInput
    todoInput.value = "";
}

function deletecheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;

        }
    });
}