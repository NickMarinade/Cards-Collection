function getHex(){
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  function setBackground(){
    var bgColor = getHex();
    document.body.style.background=bgColor;
  }


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        setBackground();
        //document.querySelector("asd").innerHTML = getHex();
    }
  })