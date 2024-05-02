var getUl = document.querySelector("#ul")


function addTodo() {
    // purpose: jab main btn k upar click karun to value consle main ajae
    // maujood, lamaujood
    // value la maujood
    var getInp = document.querySelector("#inp")
    var createLi = document.createElement("li")
    var liText = document.createTextNode(getInp.value)
    createLi.appendChild(liText)
    getUl.appendChild(createLi)
    getInp.value = ''
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    createLi.appendChild(delBtn)
    delBtn.setAttribute('onclick','delList(this)')

}

function delList(e){
    // list ko delete karna hai
    // list ko lekar aao 
    e.parentNode.remove()

}


function delall(){
    getUl.innerHTML = ''
}