/*
This javascript file will create dynamic scrolling that will change the opacity of elements depending on the position of the viewport

Problem: How would am i going to be ableto select each individual project that is displayed on the viewport so that as the user scrolls down 
the project on the upper end of the view port becomes more opaque?
Answer: store the y position of each content onto a stack. The top of the stack being the content on top of the page. Add an even listener so that when
the window is scrolled we check if the position matches with the position of the element on top of the stack. And then we render each pages slowly

Idea: divide the website into multiple view port size pages and as the user scrolls down recenter all projects.
*/
function dynamic_scroll(){
    let bouncingArrow = document.getElementById("bouncing-arrow");
    let intro = document.getElementById("intro");
    let pos = window.scrollY;
    window.addEventListener("scroll",removeElem(bouncingArrow))
}
