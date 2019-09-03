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

let navLink2 = document.querySelector(".nav-link:nth-of-type(2)");
let navLink1 = document.querySelector(".nav-link:nth-of-type(1)");
let h1 = document.querySelector("h1.logo-heading");

// Using `mouseover`
navLink1.addEventListener('mouseover', (e) => {
    e.target.style.color = "teal";
});


// Using `keydown`
document.addEventListener('keydown', (event) => {
    console.log(event.which)
    // e.target.style.opacity = Number("0.5");
});


// Stopping Navigation from propagating
// navLink2.href = "https://evans.github.io/about";
// navLink2.onclick = function (e){
//     e.preventDefault();
//     console.log(`default prevented`);
// }



// Using `load`
// document.addEventListener('load', (e) => {
//     console.log("Load has been used!");
// }) // NOT WORKING