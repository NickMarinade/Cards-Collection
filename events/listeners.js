
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        setBackground();
        let spaceLog = document.createElement('li');
        spaceLog.append(getElapsedTime(), ', Space');
        logUl.append(spaceLog);
    }
  });

  const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
};

document.addEventListener('keyup', event => {
    if (event.code === 'KeyL') {
        while (logUl.firstChild) {
            logUl.removeChild(logUl.lastChild);
          }
    };
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'KeyS') {
        while (wrapperSection.firstChild) {
            wrapperSection.removeChild(wrapperSection.lastChild);
          }
    };
  });