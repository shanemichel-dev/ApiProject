import { setElText, setImage, setInnerHtml } from "./utlities.js";

// DOMS

const photoTitle = document.getElementById("photoTitle");
const currentPhoto = document.getElementById("photo");

async function getPhotos() {
    const randomPhotoId = Math.floor(Math.random()*1000 + 1);

    try{
        const result = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomPhotoId}`);
        const json = await result.json();
        const photoAlbum = json;
        setElText(photoTitle, photoAlbum.title);
        setImage(currentPhoto, photoAlbum.url);
    }catch(err){
        console.log(err);
    }
}

export {getPhotos}