// Your code goes here

let mainNav = document.querySelector(".main-navigation");
let navLinks = document.querySelectorAll("a");
let navLink1 = document.querySelector(".nav-link:nth-of-type(1)");
let navLink2 = document.querySelector(".nav-link:nth-of-type(2)");
let headImage = document.querySelector(".intro img");
let h1 = document.querySelector(".logo-heading");
let textCon = document.querySelector(".text-content");
let textConH2 = document.querySelector(".text-content h2");


// Using `mouseover` -- 1
navLink1.addEventListener('mouseover', (e) => {
    e.target.style.color = "teal";
});

// Using `keydown` -- 2
document.addEventListener('keydown', (event) => {
    console.log(event.which)
});

// Using `load` -- 3
window.addEventListener('load', () => {
    // alert("Document has been loaded!"); // Uncomment this code to test
});

// Using `offline` -- 4
window.onoffline = function(){
    alert(`You have lost internet access!`);
}

// Using `dblclick` -- 5
headImage.ondblclick = function(e){
    e.target.style.display = "none";
}

// Using `resize` -- 6
function navBlack() {
    mainNav.style["background-color"] = "black";
    navLinks.forEach((ele) => {
        ele.style.color = "white";
    })
    h1.style.color = "white";
}
window.addEventListener('resize', navBlack);

// Using `drag / drop` -- 7
var dragged;

headImage.setAttribute("draggable", "true");

headImage.addEventListener('drag', function(e){
  
}, false);

headImage.addEventListener('dragstart', function (e) {
    dragged = e.target;
    console.log(`The header image has been dragged!`);
}, false);


// Using `select` -- 8
textConH2.innerHTML = "Let's Go!<br>";

let textConTextArea = document.createElement("textarea");
textConTextArea.classList.add("homeText");
textConTextArea.innerHTML = "Select Your Text Here!";
textConH2.appendChild(textConTextArea);

let result = document.createElement("p");
result.classList.add("selectedText");
textConH2.appendChild(result);

function textSelection(event) {
    const textLog = document.querySelector('.selectedText');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    textLog.textContent = `You selected: ${selection}`;
    textLog.style["font-family"] = `'Roboto', sans-serif`;
}

let homeText = document.querySelector(".homeText");
homeText.style["font-family"] = `'Roboto', sans-serif`;
homeText.addEventListener('select', textSelection);


// Using `focus` -- 9
homeText.addEventListener("focus", (e) => {
    e.target.style.background = "grey";
})

// Using `` -- 10



//  []`drag / drop`


// Stopping Navigation from propagating
// navLink2.href = "https://evans.github.io/about";
// navLink2.onclick = function (e){
//     e.preventDefault();
//     console.log(`default prevented`);
// }
