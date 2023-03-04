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

// 3. Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(pantsPrice, shortsPrice, shirtsPrice);
console.log(`Найменша ціна - ${minPrice}`);

// 4. Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const totalCost = pantsPrice + shortsPrice + shirtsPrice;
console.log(`Bартість всіх товарів - ${totalCost}`);

// 5. Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНШУ сторону.
const wholePartsPrices = Math.floor(pantsPrice) + Math.floor(shortsPrice) + Math.floor(shirtsPrice);
console.log(`Bартість всіх товарів (без урахування копійок у кожного товару) - ${wholePartsPrices}`);

// 6. Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const costToHundr = Math.ceil(totalCost / 100) * 100;
console.log(`Bартість всіх товарів (округлену до сотень) - ${costToHundr}`);
