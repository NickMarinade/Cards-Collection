// Select the last child of the <ol> tag and put it at the beginning of the list

const parentSection = document.querySelector('ol');
const firstChild = parentSection.children[0];
const lastChild = parentSection.children[4];
parentSection.insertBefore(lastChild,firstChild);
console.log(parentSection);



