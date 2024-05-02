// var sabzi = ["aloo", "piyaaz", "timatar", "Kheera", "Kaddu"]
// for (var i = sabzi.length - 1; i >= 0; i--){
//     document.write(sabzi[i],"<br>")
// }


// for(var i=1; i<= 100; i++){
//     if(i % 2 == 0){
//         document.write(i,"<br>")
//     }
// }

// for(var i=10; i>0; i--){
//     document.write(i,"<br>")
// }


// var arr = [3, 6, 2, 56, 32, 5, 9, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);












var arr = [100, 42, 19, 20];
var largest = arr[0]; 

for(var i = 0; i < arr.length; i++) {
    if (arr[i] > largest){
        largest = arr[i]; // 54
    }
}

document.write("largest number --->", largest)