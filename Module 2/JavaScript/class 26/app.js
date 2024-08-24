// let obj = {
//     abc: "12345"
// }

// let obj = new Object()
// obj.name = "smit"
// obj.age = 100
// obj.arr = ["abc", "def"]

// let getDiv = document.getElementById('objects')

// for(let key in obj){
//     getDiv.innerHTML += `<div> ${key} : ${obj[key]}</div>`
// }

// let getBtn = document.getElementById('btn')
// getBtn.addEventListener('click',()=>{
//     for(let key in obj){
//         delete obj[key]
//     }
//     getDiv.innerHTML = ''
//     console.log(obj)
// })
// delete obj
// for(let key in obj){
//     delete obj[key]
// }
// console.log(obj)

// let getBtn = document.getElementById('btn')
// document.body.addEventListener('keydown',(e)=>{
//     if(e.key === "Enter"){
//         let email = document.getElementById('email').value
//         let password = document.getElementById('password').value
//         let username = document.getElementById('username').value
//         console.log( username, email, password)
//     }
// })


let btn = document.getElementById('btn')

btn.addEventListener('keydown', (e)=>{
    let getFile = document.getElementById('vibes')
    console.log(getFile.files[0].name)
    if(e.key === "ArrowRight"){
        let getImg = document.getElementById('img')
        getImg.src = URL.createObjectURL(getFile.files[0]) 
        getImg.className = 'abc'
    }



})












