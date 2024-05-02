function btnClick(e) {
    document.getElementById('inp').value += e
}

function eq() {
    var getValue = document.getElementById('inp')
    getValue.value = eval(getValue.value)
}

function clearAll(){
    document.getElementById('inp').value = ''
}

function clr(){
    var getValue = document.getElementById('inp')
    getValue.value = getValue.value.slice(0,-1) 
}

// var a = +prompt("Enter starting number ");
// var b = +prompt("Enter ending number ");
// function count(a, b) {
//     for(var i=a; i<=b; i++) {
//        num = i;
//        console.log(num);
//     }
//     // return num;
// }
// // console.log(count(1, 4));
// count(a, b);