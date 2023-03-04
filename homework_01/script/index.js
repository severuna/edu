// 1. Створіть 3 змінних з наступими значеннями:
// 15.678, 123.965, 90.2345.
// Ці змінні зберігають ціни на товари.
// Придумайте їм назви (товар можна придумати будь-який)
const pantsPrice = 15.678;
const shortsPrice = 123.965;
const shirtsPrice = 90.2345;

// output variables
console.log(`Ціна першого товару - ${pantsPrice}`);
console.log(`Ціна другого товару - ${shortsPrice}`);
console.log(`Ціна третього товару - ${shirtsPrice}`);

// 2. Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(pantsPrice, shortsPrice, shirtsPrice);
console.log(`Найбільша ціна - ${maxPrice}`);