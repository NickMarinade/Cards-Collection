function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();

let names = ["Beatrice", "Claire", "Céline", "David", "Freke", "James", "Jean_Margrethe", "Jitskedh", "Juraj", "Marieke", "Nick Marenich",
 "Niels", "Pious", "RachidM", "Raoul", "sander", "Sarah B", "Seppe Lescur", "Sofie", "Sven S.", "Tesse", "Thomas Keno", "Toon", "Vincent Clarysse", "Ward", "Xander", "Yoursa.B"]

 let name1 = names[Math.floor(Math.random()*names.length)];

// Modify the script.js to create a new <section> with a random background-color for each learner in your group.
// This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

 document.body.onload = addElement;

 function addElement() {  
    const newSection = document.createElement("section");
    console.log(newSection);
    const newContent = document.createTextNode(name1);
    newSection.appendChild(newContent);
    const currentArticle = document.querySelector("article");
    console.log(currentArticle);
    let childEl = document.querySelector('h2');
    console.log(childEl);
    let parentEl = childEl.parentNode;
    console.log(parentEl);
    parentEl.insertBefore(newSection, childEl);


 }






