const list1 = [
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
]

const list2 =  [
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

let body = document.querySelector('body');
let header = document.createElement('header');
header.classList.add('mainHeader');
let logo = document.createElement('img');
logo.classList.add('logo');
logo.src = 'https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg'
header.append(logo);

let navigation = document.createElement('nav');
header.append(navigation);
let navH1 = document.createElement('h1');
let navParagraph = document.createElement('p');
let contentH1 = document.createTextNode('Spotify Specials');
let contentP1 = document.createTextNode('selected by me');
navH1.append(contentH1);
navParagraph.append(contentP1);
navigation.append(navH1, navParagraph);
body.append(header);




let section = document.createElement('section');
section.classList.add("card-list");
let section2 = document.createElement('section');
section2.classList.add("card-list");
body.append(section, section2);

function addList1() {

    let article = document.createElement('article');
    article.classList.add('card')
    section.append(article);

    let header = document.createElement('header');
    header.classList.add('card-header')
    article.append(header);
    let paragraphHeader = document.createElement('p');
    let h2Header = document.createElement('h2');
    header.append(paragraphHeader, h2Header);
    let releaseContent = document.createTextNode(list1[i].releaseYear);
    let albumContent = document.createTextNode(list1[i].album);
    paragraphHeader.append(releaseContent);
    h2Header.append(albumContent);

    let div1 = document.createElement('div');
    div1.classList.add('card-main');
    article.append(div1);
    let imgLink = document.createElement('a');
    imgLink.classList.add('main-img');
    imgLink.href = '#';
    div1.append(imgLink);
    let imageSpotify = document.createElement('img');
    imageSpotify.src = 'https://e1.pngegg.com/pngimages/479/641/png-clipart-spotify-macos-style-spotify-logo-thumbnail.png'
    imgLink.append(imageSpotify);
    // let imgLink2 = document.createElement('a');
    // imgLink2.classList.add('main-img');
    // imgLink2.setAttribute('id', 'secondImg')
    // imgLink2.href = '#';
    // div1.append(imgLink2);
    // let imageSong = document.createElement('img');
    // imgLink2.append(imageSong);

    let div2 = document.createElement('div');
    div2.classList.add('main-name');
    article.append(div2);
    let paragraphName = document.createElement('p');
    let h2Name = document.createElement('h2');
    div2.append(h2Name, paragraphName);
    let songContent = document.createTextNode(list1[i].song);
    let artistContent = document.createTextNode(list1[i].artist);
    paragraphName.append(artistContent);
    h2Name.append(songContent);

    let div3 = document.createElement('div');
    div3.classList.add('genre');
    article.append(div3);
    let paragraphGenre = document.createElement('p');
    div3.append(paragraphGenre);
    let genreContent = document.createTextNode(list1[i].genre);
    paragraphGenre.append(genreContent);

}


function addList2() {

    let article = document.createElement('article');
    article.classList.add('card')
    section2.append(article);

    let header = document.createElement('header');
    header.classList.add('card-header')
    article.append(header);
    let paragraphHeader = document.createElement('p');
    let h2Header = document.createElement('h2');
    header.append(paragraphHeader, h2Header);
    let releaseContent = document.createTextNode(list2[i].releaseYear);
    let albumContent = document.createTextNode(list2[i].album);
    paragraphHeader.append(releaseContent);
    h2Header.append(albumContent);

    let div1 = document.createElement('div');
    div1.classList.add('card-main');
    article.append(div1);
    let imgLink = document.createElement('a');
    imgLink.classList.add('main-img');
    imgLink.href = '#';
    div1.append(imgLink);
    let imageSpotify = document.createElement('img');
    imageSpotify.src = 'https://e1.pngegg.com/pngimages/479/641/png-clipart-spotify-macos-style-spotify-logo-thumbnail.png'
    imgLink.append(imageSpotify);
    // let imgLink2 = document.createElement('a');
    // imgLink2.classList.add('main-img');
    // imgLink2.setAttribute('id', 'secondImg')
    // imgLink2.href = '#';
    // div1.append(imgLink2);
    // let imageSong = document.createElement('img');
    // imgLink2.append(imageSong);

    let div2 = document.createElement('div');
    div2.classList.add('main-name');
    article.append(div2);
    let paragraphName = document.createElement('p');
    let h2Name = document.createElement('h2');
    div2.append(h2Name, paragraphName);
    let songContent = document.createTextNode(list2[i].song);
    let artistContent = document.createTextNode(list2[i].artist);
    paragraphName.append(artistContent);
    h2Name.append(songContent);

    let div3 = document.createElement('div');
    div3.classList.add('genre');
    article.append(div3);
    let paragraphGenre = document.createElement('p');
    div3.append(paragraphGenre);
    let genreContent = document.createTextNode(list2[i].genre);
    paragraphGenre.append(genreContent);

}




for (var i = 0; i < list1.length; i++) addList1(i);
for (var i = 0; i < list1.length; i++) addList2(i);
console.log(document.querySelector('body'))


