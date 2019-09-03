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

let navLink2 = document.querySelector(".nav-link:nth-of-type(1)");

// Using `mouseover`
navLink2.addEventListener('mouseover', (e) => {
    e.target.style.color = "teal";
});









// Using `load`
// document.addEventListener('load', (e) => {
//     console.log("Load has been used!");
// })