var myBall = document.createElement("div");
myBall.setAttribute("class","cavo");
document.onmousemove = followMouse;

function followMouse(e){

myBall.style.left = e.clientX + "px";
myBall.style.top = e.clientY + "px";
myBall.style.transition = "all 0.5s linear 0s";
}




document.body.appendChild(myBall);
