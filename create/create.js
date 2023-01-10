
let names = ["Beatrice", "Claire", "Céline", "David", "Freke", "James", "Jean_Margrethe", "Jitskedh", "Juraj", "Marieke", "Nick Marenich",
 "Niels", "Pious", "RachidM", "Raoul", "sander", "Sarah B", "Seppe Lescur", "Sofie", "Sven S.", "Tesse", "Thomas Keno", "Toon", "Vincent Clarysse", "Ward", "Xander", "Yoursa.B"]

let alreadyDone = [];
let alreadyDoneColors = [];

let colors = [];
while (colors.length < 500) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
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
console.log(randomName(names));
console.log(randomName(colors));



 function addElement() {  
    const newSection = document.createElement("section");
    //console.log(newSection);
    const newPara = document.createElement("p");
    //console.log(newPara);
    const newContent = document.createTextNode(randomName(names));
    newPara.appendChild(newContent);
    newSection.appendChild(newPara);
    const currentArticle = document.querySelector("article");
    //console.log(currentArticle);
    let childEl = document.querySelector('h2');
    //console.log(childEl);
    let parentEl = childEl.parentNode;
    //console.log(parentEl);
    parentEl.insertBefore(newSection, childEl);
    
}

 for (var i = 0; i < names.length; i++) addElement(i);

 for (let i = 0; i < document.querySelectorAll('section').length; i++) {
    
          document.querySelectorAll('section')[i].style.background = randomName(colors);
          document.querySelectorAll('section')[i].style.color = randomName(colors);
        }








 





