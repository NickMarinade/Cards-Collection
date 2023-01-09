// Add a title attribute to every element that has the important class, stating This is an important item

document.querySelector('.important').setAttribute('title', 'This is an important item');

//Select all the img tags and loop through them. If they have no important class, turn their display property to none

document.querySelector('img.important').style.display = 'none';

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
console.log(document.querySelectorAll('p'))

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
const randomColor = Math.floor(Math.random()*16777215).toString(16);

for (let i = 1; i < document.querySelectorAll('p').length; i++) {
    
    document.querySelectorAll('p')[i].style.color = '#' + randomColor;
  }



