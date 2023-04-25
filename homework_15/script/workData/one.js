// 1
const pantsPrice = 15.678;
const shortsPrice = 123.965;
const shirtsPrice = 90.2345;

// 2
const maxPrice = Math.max(pantsPrice, shortsPrice, shirtsPrice);

// 3
const minPrice = Math.min(pantsPrice, shortsPrice, shirtsPrice);

// 4
const totalCost = pantsPrice + shortsPrice + shirtsPrice;

// 5
const wholePartsPrices = Math.floor(pantsPrice) + Math.floor(shortsPrice) + Math.floor(shirtsPrice);

// 6
const costToHundr = Math.ceil(totalCost / 100) * 100;

// 7
const floorTotalCost = Math.floor(totalCost);
// document.querySelector("#seven").textContent = floorTotalCost % 2 === 0;

// 8
const userRest = 500 - totalCost;

// 9
const arifPrice = ( ( pantsPrice + shortsPrice + shirtsPrice ) / 3).toFixed(2);

// 10
const discount = Math.floor(Math.random() * 101);

// 11
const userDiscount = (totalCost - ( totalCost * discount ) / 100).toFixed(2);

// 12
const netProfit = ( totalCost / 2) -  ( totalCost * discount ) / 100;

// 13
const patternString = `Шаблонний рядок з результатами всіх обчислень з блоку Base: \n 1. Максимальна ціна: ${maxPrice}. \n 2. Мінімальна ціна: ${minPrice}. \n 3. Вартість всіх товарів: ${totalCost}. \n 4. Bартість всіх товарів (без урахування копійок у кожного товару) - ${wholePartsPrices}. \n 5. Bартість всіх товарів (округлену до сотень) - ${costToHundr}. \n 6. Округлена в меншу сторону сума всії товарів є ${floorTotalCost % 2 === 0}, тому можна сказати що сума є непарним числом. \n 7. Сума решти, якщо клієнт платить 500 - ${userRest} (без округлення). \n 8. Cереднє значення цін, округлене до другого знаку після коми - ${arifPrice}. \n`;

export const taskDataOne = [
    {
        id: 1,
        txt: `Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. Ці змінні зберігають ціни на товари`,
        answer: [
            pantsPrice,
            shortsPrice,
            shirtsPrice
        ]
    },
    {
        id: 2,
        txt: `Використовуючи вбудований об'єкт Math – виведіть максимальне число`,
        answer: [
            maxPrice
        ]
    },
    {
        id: 3,
        txt: `Використовуючи вбудований об'єкт Math – виведіть мінімальне число`,
        answer: [
            minPrice
        ]
    },
    {
        id: 4,
        txt: `Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму`,
        answer: [
            totalCost
        ]
    },
    {
        id: 5,
        txt: `Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНШУ сторону.`,
        answer: [
            wholePartsPrices
        ]
    },
    {
        id: 6,
        txt: `Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)`,
        answer: [
            costToHundr
        ]
    },
    {
        id: 7,
        txt: `Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?`,
        answer: [
            floorTotalCost
        ]
    },
    {
        id: 8,
        txt: `Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.`,
        answer: [
            userRest
        ]
    },
    {
        id: 9,
        txt: `Виведіть середнє значення цін, округлене до другого знаку після коми`,
        answer: [
            arifPrice
        ]
    },
    {
        id: 10,
        txt: `Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).`,
        answer: [
            discount
        ]
    },
    {
        id: 11,
        txt: `Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.`,
        answer: [
            userDiscount
        ]
    },
    {
        id: 12,
        txt: 'Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?',
        answer: [
            netProfit
        ]
    },
    {
        id: 13,
        txt: 'Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду: Максимальна ціна: 9999.99 Мінімальна ціна: 1111.11 Вартість всіх товарів: 1345.66 ...і так далі',
        answer: [
            patternString
        ]
    }
];
