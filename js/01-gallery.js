import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.js-gallery');
gallery.addEventListener('click', onModalOpen);

function createGalleryItems(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt='${description}'
          />
        </a>
      </div>`,
    )
    .join('');
}
const galleryImages = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryImages);

function onModalOpen(e) {
  e.preventDefault();

  const url = getImageUrl(e.target);

  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">`);

  instance.show(() => {
    window.addEventListener('keydown', onEscPress);
  });

  function onEscPress(e) {
    if (e.key === 'Escape') {
      instance.close(() => {
        window.removeEventListener('keydown', onEscPress);
        // я сняла слушателя события, но он почемуто в событие Escape считает закрытия по клику мышкой О_о. Не понимаю почему
        console.log(e.key);
      });
    }
  }
}

function getImageUrl(image) {
  return image.dataset.source;
}
