// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", openModalHandler);

const imageList = galleryItems.map(galleryItem => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
       <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>
 </li>`

}).join("");

ulEl.insertAdjacentHTML("beforeend", imageList);

function openModalHandler(event) {
event.preventDefault();
const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
 captionPosition: 'bottom', 
captionDelay: 250,
});
lightBox.on('show.simpleLightbox', function () {})
}