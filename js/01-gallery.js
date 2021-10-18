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

// функция хелпер
function getImageUrl(image) {
  return image.dataset.source;
}

// вариант с модалкой  - 1 рабочий, все слушатели снимаются (по идее)
function onModalOpen(e) {
  e.preventDefault();

  const url = getImageUrl(e.target);

  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
  );
  // вешаем слушателей на клик и на esc при октрытии модалки
  instance.show(() => {
    window.addEventListener('keydown', eventHandler, { once: true });
    window.addEventListener('click', eventHandler, { once: true });
  });

  function eventHandler(e) {
    if (e.type === 'keydown') {
      if (e.key === 'Escape') {
        instance.close();
        window.removeEventListener('click', eventHandler, { once: true });
        return;
      }
    }
    if (e.type === 'click') {
      window.removeEventListener('keydown', eventHandler, { once: true });
      return;
    }
  }
}

// вариант 2 - тут я ума не приложу как снять слушателя, если esc не нажат
// function onModalOpen(e) {
//   e.preventDefault();

//   const url = getImageUrl(e.target);

//   const instance = basicLightbox.create(
//     `<img src="${url}" width="800" height="600">`,
//     {
//       onShow: instance => {
//         const options = { once: true };
//         window.addEventListener('keydown', onEventHandler, options);
//         function onEventHandler(e) {
//           if (e.key === 'Escape') {
//             instance.close();
//             return;
//           }
//         }
//       },
//     },
//   );
//   instance.show();
// }
