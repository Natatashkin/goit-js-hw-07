// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
}

const inputNum = document.querySelector('input[type="number"]');
const renderingButton = document.querySelector('button[data-action="render"]');
const destroingButton = document.querySelector('button[data-action="destroy"]');
const newBoxes = document.querySelector("div#boxes");

renderingButton.addEventListener("click", () => {
  createBoxes(Number(inputNum.value));
});

destroingButton.addEventListener("click", () => {
  destroyBoxes();
});

let width = 30;
let height = 30;

function randomColor(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = width + i * 10 + "px";
    box.style.height = height + i * 10 + "px";
    box.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(
      0,
      255
    )}, ${randomColor(0, 255)}`;

    arr.push(box);
  }
  newBoxes.append(...arr);
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}
