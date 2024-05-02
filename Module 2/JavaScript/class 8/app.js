// var arr = ["abc", "def", "ghi", "xyz", "abc"]
// var arr2 = arr.lastIndexOf("abc",3)
// var arr2 = arr.indexOf("abc",1)
// document.write(arr2)

// var str = "Rehman"
// var str2 = str.charAt(0)
// document.write(str2)

// var num = 69.1
// var check = Math.ceil(num)
// var check = Math.round(num)
// document.write(check)
// var num = Math.random() * 20
// document.write(num.toFixed(2))


var heads = prompt("Enter player1 name")
var tails = prompt("Enter player2 name")
var toss = Math.random() * 2
var convert = Math.floor(toss)

if(convert == 0){
    alert(heads+ " heads wins")
}
else{
    alert(tails+ " tails wins")
}