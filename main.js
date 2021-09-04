var leftBtn = document.getElementsByTagName("input")[0]
var topBtn = document.getElementsByTagName("input")[1]
var bottomBtn = document.getElementsByTagName("input")[2]
var rightBtn = document.getElementsByTagName("input")[3]

var img = document.getElementById("img")
var t = 0, l = 0;

img.style.top = t+"px"
img.style.left = l+"px"




leftBtn.addEventListener("click", function(){
    if(l!=0){
        l=l-10
        img.style.left = l+"px"
    }
})

rightBtn.addEventListener("click", function(){
    if(l!=500){
        l=l+10
        img.style.left = l+"px"
        console.log(l)
    }
})
bottomBtn.addEventListener("click",function(){
    if(t!=500){
        t=t+10
        img.style.top = t+"px"
        console.log(t)
    }
})
topBtn.addEventListener("click", function(){
    if(t != 0){
        t=t-10
        img.style.top = t+"px"
    }
})





window.addEventListener("keyup", function(e){

    switch (e.keyCode) {
        case 37: //left
            if(l!=0){
                l=l-10
                img.style.left = l+"px"
            }
            break;
        case 38: // top
            if(t != 0){
                t=t-10
                img.style.top = t+"px"
            }
            break;
        case 39: //right
            if(l!=500){
                l=l+10
                img.style.left = l+"px"
            }
            
            break;
        case 40: // bottom
            if(t != 500){
                t=t+10
                img.style.top = t+"px"
            }
            
            break;
        default:
    }
})

