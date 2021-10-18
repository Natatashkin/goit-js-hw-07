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

// вариант с модалкой 1 - рабочий, все слушатели снимаются (см.консоль)
function onModalOpen(e) {
  e.preventDefault();

  const url = getImageUrl(e.target);

  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
  );
  // вешаем слушателей на клик и на esc при октрытии модалки
  instance.show(() => {
    window.addEventListener('keydown', onEscPress);
    console.log('слушатель повешен на клаву');
    window.addEventListener('click', onLightBoxClick);
    console.log('слушатель повешен на клик по модалке');
  });
  // обработчик закрытия по клику
  function onLightBoxClick() {
    removeListeners();
  }
  // обработчик события клавитатуры
  function onEscPress(e) {
    if (e.key === 'Escape') {
      instance.close(() => {
        removeListeners();
      });
    }
  }
  // удаляем все слушатели при закрытии модалки
  function removeListeners() {
    window.removeEventListener('keydown', onEscPress);
    console.log('слушатель снят на Escape');
    window.removeEventListener('click', onLightBoxClick);
    console.log('слушатель снят на клик');
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
//         window.addEventListener('keydown', onEscPress, { once: true });
//         function onEscPress(e) {
//           if (e.key === 'Escape') {
//             instance.close();
//             console.log('сняли слушателя');
//           }
//         }
//       },
//     },
//   );
//   instance.show();
// }
