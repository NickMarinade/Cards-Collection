// Select the last child of the <ol> tag and put it at the beginning of the list

const parentSection = document.querySelector('ol');
const firstChild = parentSection.children[0];
const lastChild = parentSection.children[4];
parentSection.insertBefore(lastChild,firstChild);
//console.log(parentSection);

//Move the <h2> of the third section in the second one and vice-versa

const body = document.querySelector('body');
const main = body.children[1];
//console.log(main);
const thirdSection = main.children[1];
//console.log(thirdSection);
const secondSection = main.children[2];
const h2Third = thirdSection.children[0];
//console.log(h2Third);
const h2Second = secondSection.children[0].children[0];
//console.log(h2Second);
secondSection.append(h2Third);
//console.log(secondSection);
thirdSection.append(h2Second);












