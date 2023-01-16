let wrapperSection = document.querySelector('.displayedsquare-wrapper');

console.log(wrapperSection)

const actionSquare = document.querySelector('.actionsquare');

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const clickOnSquare = (e) => {
  //debugger;
  
  if (e.target.classList[1] === 'green') {
    let newGreen = document.createElement('div');
    newGreen.classList.add('green');
    newGreen.classList.add('displayedsquare');
    wrapperSection.append(newGreen);
    //console.log('green');
  } else if(e.target.classList[1] === 'violet') {
    let newViolet = document.createElement('div');
    newViolet.classList.add('violet');
    newViolet.classList.add('displayedsquare');
    wrapperSection.append(newViolet);
    //console.log('violet')
  } else if (e.target.classList[1] === 'orange') {
    let newOrange = document.createElement('div');
    newOrange.classList.add('orange');
    newOrange.classList.add('displayedsquare');
    wrapperSection.append(newOrange);
    //console.log('orange')
  } else {
    console.error('error');
  }
  // console.log(actionSquare);
  // console.log(e.target.classList[1])
  // console.log(getElapsedTime())
}



const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



// Everytime the user clicks on one of the action squares
//  - Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
//  - Create a new <li> in the log below to state when the action was done



