//Display the document title in the console
console.log(document.title);

//Change the document title to Modifying the DOM
document.title = 'Modifying the DOM';
console.log(document.title);

//Change the background color of the body to hot pink (#FF69B4).
document.body.style.backgroundColor = '#FF69B4';
document.body.style.backgroundColor = '#8108FD'; 

//display all children elements of the <body>
document.querySelectorAll('body *');

//Using the children method and a for ... of  loop, display every children elements
for (let child of document.body.children) { 
    console.log(child.tagName) };