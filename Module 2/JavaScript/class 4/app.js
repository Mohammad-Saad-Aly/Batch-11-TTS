// var arr = [1, 0.1, "saad", true];
//         0,  1,    2,    3
// arr[4] = "huzaifa";


// arr.unshift("sdfhsd")
// arr.shift();

// arr.splice(1, 1);

// arr.splice(2, 0, "ali");
// arr.splice(3, 1, "hsdfsl");

// arr.slice()
// var arr2 = arr.slice(1, 3);
                    // n - 1

// var arr2 = arr.slice(0, 3);

// document.write(arr)
// document.write("<br>",arr2)


// var arr = ["aloo","piyaaz","matar","timatar","abc","def"]
// arr.splice(2,-2)
// document.write(arr)

// var arr1 = arr.slice(1)



// arr.push("keela","saib","phal")

// arr.splice(2,2)

// arr.splice(3,1,"peach")


// arr.splice(0,3)

// arr.splice(2,2,"smit")

// arr.push("kheera","lassan")
// arr.unshift("adrak","kaddu")
// arr.pop()
// arr.pop()
// arr.shift()
// arr.shift()

// document.write(arr, "<br>")

// document.write(arr1)


// array 6 methods

// push("akhir se values daalta hai")
// pop()      akhir se nikalta hai
// shift()    shru se nikalta hai
// unshift("shru se daalta hai")
// slice(startingIndex,n-1) copy karta hai
// splice(startingIndex,how many delete items,"adding new values")

// var str = "my name is khan"
// var str2 = str.slice(0,10)
// document.write(str2)
// document.write(str[4])
// var arr = ["Saad","Ali"]
// document.write(arr[0])


// var str = "PAKISTAN"
// var convert = str.toLowerCase()
// document.write(convert)




var str = "sAYLANI"
// var userInp = prompt("Enter word")
// var firstAplha = userInp[0].toLowerCase()
// var secondAplha = userInp.slice(1).toUpperCase()
// var convert =  firstAplha + secondAplha

// if(convert == str){
//     alert(`han done hai`)
// }
// else{
//     alert(`nikal bhai`)
// }

// Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.

var a = prompt("Enter 1st word")
var b = prompt("Enter 2nd word")

if(a.length == b.length){
    alert("values are equal")
}
else if(a.length > b.length){
    alert("value 1 is greater than value 2")
}

else if(a.length < b.length){
    alert("value 2 is greater than value 1")
}
