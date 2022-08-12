var taskInput = document.getElementById("new-task"); 
var addButton = document.getElementById("add-button");
var todoTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks"); 


var createNewTaskElement = function(taskString) {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var deleteButton = document.createElement("button");

	checkBox.type = "checkbox";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	
	return listItem;
}

var addTask = function(e) {
	e.preventDefault()
	var listItem = createNewTaskElement(taskInput.value);
	todoTasksHolder.appendChild(listItem);
	toggleEvents(listItem, taskCompleted);
	taskInput.value = "";
}

var deleteTask = function() {
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

var taskCompleted = function() {
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	toggleEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
	var listItem = this.parentNode;
	todoTasksHolder.appendChild(listItem);
	toggleEvents(listItem, taskCompleted);
}

var toggleEvents = function(listItem, checkBoxEvent) {
	var checkBox = listItem.querySelector("input[type=checkbox]");
	var deleteButton = listItem.querySelector("button.delete");

	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEvent;
}

addButton.addEventListener("click", addTask);
for (var i = 0; i < todoTasksHolder.children.length; i++) {
	toggleEvents(todoTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
	toggleEvents(completedTasksHolder.children[i], taskIncomplete);
}

