// redeclarable
// var name1;
// var name1;
// console.log(name1)

// reassignabale
// var fname = "abcd"
// var fname = "xyz"

// var lname = "Saad"
// var lname = "Ali"

// let fname = "Saad"
// let fname = "Ali"

// var fname = 'abcd'
// let fname = 'xyz'
// console.log(fname)
// let fname = 'abc'
// fname = 'xyz'
// console.log(fname)

// const pi = 3.14
// pi = 4.19
// console.log(pi)

// console.log(fname)
// const fname = "abcd"

// var fname = 'abcd'
// console.log(fname)

// const text = "hello world"

// {
//     const text = "hello smit"
//     console.log(text)
// }

// console.log(text)

// function abc(){
//     const text = "hello"
// }

// console.log(text)

var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

var arr = [];

function add() {
  if (inp.value.trim().length == 0) {
    alert("Enter value");
    inp.value = "";
  } else {
    var li = document.createElement("li");
    li.setAttribute("class", "list");
    var litext = document.createTextNode(inp.value);
    li.appendChild(litext);
    ul.appendChild(li);

    var updbtn = document.createElement("i");
    updbtn.setAttribute("class", "fa-solid fa-pencil");
    li.appendChild(updbtn);

    var delbtn = document.createElement("i");
    delbtn.setAttribute("class", "fa-regular fa-trash-can");
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick", "delfunc(this)");

    var obj = {
      list: inp.value,
    };
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    inp.value = "";
  }
}

function cal() {
  var aa = localStorage.getItem("data");
  var bb = JSON.parse(aa);
  bb.map(function (data) {
    var li = document.createElement("li");
    li.setAttribute("class", "list");
    var litext = document.createTextNode(data.list);
    li.appendChild(litext);
    ul.appendChild(li);

    var updbtn = document.createElement("i");
    updbtn.setAttribute("class", "fa-solid fa-pencil");
    li.appendChild(updbtn);
    updbtn.setAttribute("onclick", "updFunc(this)");

    var delbtn = document.createElement("i");
    delbtn.setAttribute("class", "fa-regular fa-trash-can");
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick", "delfunc(this)");
  });
}
if (localStorage.getItem("data")) {
  cal();
}
function delfunc(e) {
  var p = JSON.parse(localStorage.getItem("data"));
  var remdata = p.splice(0, 1);
  localStorage.setItem("data", JSON.stringify(p));
  e.parentNode.remove();
}

function updFunc(e) {
  inp.value = e.parentNode.firstChild.textContent;
  var edit = document.createElement("i");
  edit.setAttribute("class", "fa-solid fa-spinner");
  e.parentNode.appendChild(edit);
  edit.setAttribute("onclick", "ad1(this)");
 
}
function ad1(e) {
  e.parentNode.firstChild.textContent = inp.value;
  e.parentNode.lastChild.remove();
  var updstorage = JSON.parse(localStorage.getItem("data"));
  var updObj = { a: inp.value };
  updstorage.splice(0, 1, updObj);
  localStorage.setItem("data", JSON.stringify(updstorage));
  inp.value = "";

}
if (localStorage.getItem("data")) {
  updstorage();
}
function updstorage() {
  var getUpdStorage = JSON.parse(localStorage.getItem("data"));
  getUpdStorage.map(function (updData) {
    console.log(updData.a);
  });
}
