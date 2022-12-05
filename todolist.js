function ToDoElement(){
  var item = document.getElementById("todoInput")
  //var text = document.createTextNode(item)
  var newItem = document.createElement("li")
 

 var s = item.value
 newItem.innerHTML = s;

 //newItem.appendChild(text)
 document.getElementById("list").appendChild(newItem)

}

function Task(){
  

  const btn = document.getElementById('list');
  btn.addEventListener('click', function Task() {
  
    btn.style.backgroundColor = 'grey';
    btn.style.color = 'white';
  });

}
