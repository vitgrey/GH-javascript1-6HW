var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if(ev.target.tagName === "li") {
    ev.target.classList.toggle('checked');
  } else if(ev.target.tagName === "span") {
    var div = ev.target.parentNode;
    div.remove();
  }
}, false);

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('toDoEl').value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if(inputValue == "") {
    alert("enter your task");
  } else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('toDoEl').value = "";
  var span = document.createElement('span');
  var txt = document.createTextNode("delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}