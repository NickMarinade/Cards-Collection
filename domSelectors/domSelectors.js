// Add a title attribute to every element that has the important class, stating This is an important item

document.querySelector('.important').setAttribute('title', 'This is an important item');

//Select all the img tags and loop through them. If they have no important class, turn their display property to none

document.querySelector('img.important').style.display = 'none';

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
console.log(document.querySelectorAll('p'))

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
let alreadyDone = [];

let colors = [];
while (colors.length < 500) {
    do {
        var color = Math.floor((Math.random()*16777215));
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + (color.toString(16)).slice(-6));
}
//console.log(colors);




const randomName = (names) => {
  if (alreadyDone.length === 0) {
    for (let i = 0; i < names.length; i++) alreadyDone.push(i);
  }
  let randomNameIndex = Math.floor(Math.random() * alreadyDone.length);
  let indexOfItemInMyNames = alreadyDone[randomNameIndex];
  alreadyDone.splice(randomNameIndex, 1);
  return names[indexOfItemInMyNames];
};

for (let i = 1; i < document.querySelectorAll('p').length; i++) {
    
    document.querySelectorAll('p')[i].style.color =  randomName(colors);
  }



