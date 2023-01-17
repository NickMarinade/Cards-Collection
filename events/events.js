let wrapperSection = document.querySelector('.displayedsquare-wrapper');
let logUl = document.querySelector('ul');

const actionSquare = document.querySelector('.actionsquare');

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //debugger;
  
  if (e.target.classList[1] === 'green') {
    let newGreen = document.createElement('div');
    let greenLog = document.createElement('li');
    greenLog.append(getElapsedTime(), ', Green');
    logUl.append(greenLog);
    newGreen.classList.add('green');
    newGreen.classList.add('displayedsquare');
    wrapperSection.append(newGreen);

  } else if (e.target.classList[1] === 'violet') {
    let newViolet = document.createElement('div');
    let violetLog = document.createElement('li');
    violetLog.append(getElapsedTime(), ', Violet');
    logUl.append(violetLog);
    newViolet.classList.add('violet');
    newViolet.classList.add('displayedsquare');
    wrapperSection.append(newViolet);

  } else if (e.target.classList[1] === 'orange') {
    let newOrange = document.createElement('div');
    let orangeLog = document.createElement('li');
    orangeLog.append(getElapsedTime(), ', Orange');
    logUl.append(orangeLog);
    newOrange.classList.add('orange');
    newOrange.classList.add('displayedsquare');
    wrapperSection.append(newOrange);

  } else {
    console.error('error');
  }

};

const showAlert = (e) => {
  if (e.target.classList[0] === 'green') {
    alert('This box is green');
  
  } else if (e.target.classList[0] === 'violet') {
    alert('This box is violet');
  
  } else if (e.target.classList[0] === 'orange') {
    alert('This box is orange');
  
  } else {
    console.error('error');
  }
};


function getHex(){
  return '#' + Math.random().toString(16).slice(2, 8);
};

function setBackground(){
  var bgColor = getHex();
  document.body.style.background=bgColor;
};










