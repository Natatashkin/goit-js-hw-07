// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
}

const inputForm = document.querySelector("input#font-size-control");
inputForm.min = 1;
inputForm.max = 32;
inputForm.value = 16;

const span = document.querySelector("span#text");

inputForm.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
