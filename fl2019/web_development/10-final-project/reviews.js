var key = "0b072c-53f35c-d2747f-400e18-9e7489";
var api = "https://cse204.work/todos";
var allToDos;


function createToDo() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("toDoList").innerHTML = "";
      var todos = JSON.parse(this.responseText);
      allToDos = todos;

      //sorts todos in ascending order
      todos = todos.sort(function (a, b) {
        return a.created - b.created;
      });

      console.log(todos);

      //loop through everything and make todo items on page
      var i;
      for (i = 0; i < todos.length; ++i) {
        var item = document.createElement("div");

        var toDoText = document.createElement("p");
        toDoText.innerText = todos[i].text;
        toDoText.setAttribute("id", todos[i].text);
        toDoText.setAttribute("api_id", todos[i].id);

        //delete button
        var toDoBtn = document.createElement("button");
        toDoBtn.innerText = "remove comment";
        toDoBtn.setAttribute("id", todos[i].text);
        toDoBtn.setAttribute("api_id", todos[i].id);

        //complete button
        var toDoComp = document.createElement("button");
        toDoComp.innerText = "endorse comment";
        toDoComp.setAttribute("id", todos[i].text);
        toDoComp.setAttribute("api_id", todos[i].id);

        //append all
        item.append(toDoText);
        item.append(toDoBtn);
        item.append(toDoComp);
        item.append(document.createElement("hr"));

        //add todos to page with event listeners
        document.getElementById("toDoList").append(item);
        toDoBtn.addEventListener("click", deleteToDo); //make function
        toDoComp.addEventListener("click", compToDo); //make function

        //todo completed or not
        if (todos[i].completed === true) {
          toDoText.setAttribute("class", "complete"); //complete class strike through in css
          console.log("true");
        } else {
          toDoText.setAttribute("class", "incomplete");
        }
      }
    }
  }
  xhttp.open("GET", api, true);
  xhttp.setRequestHeader("x-api-key", key);
  xhttp.send();
}

function addToDo() {
  if (document.getElementById("userInput").value === null || document.getElementById("userInput").value === "") {
    alert("no input");
  } else {
    console.log("addtodo");

    var xhttp = new XMLHttpRequest();
    var aToDo = document.getElementById("userInput").value;

    var data = {
      text: aToDo
    };

    xhttp.open("POST", api, false); //false?
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", key);
    xhttp.send(JSON.stringify(data));

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        var todo = JSON.parse(this.responseText);
        console.log(todo);
      } else if (this.readyState == 4) {
        console.log(this.responseText);
      }
    };

    document.getElementById("userInput").value = "";
    createToDo();
  }
}

//deleting todos
function deleteToDo() {
  var api_id = event.target.getAttribute("api_id"); //api_id ?
  console.log(api_id);
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      createToDo();
    }
  };

  xhttp.open("DELETE", api + "/" + api_id, true);
  xhttp.setRequestHeader("x-api-key", key);
  xhttp.send();
}

//for completing todos
function compToDo() {
  var api_id = event.target.getAttribute("api_id"); //api_id ?
  console.log(api_id);
  //boolean to check if completed
  var completedd;
  //find the todo with the id we are looking for and negate it
  //quit searching once we have it (break)
  var z;
  for (z = 0; z < allToDos.length; ++z) {
    if (api_id === allToDos[z].id) {
      completedd = !allToDos[z].completed; // mark t or f instead
      console.log(completedd);
      break;
    }
  }
  console.log(completedd);

  var xhttp = new XMLHttpRequest();

  var data = {
    completed: completedd
  };

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      createToDo();
    }
  };

  xhttp.open("PUT", api + "/" + api_id, true); //put not working?
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("x-api-key", key);

  var stringg = JSON.stringify(data);
  xhttp.send(stringg);

  console.log(stringg);
  console.log(allToDos);
}

//to also work when hit enter key
function enter() {
  if (event.which === 13 || event.keyCode === 13) {
    addToDo();
  }
}

document.getElementById("toDoButton").addEventListener("click", addToDo);
document.addEventListener("keydown", enter);



createToDo();
