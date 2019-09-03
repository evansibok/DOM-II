// Your code goes here

//  []`wheel`
//  []`drag / drop`
//  []`focus`
//  []`resize`
//  []`scroll`
//  []`select`

let mainNav = document.querySelector(".main-navigation");
let navLinks = document.querySelectorAll("a");
let navLink1 = document.querySelector(".nav-link:nth-of-type(1)");
let navLink2 = document.querySelector(".nav-link:nth-of-type(2)");
let headImage = document.querySelector(".intro img");
let h1 = document.querySelector(".logo-heading");


// Using `mouseover` 1
navLink1.addEventListener('mouseover', (e) => {
    e.target.style.color = "teal";
});

// Using `keydown` 2
document.addEventListener('keydown', (event) => {
    console.log(event.which)
    // e.target.style.opacity = Number("0.5");
});

// Using `load` 3
window.addEventListener('load', () => {
    console.log("Document has been loaded!");
});

// Using `offline` 4
window.onoffline = function(){
    alert(`You have lost internet access!`);
}

// Using `dblclick` 5
headImage.ondblclick = function(e){
    e.target.style.display = "none";
}

// Using `resize` 6
function navBlack() {
    mainNav.style["background-color"] = "black";
    navLinks.forEach((ele) => {
        ele.style.color = "white";
    })
    h1.style.color = "white";
}
window.addEventListener('resize', navBlack);

// 7



// Stopping Navigation from propagating
// navLink2.href = "https://evans.github.io/about";
// navLink2.onclick = function (e){
//     e.preventDefault();
//     console.log(`default prevented`);
// }



