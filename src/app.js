import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number =["A","2","3","4","5","6","8","9","10","J","Q","K"]
  let numbercart =number[Math.floor(Math.random()*number.length)]
  
  document.getElementById("center").innerHTML=numbercart
  let pinta = ["♦", "♥", "♠", "♣"]
  let pintacart = pinta[Math.floor(Math.random()*pinta.length)]
  
  document.querySelectorAll(".figura").forEach(figure => figure.innerHTML = pintacart)



  //write your code here
  console.log("Hello Rigo from the console!");
};
