// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var player = 1
var topleftclicked= false

function topLeft(){
  if(player == 1){
    if(topleftclicked == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 45)
  circle.setAttribute("cy", 45)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "purple")
  var  canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
square1clicked = true
whichplayer = 2
}
}else if (whichplayer == 2){
  if(square1clicked == false){
 var myshape = document.createElementNS(namespace, "rect")
 rect.setAttribute("x", 75)
 rect.setAttribute("y", 50)
 rect.setAttribute("height", 20)
 rect.setAttribute("width",20)
 rect.setAttribute("fill","white")
 rect.setAttribute("opacity",1)
 var canvas = document.getElementById("game-board")
 canvas.appendChild(rect)
  square1clicked = true
 whichplayer = 1
   }
 }
}
var square2clicked = false
function square2(){
  if(whichplayer == 1){
    if(square2clicked == false){
  var myShape = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 45)
  circle.setAttribute("cy", 45)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "purple")
  var  canvas = document.getElementById("game-board")
  canvas.appendChild(myShape)
square2clicked = true
whichplayer = 2
 }
}
else if (whichplayer ==2){
  if(square2clicked == false){
 var myshape = document.createElementNS(namespace, "rect")
 rect.setAttribute("x", 50)
 rect.setAttribute("y", 50)
 rect.setAttribute("height", 20)
 rect.setAttribute("width",20)
 rect.setAttribute("fill","white")
 rect.setAttribute("opacity",1)
 var canvas = document.getElementById("game-board")
 canvas.appendChild(rect)
  square2clicked = true
 whichplayer = 2
   }
 }
}
var square3clicked = false
function square3(){
  if(whichplayer == 1){
    if(square3clicked == false){
  var myShape = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 45)
  circle.setAttribute("cy", 45)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "purple")
  var  canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
square3clicked = true
whichplayer = 2
}
}else if (whichplayer ==2){
  if(square3clicked == false){
 var myshape = document.createElementNS(namespace, "rect")
 rect.setAttribute("x", 50)
 rect.setAttribute("y", 50)
 rect.setAttribute("height", 20)
 rect.setAttribute("width",20)
 rect.setAttribute("fill","white")
 rect.setAttribute("opacity",1)
 var canvas = document.getElementById("game-board")
 canvas.appendChild(rect)
  square3clicked = true
 whichplayer = 2
   }
 }
}
