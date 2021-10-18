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

  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
  );

  instance.show(() => {
    window.addEventListener('keydown', onEscPress);
    // console.log('слушатель повешен на клаву');
    window.addEventListener('click', onLightBoxClick);
    // console.log('слушатель повешен на клик по модалке');
  });

  function onLightBoxClick() {
    removeListeners();
  }

  function onEscPress(e) {
    if (e.key === 'Escape') {
      instance.close(() => {
        removeListeners();
      });
    }
  }

  function removeListeners() {
    window.removeEventListener('keydown', onEscPress);
    // console.log('слушатель снят на Escape');
    window.removeEventListener('click', onLightBoxClick);
    // console.log('слушатель снят на клик');
  }
}

function getImageUrl(image) {
  return image.dataset.source;
}
