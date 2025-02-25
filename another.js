

const nameDiv = document.getElementById("nameDiv");
const profile = document.getElementById("profile-div");
const profilePic = document.getElementById("blank");
const typename = document.getElementById("typename");
const writeName = document.getElementById("writeName");
const saveName = document.getElementById("saveName");
const linkInput = document.getElementById("input-box");
const nameInput = document.getElementById("name-box");
const addBtn = document.getElementById("addBtn");
const listItem = document.getElementById("items");
const listContainer = document.getElementById("listcontainer");
const userName = document.getElementById("userName");
const limitDiv = document.getElementById("limit-div");
let listCount = document.getElementById("list")
let totalList = document.getElementById("totalList")
const hideEdit = document.getElementById("hideEdit");
const theme = document.getElementById("theme");
const change = document.getElementById("change");
const clearAllTasks = document.getElementById("clearAllTasks");
const confirmNo = document.getElementById("confirmNo");
const confirmYes = document.getElementById("confirmYes");
const confirmationdiv = document.getElementById("confirmationdiv");

theme.addEventListener("click", toggleTheme);
function toggleTheme() {
  listContainer.classList.toggle("dark");
  change.classList.toggle("dark");
  // listCount.classList.toggle("dark");
  listItem.classList.toggle("smalldark");
  nameDiv.classList.toggle("dark");
  theme.classList.toggle("color");
  profilePic.classList.toggle("dark");
  saveTasks(); // Save theme after toggling
};

profile.addEventListener("click", editProfile);

function editProfile() {
  nameDiv.style.display = "block";
}

saveName.addEventListener("click", updateProfile);

function updateProfile() {
  if (typename.value === "") {
    alert("Name can't be blank!");
  } else {
    userName.innerHTML = typename.value;
    localStorage.setItem("userName", typename.value); // Save username
    typename.value = "";
    nameDiv.style.display = "none";
    let warning = document.getElementById("popup");
    warning.innerHTML = "Profile saved successfully";
    warning.style.display = "block";

    setTimeout(() => {
      warning.style.display = "none";
    }, 2500);
  }
}

hideEdit.addEventListener("click", () => {
  nameDiv.style.display = "none";

});


// Load username on page load
window.addEventListener('DOMContentLoaded', () => {
  const storedUserName = localStorage.getItem("userName");
  if (storedUserName) {
    userName.innerHTML = storedUserName;
  }
  loadTasks(); // Load tasks on page load
});

function addTask(e) {
  e.preventDefault();

  if (linkInput.value === "" || nameInput.value === "") {
    let warning = document.getElementById("popup");
    warning.innerHTML = "Both fields are required.!";
    warning.style.display = "block";

    setTimeout(() => {
      warning.style.display = "none";
    }, 2500);
  }
  //  else if (storedTasks.lenght > 7) {
  //   alert("hello world.")
  //   // limitDiv.style.display = "block";
  // }


   else {
    const safeName = nameInput.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); // Sanitize input
    const newItem = document.createElement('div'); // Create the div
    newItem.className = "line line1";
    newItem.innerHTML = `
      <li class="list">${safeName}</li>
      <a href="${linkInput.value}" class="nameBtn btn1" target="_blank"> 
        <button>Play</button>
      </a>`;
    listItem.appendChild(newItem); // Append to the list
    nameInput.value = "";
    linkInput.value = "";
    saveTasks(); // Save tasks after adding
  }

  totalList.innerHTML = listCount.length;
  function turnGreen () {
    if (listCount.length > 0) {
      totalList.style.color = "green";
    }
    totalList.style.color = "green";
  }
}

// Event listener for "Add" button clicks
addBtn.addEventListener("click", addTask);

// Event delegation for "Play" button clicks
listItem.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    window.open(event.target.parentNode.href, "_blank");
  }
});

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const taskElements = listItem.querySelectorAll('.line'); // Get all task elements

  taskElements.forEach(taskElement => {
    const name = taskElement.querySelector('.list').textContent;
    const link = taskElement.querySelector('.nameBtn').href;
    tasks.push({ name, link });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); // Store tasks as JSON
}

// Load tasks from localStorage
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    try {
      const tasks = JSON.parse(storedTasks);
      tasks.forEach(task => {
        const newItem = document.createElement('div');
        newItem.className = "line line1";
        newItem.innerHTML = `
          <li class="list">${task.name}</li>
          <a href="${task.link}" class="nameBtn btn1" target="_blank">
            <button>Play</button>
          </a>`;
        listItem.appendChild(newItem);
      });

      totalList.innerHTML = tasks.length
    } catch (error) {
      console.error("Error parsing stored tasks:", error);
      // Handle the error (e.g., clear localStorage or display a message)
      localStorage.removeItem("tasks"); //Example
    }
  }
}

// Clear all tasks
function clearTasks() {
  listItem.innerHTML = "";
  saveTasks(); // Save tasks after clearing
}


// Event listener for "Clear All" button clicks
clearAllTasks.addEventListener("click", () => {
  // alert("Are you sure you want to clear all tasks?");
  confirmationdiv.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
  confirmationdiv.style.display = "none";
  clearTasks()
});

confirmNo.addEventListener("click", () => {
  confirmationdiv.style.display = "none";
});




