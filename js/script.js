import { getPhotos } from "./getPhotos.js";

const randonPhotoBtn = document.getElementById("randonPhotoBtn");


randonPhotoBtn,addEventListener("click", function() {
    getPhotos();
 });

getPhotos();