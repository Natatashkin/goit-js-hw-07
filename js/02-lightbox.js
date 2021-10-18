import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
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
  console.log(e.target);
  openLightbox();
}

function openLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  // перегружаем модалку, чтоб не залипал hover галереии. Стили залипали. С этим костылём не залипает
  lightbox.on('closed.simplelightbox', () => {
    lightbox.refresh();
  });
  // иногда залипала одна из картинок при перелистываниикартинок в модалке. Теперь не залипает
  lightbox.on('change.simplelightbox', () => {
    modal.refresh();
  });
}
