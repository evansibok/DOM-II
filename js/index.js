// Your code goes here

//  []`mouseover`
//  []`keydown`
//  []`wheel`
//  []`drag / drop`
//  []`load`
//  []`focus`
//  []`resize`
//  []`scroll`
//  []`select`
//  []`dblclick`

let navLinks = document.querySelectorAll("a");
let navLink1 = document.querySelector(".nav-link:nth-of-type(1)");
let heading = document.querySelector(".logo-heading");

// Using `mouseover`
navLink1.addEventListener('mouseover', (e) => {
    e.target.style.color = "teal";
});


// Using `keydown`
function hideEl() {
    heading.style.display = "none";
}

heading.addEventListener('mouseover', hideEl());

// Stopping Navigation from propagating
navLinks.onclick = function (e){
    e.preventDefault();
}









// Using `load`
// document.addEventListener('load', (e) => {
//     console.log("Load has been used!");
// })