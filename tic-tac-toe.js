// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function topLeft(){
  var myShape = document.createElementNS(namespace, "circle")
  myShape.setAttribute("cx", 45)
  myShape.setAttribute("cy", 45)
  myShape.setAttribute("r", 30)
  myShape.setAttribute("fill", "white")
  var  canvas = document.getElementById("game-board")
  canvas.appendChild(myShape)
}
 
