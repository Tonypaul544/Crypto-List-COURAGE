

const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");
const nameBox = document.getElementById("name-box");
let button = document.createElement("button");
let name = nameBox.value;

      
function addTask() {
  //if the input is empty, drop a warning
  if(inputBox.value === '') {
    alert("The both boxes must be filled..!!")
  }
  
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItems.appendChild(li);
  }
  inputBox.value = '';

  if(inputBox.value.contains("t.me/")) {
    alert("Not a telegram link..!!!")
  }
  saveData()

  

}



nameBtn.addEventListener("click", showPlayBtn);
let listline = document.querySelector(".listline")
function showPlayBtn(){

  button.innerHTML = name;
  listItems.appendChild(listline)
}




function saveData() {
  localStorage.setItem("data", listItems.innerHTML)
}
function showTask() {
  listItems.innerHTML = localStorage.getItem("data");
}
// showTask();






//Nav slide section
var gamesSlide = document.querySelector(".gamesSlide");
var AirdropsSlide = document.querySelector(".AirdropsSlide");
var TestnetsSlide = document.querySelector(".TestnetsSlide");

var games = document.querySelector(".games")
var Airdrops = document.querySelector(".Airdrops")
var Testnets = document.querySelector(".Testnets")

var gameForm = document.querySelector(".gameForm");
var airdropForm = document.querySelector(".airdropForm");
var testnetForm = document.querySelector(".testnetForm");

games.addEventListener("click", toGame);
function toGame() {
  gamesSlide.style.display = "block";
  gameForm.style.display = "block";
  AirdropsSlide.style.display = "none";
  airdropForm.style.display = "none";
  TestnetsSlide.style.display = "none";
  testnetForm.style.display = "none";
}

Airdrops.addEventListener("click", toAirdrops);
function toAirdrops() {
  AirdropsSlide.style.display = "block";
  airdropForm.style.display = "block";
  gamesSlide.style.display = "none";
  gameForm.style.display = "none";
  TestnetsSlide.style.display = "none";
  testnetForm.style.display = "none";
}

Testnets.addEventListener("click", toTestnets);
function toTestnets() {
  TestnetsSlide.style.display = "block";
  testnetForm.style.display = "block";
  AirdropsSlide.style.display = "none";
  airdropForm.style.display = "none";
  gamesSlide.style.display = "none";
  gameForm.style.display = "none";
}



// Trigger the "enter" key
// inputBox.addEventListener("keypress", function(event) {
  //   if (event.key === "Enter") {
    //     if(inputBox.value === '') {
      //       alert("The both boxes can`t be empty..!!")
      //     }
      
      //     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listItems.appendChild(li);
//   }
//   saveData();
//   inputBox.value = "";
// })

var list = document.querySelectorAll(".list");
list.addEventListner("click", cancel);
function cancel(e) {
  list.classList.toggle ("Checked");
}



  // document.addEventListener("keypress", function(e) {
  //   console.log(e);
    
  // })
  
  // function addTask(key) {
  //   if(inputBox.value === '') {
  //     alert("Can`t add empty list!!")
  //   }
  
  //   else {
  //     let li = document.createElement("li");
  //     li.innerHTML = inputBox.value;
  //     listItems.appendChild(li);
  //     let span = document.createElement("span");
  //     span.innerHTML = "\u00d7";
  //     li.appendChild(span);
  //   }
  //   inputBox.value = '';
  // }


  