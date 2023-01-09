// Add a title attribute to every element that has the important class, stating This is an important item

document.querySelector('.important').setAttribute('title', 'This is an important item');

//Select all the img tags and loop through them. If they have no important class, turn their display property to none

document.querySelector('img.important').style.display = 'none';
