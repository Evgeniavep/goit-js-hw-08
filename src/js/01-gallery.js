// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
            return `<a class = "gallery__item"
            href = "${original}">
                <img class = "gallery__image"
            src = "${preview}"
            alt = "${description}" />
                </a>`;
        })
        .join('');
};

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: `alt`,
    captionPosition: "bottom",
    captionDelay: 250,
});