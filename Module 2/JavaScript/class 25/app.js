// localStorage.setItem('name','Saad')

// sessionStorage.setItem('email','abc@gmail.com')


function signup(){
    var getEmail = document.getElementById('semail')
    var getPass = document.getElementById('spass')
    localStorage.setItem('email',getEmail.value)
    localStorage.setItem('Password',getPass.value)
    alert('user register successfully....')
    location.href = 'signin.html'

}


function signin(){
    var getEmail = document.getElementById('lemail')
    var getPass = document.getElementById('lpass')
    if(localStorage.getItem('email') == getEmail.value && localStorage.getItem('Password') == getPass.value){
        alert('user login successful')
        location.href = 'welcome.html'
    }
    else{
        alert('not successful')
    }


}