  function addTask() {
    var ul = document.getElementById("list-container");
    var inputBox = document.getElementById("input-box");
    var taskText = inputBox.value;
    var taskTextNode = document.createTextNode(taskText);
  
    if (taskText.trim() === "") {
      return;
    }
  
    var li = document.createElement("li");
    var iconCircle = document.createElement("i");
    var iconDelete = document.createElement("i");

    li.className = "added";

    iconCircle.className = "fa-regular fa-circle";
    iconCircle.setAttribute("onclick", "toggleTaskStatus(this)");

    iconDelete.className = "fa-solid fa-trash";
    iconDelete.setAttribute("onclick", "toggleTaskDelete(this)");
  
    li.appendChild(iconCircle);
    li.appendChild(taskTextNode);
    li.appendChild(iconDelete);
  
  
    ul.appendChild(li);
  
    inputBox.value = "";
    saveData()
  }
  
  
  function toggleTaskStatus(iconElement) {
    var liElement = iconElement.parentElement;
    
    if (liElement.className === "added") {
      liElement.className = "done";
      iconElement.className = "fa-solid fa-circle-check"
      saveData()
    } 
    else {
      liElement.className = "added";
      iconElement.className = "fa-regular fa-circle"
      saveData()
    }
  }

  function saveData() {
    var listContainer = document.getElementById("list-container");
    localStorage.setItem("data", listContainer.innerHTML);
  }
  
  function showData() {
    var listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data");
    
  }

  function toggleTaskDelete(iconElement) {
    var liElement = iconElement.parentElement;

    liElement.remove();
    saveData();
  }

  function deleteAllTasks() {
    localStorage.removeItem("data")
    showData()
  }

  function deleteCompletedTasks() {
    var completedTasks = document.getElementsByClassName("done");
    
    while (completedTasks.length > 0) {
      completedTasks[0].remove();
    }
    saveData();
  }

  showData();
  
