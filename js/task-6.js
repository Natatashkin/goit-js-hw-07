// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

//
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>; */
}

const form = document.querySelector("input#validation-input");

form.addEventListener("blur", onInputBlur);
form.addEventListener("focus", onInputFocus);

function onInputBlur(event) {
  event.currentTarget.value.length ===
  Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
}

function onInputFocus(event) {
  console.log(event.currentTarget.classList);
  event.currentTarget.classList.remove("valid", "invalid");
}
