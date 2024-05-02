// function show(){
//    var para = document.querySelectorAll(".abc")
//    console.log(para[1].innerText)
// }

// function showPara(){
//     var getList = document.getElementsByTagName('p')

//     for(var i=0; i<getList.length; i++){
//         getList[i].style.color = 'red'
//     }

//     // getList[0].style.color = 'red'
// }


// function showPara(){
//     var getId = document.querySelector("#abc")
//     var getElements = getId.getElementsByTagName("p")
//     for(var i=0; i<getElements.length; i++){
//         getElements[i].style.backgroundColor = "pink"
//     }
//     console.log(getId)
// }

/*
var randomNum = 20;
var randomNumMinus3 = randomNum - 3
var randomNumPlus3 = randomNum + 3
var userInput = prompt("Guess any number")
var isEven = (userInput % 2) == 0
if (userInput == randomNum){
    alert("You guessed correct number")
} else if(userInput > randomNumMinus3 && userInput < randomNumPlus3){
    var a = randomNum - userInput;
    var message = ""
    if (a < 0){
        message = `please remove ${Math.abs(a)} numbers in your input`
    } else {
        message = `please add ${a} numbers in your input`
    }

    alert(`your ans is nearest to pogrammed num. ${message}`)
} else {
   alert("Incorrcet number try agin")
}

*/




/*

for (var i = 10; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}

*/


var cityToCheck = prompt("tell me your city name")
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = "no";
for (var i = 0; i <= cleanestCities.length; i++); {
    console.log(i)
    debugger;
    if (cityToCheck === cleanestCities[i]) {
        matchFound = "yes";
        alert("It's one of the cleanest cities");
    }
}
// if (matchFound === "no") {
//     alert("It's not on the list");
// }







