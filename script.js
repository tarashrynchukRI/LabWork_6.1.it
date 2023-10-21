// lab_6.1
// Гринчук Тарас
// Лабораторна робота № 6.1
// Пошук елементів одновимірного масиву ітераційним та рекурсивним способом
// Варіант №4

// Ітераційний спосіб
function generateArray(size, min, max) {
   const array = [];
   for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return array;
}

function calculateAndReplace(array) {
   let count = 0;
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] <= 0 || i % 2 == 0) {
         count++;
         sum += array[i];
         array[i] = 0;
      }
   }
   return { count: count, sum: sum, array: array };
}

let array = generateArray(26, -40, 20);
console.log("Оригінальний масив: " + array.join(", "));
let result = calculateAndReplace(array);
console.log("К-ть елементів, які задов. умову: " + result.count);
console.log("Сума елементів, які задов. умову: " + result.sum);
console.log("Змінений масив: " + result.array.join(", "));
