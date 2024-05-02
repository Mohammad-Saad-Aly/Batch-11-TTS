// var color = prompt('Enter color name')

// switch (color) {
//     case 'red':
//         document.write('color is red')
//         break;
//     case 'green':
//         document.write('color is green')
//         break
//     case 'yellow':
//         document.write('color is yellow')
//         break
//     default:
//         document.write('invalid color')
// }

// var num = 5
// var user = prompt(' enter any integer')


// setInterval(function(){
//     document.write('smit')
// },1000)

// setTimeout(function(){
//     document.write("saylani")
// },4000)

// var interval;

// var num = 0

// function timer() {
//     num++
//     console.log(num)
// }

// interval = setInterval(timer,1000)


// setTimeout(function(){
//     clearInterval(interval)
// },5000)


// var num = 0
// var interval;

// interval = setInterval(function () {
//     num++
//     console.log(num)
// }, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// }, 5000)


var milisec = 0
var seconds = 0
var minutes = 0
var getHtmlmsec = document.getElementById('msec')
var getHtmlsec = document.getElementById('sec')
var getHtmlmin = document.getElementById('min')

setInterval(function(){
    milisec++
    getHtmlmsec.innerHTML = milisec
    if(milisec >= 100){
        seconds++
        getHtmlsec.innerHTML = seconds
        milisec = 0
    }



},10)







