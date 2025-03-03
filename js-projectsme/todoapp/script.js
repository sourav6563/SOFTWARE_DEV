const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let clearbutton = document.querySelector(".clear-button");

function addTask() {
  if (inputbox.value === "") {
    alert(`You must write something!`);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}

inputbox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
  savedata();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showdata() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showdata();
function clearAll() {
  listContainer.innerHTML = "";
  localStorage.removeItem("data");
}
