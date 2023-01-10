
let names = ["Beatrice", "Claire", "Céline", "David", "Freke", "James", "Jean_Margrethe", "Jitskedh", "Juraj", "Marieke", "Nick Marenich",
 "Niels", "Pious", "RachidM", "Raoul", "sander", "Sarah B", "Seppe Lescur", "Sofie", "Sven S.", "Tesse", "Thomas Keno", "Toon", "Vincent Clarysse", "Ward", "Xander", "Yoursa.B"]

 let name1 = names[Math.floor(Math.random()*names.length)];

// Modify the script.js to create a new <section> with a random background-color for each learner in your group.
// This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

 

 function addElement() {  
    const newSection = document.createElement("section");
    //console.log(newSection);
    const newPara = document.createElement("p");
    //console.log(newPara);
    const newContent = document.createTextNode(name1);
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

 for (var i = 1; i < 8; i++) addElement(i);



 function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //console.log(bgColor);
    for (let i = 0; i < document.querySelectorAll('section').length; i++) {
    
        document.querySelectorAll('section')[i].style.background = bgColor;
      }
     //document.body.style.background = bgColor;
    }
    function random_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        //console.log(bgColor);
    
         //document.body.style.color = bgColor;
         for (let i = 0; i < document.querySelectorAll('section').length; i++) {
    
            document.querySelectorAll('section')[i].style.color = bgColor;
          }
        }
    random_bg_color();
    random_color();
    




 





