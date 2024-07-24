// SELECTORS 
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button ')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
// const todoDiv = document.querySelector('.todo')


// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//FUNCTIONS 
function addTodo(event){
    console.log("hello")
    // PREVENT FORM FROM SUBMITTING
    event.preventDefault();

    // todo list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")

    //data of list 
    const newTodo = document.createElement('li');
    newTodo.classList.add("todo-item")
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo)

    // check mark button 

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-square-check fa-lg"></i>'

    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    // trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash fa-lg"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)

    //clear todo input value 
    todoInput.value= "";
}

 // FUNCTION
function deleteCheck(e) {
    const item = e.target;
///delete item 
    if (item.classList[0] === "trash-btn" ){
        const todo = item.parentElement;
        // animation 
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        // todo.remove();
    }


////check mark 
if (item.classList[0] === "complete-btn" ){
    const todo = item.parentElement;
    console.log("klgjsnkjn")
    todo.classList.toggle('completed');
}
}

function filterTodo(e){
    const todos =   todoList.childNodes;
    console.log('atharav')
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex" ;
                break
        }
    })
}

