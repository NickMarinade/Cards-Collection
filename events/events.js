const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //debugger;
  const wrapper = document.getElementsByClassName('actionsquare-wrapper');
  const newDiv = document.createElement('div');
  newDiv.classList.add('displayedsquare');
  
  const actionSquare = document.getElementsByClassName('actionsquare');
  
  if (e.target.classList[1] === 'green') {
    console.log('green');
  } else if(e.target.classList[1] === 'violet') {
    console.log('violet')
  } else{
    console.log('orange')
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



