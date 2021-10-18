import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.js-gallery');
const galleryImages = createGalleryItems(galleryItems);
gallery.addEventListener('click', onModalOpen);

function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`,
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryImages);

function onModalOpen(e) {
  e.preventDefault();

  const url = getImageUrl(e.target);

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function getImageUrl(image) {
  return image.dataset.source;
}
