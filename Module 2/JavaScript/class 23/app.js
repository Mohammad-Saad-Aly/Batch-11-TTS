var arr = [
    {
        p_id : 1,
        p_name : 'iPhone',
        p_model : '14 pro',
        p_img : 'https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy'
    },
    {
        p_id : 2,
        p_name : 'infinix',
        p_model : 'abc',
        p_img : 'https://w7.pngwing.com/pngs/953/609/png-transparent-infinix-note-8i-infinix-note-infinix-phone-thumbnail.png'
    },
    {
        p_id : 3,
        p_name : 'Motorola',
        p_model : 'e6',
        p_img : 'https://www.pakmobizone.pk/wp-content/uploads/2024/02/Motorola-Moto-G84-Marshmallow-Blue-2.png'
    },
]


var getDiv = document.getElementById('show')
function showProducts(){
    for(var i=0; i< arr.length; i++){
        var pid = document.createElement('h1')
        var pidcontent = document.createTextNode(arr[i].p_id)
        pid.appendChild(pidcontent)
        getDiv.appendChild(pid)
    
        var pname = document.createElement('h1')
        var pnamecontent = document.createTextNode(arr[i].p_name)
        pname.appendChild(pnamecontent)
        getDiv.appendChild(pname)

        var pmodel = document.createElement('h1')
        var pmodelcontent = document.createTextNode(arr[i].p_model)
        pmodel.appendChild(pmodelcontent)
        getDiv.appendChild(pmodel)

        var pimg = document.createElement('img')
        pimg.src = arr[i].p_img
        getDiv.appendChild(pimg)
        pimg.setAttribute('class','img')
    }
}






// document.write(arr)
// document.write(arr[1].p_name)
