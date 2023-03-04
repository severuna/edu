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

// 7. Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const floorTotalCost = Math.floor(totalCost);
console.log(`Округлена в меншу сторону сума всії товарів є ${floorTotalCost % 2 === 0}, тому можна сказати що сума є непарним числомю`);

// 8. Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const userRest = 500 - totalCost;
console.log(`Сума решти, якщо клієнт платить 500 - ${userRest} (без округлення)`);

// 9. Виведіть середнє значення цін, округлене до другого знаку після коми
const arifPrice = ( ( pantsPrice + shortsPrice + shirtsPrice ) / 3).toFixed(2);
console.log(`Cереднє значення цін, округлене до другого знаку після коми - ${arifPrice}`);

// 10. Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const discount = Math.floor(Math.random() * 101); // знижка від 0 до 100
console.log(`Випадкова знижка - ${discount} %`);

// 11. Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const userDiscount = (totalCost - ( totalCost * discount ) / 100).toFixed(2);
console.log(`Сума до сплати з урахуванням знижки (${discount} %), округлена до 2 знаків після коми - ${userDiscount} `);

// 12. Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const netProfit = ( totalCost / 2) -  ( totalCost * discount ) / 100;
console.log(`Чистий прибуток, якщо клієнт заплатив зі знижкою і собівартість товарів рівно в 2 рази нижче їх ціни -  ${netProfit}`);