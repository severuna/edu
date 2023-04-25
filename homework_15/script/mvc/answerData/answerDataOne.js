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

const answerDataOne = [
    {
        id: 1,
        answer: [
            pantsprice,
            shortsPrice,
            shirtsPrice
        ]
    },
    {
        id: 2,
        answer: [
            maxPrice
        ]
    },
    {
        id: 3,
        answer: [
            minPrice
        ]
    },
    {
        id: 4,
        answer: [
            totalCost
        ]
    },
    {
        id: 5,
        answer: [
            wholePartsPrices
        ]
    },
    {
        id: 6,
        answer: [
            costToHundr
        ]
    },
    {
        id: 7,
        answer: [
            floorTotalCost
        ]
    },
    {
        id: 8,
        answer: [
            userRest
        ]
    },
    {
        id: 9,
        answer: [
            arifPrice
        ]
    },
    {
        id: 10,
        answer: [
            discount
        ]
    },
    {
        id: 11,
        answer: [
            userDiscount
        ]
    },
    {
        id: 12,
        answer: [
            netProfit
        ]
    },
    {
        id: 13,
        answer: [
            patternString
        ]
    }
];
