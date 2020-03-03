// Add new task 

function addNewTask() {
    // create the new  li Element which will apand in ul in html
    var li = document.createElement("li");
    // get the input value of user
    var inputValue = document.getElementById("taskInput").value;
    // create the node to append in li and after that append in ul
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        // when input value is empty
        alert("Please Enter the task name or title");
    } else {
        // add task title to list 
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("taskInput").value = "";
// add cencle button in end of list item 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
//    add  close class for styling
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// after  Click on a close button  hide that item from  list 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


