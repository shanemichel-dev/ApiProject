// utility functions

function setElText(el, text){
    el.innerText = text;
}

function setImage(imgEl, src){
    imgEl.setAttribute("src", src);
}

export {setElText, setImage}