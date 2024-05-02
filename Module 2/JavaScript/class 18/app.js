// // document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].firstChild.textContent = "hello saad"


// // document.getElementById("getUl").lastChild.textContent = "Saad"

// // console.log(document.getElementById("li3").parentElement)

// var getUl = document.querySelector("#ul")


// function addTodo() {
//     var getInp = document.getElementById("inp")

//     console.log(getInp.value.length);
//     if (getInp.value.length > 6) {

//         var createLi = document.createElement("li")
//         var liText = document.createTextNode(getInp.value)
//         createLi.setAttribute("class", "li")
//         createLi.classList.add("liList")
//         createLi.appendChild(liText)
//         getUl.appendChild(createLi)
//         getInp.value = ""
//         var delBtn = document.createElement('button')
//         var delText = document.createTextNode("DELETE")
//         delBtn.appendChild(delText)
//         createLi.appendChild(delBtn)
//         var editBtn = document.createElement("button")
//         var editText = document.createTextNode("EDIT")
//         editBtn.appendChild(editText)
//         createLi.appendChild(editBtn)
//         delBtn.setAttribute("onclick", "delFunc(this)")
//         editBtn.setAttribute("onclick", "editFunc(this)")
//     }  else {
//         alert("Enter minimum 6 character")
//     }


// }

// function delFunc(e) {
//     e.parentNode.remove()
// }


// function editFunc(e) {

//     var chalayaPrompt = prompt("Enter updated value", e.parentNode.firstChild.textContent)
//     var li = e.parentNode;

//     li.classList.remove("liList");
//     li.classList.add("editTodo");
//      console.log();
//     e.parentNode.firstChild.textContent = chalayaPrompt

// }

// var obj = {
//     name: "Huzaifa",
// }

// document.write(`Name: ${obj.name}`)

// document.write(obj)
// console.log(obj);