// Selecting elements correctly
const todoInput = document.querySelector(".todoInput"); // Assuming `id="todoInput"`
const addTodo = document.querySelector(".addTodo"); // Assuming `id="addTodo"`
const todoListContainer = document.getElementById("toDoListContainer"); // Assuming `id="toDoListContainer"`

// Function to append a new todo
function appendTodo(todoText) {
    const todoItem = document.createElement("li"); // Create a new <li> element
    todoItem.textContent = todoText; // Set its text content
    todoItem.classList.add("todo-item"); // Optional: Add a class for styling
    todoListContainer.appendChild(todoItem); // Append it to the list
}

// Load todo when the button is clicked
function loadTodo() {
    addTodo.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission (if inside a form)
        const todoText = todoInput.value.trim(); // Get the input value and trim it
        if (todoText) {
            appendTodo(todoText); // Append the todo
            todoInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a todo"); // Handle empty input
        }
    });
}

// Initialize event listeners
loadTodo();
