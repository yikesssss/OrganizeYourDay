function ToDoElement(){
  var item = document.getElementById("todoInput")
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
 newItem.appendChild(text)
 document.getElementById("toDolist").appendChild(newItem)
}
