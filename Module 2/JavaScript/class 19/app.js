function addTodo() {
    var inp = document.querySelector("#inp");
    var ul = document.getElementById("ul");

    var createLi = document.createElement("li")
    var liText = document.createTextNode(inp.value);

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("onclick", "delLi(this)")
    delBtn.appendChild(delText);

    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("EDIT");
    editBtn.setAttribute("onclick", "editLi(this)");
    editBtn.appendChild(editTxt);


    createLi.appendChild(liText)
    createLi.appendChild(delBtn)
    createLi.appendChild(editBtn);
    ul.appendChild(createLi)

    inp.value = ""
}

function delLi(e) {
    e.parentElement.remove()
}

function editLi(e) {
    var updValue = prompt("Enter updated value", e.parentNode.firstChild.textContent)

    e.parentNode.firstChild.textContent = updValue;
}

function delAll() {
    var ul = document.getElementById("ul");
    ul.innerHTML = ""
}