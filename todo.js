const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const notCompleted = document.querySelector('.notCompleted');
const completed = document.querySelector('.completed'); // Corrected variable name
const btn = document.getElementById('btn'); // Added missing button element

inputBox.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTask(e);
  }
});

function addTask() { // Corrected function name
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function displayDate() {
  var currentDate = new Date();
  var dateSpan = document.getElementById("date-span");
  dateSpan.textContent = currentDate.toDateString();
}

showTask();
displayDate();