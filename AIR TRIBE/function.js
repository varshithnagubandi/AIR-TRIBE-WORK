function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value;
  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  var textNode = document.createTextNode(taskText);
  li.appendChild(textNode);
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };
  var completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function () {
    li.style.textDecoration = "line-through";
  };
  li.appendChild(deleteButton);
  li.appendChild(completeButton);
  taskList.appendChild(li);
  input.value = "";
}
