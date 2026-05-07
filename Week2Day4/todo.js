// Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

// Current filter
let currentFilter = "all";

// DOM elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");

const allBtn = document.getElementById("all-btn");
const doneBtn = document.getElementById("done-btn");
const notDoneBtn = document.getElementById("not-done-btn");

const list = document.getElementById("task-list");

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {

  // Clear current list
  list.innerHTML = "";

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {

    if (currentFilter === "done") {
      return task.completed;
    }

    if (currentFilter === "not-done") {
      return !task.completed;
    }

    return true;
  });

  // Render each task using map
  filteredTasks.map((task) => {

    // Create list item
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Task text
    const span = document.createElement("span");
    span.textContent = task.text;

    // Add completed style
    span.classList.toggle("completed", task.completed);

    // Toggle completion
    checkbox.addEventListener("change", () => {

      task.completed = checkbox.checked;

      // Update style
      span.classList.toggle("completed", task.completed);

      // Save changes
      saveTasks();

      // Re-render in case filter hides task
      renderTasks();
    });

    // Add elements
    li.appendChild(checkbox);
    li.appendChild(span);

    // Add task to page
    list.appendChild(li);
  });
}

// Add task
addBtn.addEventListener("click", () => {

  const newTask = input.value.trim();

  // Prevent empty tasks
  if (newTask === "") {
    return;
  }

  // Add new task object
  tasks.push({
    text: newTask,
    completed: false
  });

  // Save tasks
  saveTasks();

  // Clear input
  input.value = "";

  // Re-render
  renderTasks();
});

// Clear all tasks
clearBtn.addEventListener("click", () => {

  tasks.length = 0;

  saveTasks();

  renderTasks();
});

// Filter buttons
allBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderTasks();
});

doneBtn.addEventListener("click", () => {
  currentFilter = "done";
  renderTasks();
});

notDoneBtn.addEventListener("click", () => {
  currentFilter = "not-done";
  renderTasks();
});

// Initial render
renderTasks();