import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers =["A","2","3","4","5","6","8","9","10","J","Q","K"]
  let pinta = ["♦", "♥", "♠", "♣"]

  let randomNumber =numbers[Math.floor(Math.random()*numbers.length)]
  let randomPinta = pinta[Math.floor(Math.random()*pinta.length)]
  
  const numberElement = document.getElementById("center")
  numberElement.innerHTML=randomNumber
  if (randomPinta == "♦" || randomPinta == "♥") { 
    numberElement.style.color = "red"
  } else { 
    numberElement.style.color = "black"
  }
  document.querySelectorAll(".figura").forEach(figure => {
     figure.innerHTML = randomPinta
     if (randomPinta == "♦" || randomPinta == "♥") { 
      figure.style.color = "red"
    } else { 
      figure.style.color = "black"
    }
    })



  //write your code here
  console.log("Hello Rigo from the console!");
};
