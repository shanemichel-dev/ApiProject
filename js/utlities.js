// utility functions

function setElText(el, text){
    el.innerText = text;
}

function setImage(imgEl, src){
    imgEl.setAttribute("src", src);
}

function setInnerHtml(el, htmlString) {
    el.innerHTML = htmlString;
}

export {setElText, setImage, setInnerHtml}