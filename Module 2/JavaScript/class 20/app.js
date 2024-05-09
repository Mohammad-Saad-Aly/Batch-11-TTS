// var obj = {
//     studName : "Ali",
//     studRoll: 12,
//     abc: 12.90,
//     bool: false,
//     arr: []
// arr: ["swimming","reading","cricket"]
// }


// obj.arr[0] = "naveed bhai"

// document.write(obj.arr)

// document.write(obj)


var carObj = {
    carName: "civic",
    carModel: "RS 2023",
    carColor: "black",
    carArray: ["4 paiye", "engine VIP", "CPLC main awaaz"]
}


for(var value in carObj){
    if(value == "carArray"){
        for(var i=0; i<carObj.carArray.length; i++){
            document.write(carObj.carArray[i]+"<br>")
        }
    }
    else{
        document.write(carObj[value]  +"<br>")
    }
}