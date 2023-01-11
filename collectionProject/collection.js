const collection = [
    {
        artist: ['Bring Me The Horizon, BABYMETAL'],
        album: 'POST HUMAN: SURVIVAL HORROR',
        song: 'Kingslayer',
        genre: 'Post-Hardcore',
        releaseYear: '2020',   
    },

    {
        artist: ['Worakls, Rusanda Panfili'],
        album: 'Single',
        song: 'Storm',
        genre: 'Deep House',
        releaseYear: '2020',   
    },

    

    {
        artist: 'MIKA',
        album: 'Single',
        song: 'Yo Yo',
        genre: 'POP',
        releaseYear: '2022',   
    },

    {
    artist: 'Arctic Monkeys',
    album: 'Favourite Worst Nightmare',
    song: 'Brainstorm',
    genre: 'Alternative Rock',
    releaseYear: '2007',   
},

{
    artist: 'SiM',
    album: 'Single',
    song: 'The Rumbling',
    genre: 'J-Rock',
    releaseYear: '2022',   
},

{
    artist: 'Mick Gordon',
    album: 'Doom Original Game Soudtrack',
    song: 'Rip & Tear',
    genre: 'Speed Metal',
    releaseYear: '2016',   
},

{
    artist: 'KASAI HARCORES',
    album: 'KASAI HARCORES ALL STAR',
    song: 'CYCLE HIT',
    genre: 'Dance',
    releaseYear: '2017',   
},

{
    artist: 'Avenged Sevenfold',
    album: 'Avenged Sevenfold',
    song: 'Scream',
    genre: 'Rock',
    releaseYear: '2020',   
},

{
    artist: 'AC/DC',
    album: 'Back in Black',
    song: 'Shoot to Thrill',
    genre: 'Rock',
    releaseYear: '1980',   
},

{
    artist: 'Woodkid',
    album: 'Arcane Soundtrack',
    song: 'Guns for Hire',
    genre: 'Neofolk',
    releaseYear: 2021,   
},
]




function addCard() {
    const body = document.querySelector('body');
    //console.log(body);
    const section = document.querySelector('section');
    //console.log(section);
    const newDiv = document.createElement('div');
    section.append(newDiv);
    //console.log(section);
    const newParagraph = document.createElement('p');
    const dateContent = document.createTextNode(collection[i].artist);
    newParagraph.append(dateContent);
    //console.log(newParagraph);
    newDiv.append(newParagraph);
    console.log(newDiv);
    
}


for (var i = 0; i < collection.length; i++) addCard(i);









