// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// var -1

// const itemRef = document.querySelectorAll("li.item");
// console.log(itemRef);

// const countCategories = (array) => array.length;
// console.log(`В списке ${countCategories(itemRef)} категории`);

// const categoryInfo = (array) =>
//   array.forEach((item) => {
//     const subItemRefTitle = item.querySelector("h2");

//     const subItemRefTitleContent = subItemRefTitle.textContent;
//     console.log(`Категория: ${subItemRefTitleContent}`);

//     const subItemList = item.querySelectorAll("li");

//     const countSubItemList = countCategories(subItemList);
//     console.log(`Количество элементов: ${countSubItemList}`);
//   });

// const result = categoryInfo(itemRef);

// var 2

const categoriesList = document.querySelector("#categories");
const categoriesCount = `В списке ${categoriesList.childElementCount} категории.`;
console.log(categoriesCount);
const categoriesListItems = categoriesList.children;

const categoriesItemsCount = Array.from(categoriesListItems).forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
