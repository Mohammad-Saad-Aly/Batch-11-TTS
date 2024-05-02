// var arr = []
// var userInp = +prompt("Enter value")
// for (var i = 0; i < userInp; i++) {
//     arr[i] = prompt("Jo bhi value")
// }
// document.write(arr)

// var cities = ["karachi", "lahore", "islamabad", "multan", "peshawar"]
// var userInp = prompt("Enter city name")
// var match = false

// for(var i=0; i<cities.length; i++){
//     if(cities[i] == userInp){
//         match = true
//         alert("City found")
//         break
//     }   
// }
// if(match == false){
//     alert("city not found")
// }

// for(var i=0; i<=10; i++){
//     if(i == 5){
//         continue
//     }
//     document.write(i)
// }


// var cars = ["Bmw", "Audi", "Mehran", "Alto", "Fx"]
// var userInp = prompt("Enter car what you want ?")
// var match = "no"

// var firstAlpha = userInp.slice(0,1).toUpperCase()
// var baqiAplha = userInp.slice(1).toLowerCase()
// var merge = firstAlpha + baqiAplha

// for(var i=0; i<cars.length; i++){
//     if(merge == cars[i]){
//         match = "yes"
//         alert(merge+ " car avaliable")
//         break
//     }
// }
// if(match == "no"){
//     alert(merge+ " car not available")
// }


// var str = prompt("Enter any word")
// var firstAlpha = str.slice(0,1).toUpperCase()
// var baqiAplha = str.slice(1).toLowerCase()
// var merge = firstAlpha+ baqiAplha
// document.write(merge)


// for loops nested.

// var arr = ["Saylani", "SMIT", "Bahadurabad"]

// var arr2 = ["abc", "def"]

// for(var i=0; i< arr.length; i++){
//     for(var j=0; j < arr2.length; j++){
//         document.write(arr[i] + "  " + arr2[j] + "<br>")
//     }
// }



// saylani abc
// saylani def

// SMIT abc
// SMIT def

// Bahadurabad abc
// Bahadurabad def



// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]+ " "+ arr2+"<br>")
// }

for (var i = 1; i <= 100; i = i + 10) {
    for (var j = i; j < i + 10; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
}
















