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
const patternString = `Шаблонний рядок з результатами всіх обчислень з блоку Base: 
    <br> 
    1. Максимальна ціна: <span>${maxPrice}</span>. 
    <br> 
    2. Мінімальна ціна: <span>${minPrice}</span>. 
    <br> 
    3. Вартість всіх товарів: <span>${totalCost}</span>. 
    <br> 
    4. Bартість всіх товарів (без урахування копійок у кожного товару) - <span>${wholePartsPrices}</span>. 
    <br> 
    5. Bартість всіх товарів (округлену до сотень) - <span>${costToHundr}</span>. 
    <br> 
    6. Округлена в меншу сторону сума всії товарів є <span>${floorTotalCost % 2 === 0}</span>, тому можна сказати що сума є <span>${ floorTotalCost % 2 === 0 ? 'парним' : 'непарним' }</span> числом. 
    <br> 
    7. Сума решти, якщо клієнт платить 500 - <span>${userRest}</span> (без округлення). 
    <br> 
    8. Cереднє значення цін, округлене до другого знаку після коми - <span>${arifPrice}</span>.`;

export const taskDataOne = [
    {
        id: 0,
        title: `Homework 01. Змінні та типи`
    },
    {
        id: 1,
        txt: `Створіть 3 змінних з наступими значеннями: <span>15.678</span>, <span>123.965</span>, <span>90.2345</span>. Ці змінні зберігають ціни на товари`,
        answer: [
            `const <span>pantsPrice</span> = ${ pantsPrice };`,
            `const <span>shortsPrice</span> = ${ shortsPrice };`,
            `const <span>shirtsPrice</span> = ${ shirtsPrice };`
        ]
    },
    {
        id: 2,
        txt: `Використовуючи вбудований об'єкт <span>Math</span> – виведіть максимальне число`,
        answer: [
            `const <span>maxPrice</span> = Math.max(pantsPrice, shortsPrice, shirtsPrice);
            <br>
            Результат - <span>${ maxPrice }</span>;`
        ]
    },
    {
        id: 3,
        txt: `Використовуючи вбудований об'єкт <span>Math</span> – виведіть мінімальне число`,
        answer: [
            `const <span>minPrice</span> = Math.min(pantsPrice, shortsPrice, shirtsPrice);
            <br>
            Результат - <span>${ minPrice }</span>;`
        ]
    },
    {
        id: 4,
        txt: `Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю <span>суму</span>`,
        answer: [
            `const <span>totalCost</span> = pantsPrice + shortsPrice + shirtsPrice;
            <br>
            Результат - <span>${ totalCost }</span>;`
        ]
    },
    {
        id: 5,
        txt: `Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в <span>МЕНШУ</span> сторону.`,
        answer: [
            `const <span>wholePartsPrices</span> = Math.floor(pantsPrice) + Math.floor(shortsPrice) + Math.floor(shirtsPrice);
            <br>
            Результат - <span>${ wholePartsPrices }</span>;`
        ]
    },
    {
        id: 6,
        txt: `Виведіть суму товарів округлену до <span>сотень</span>. (Наприклад якщо вийшло 260, то виведіть 300)`,
        answer: [
            `const <span>costToHundr</span> = Math.ceil(totalCost / 100) * 100rice);
            <br>
            Результат - <span>${ costToHundr }</span>;`
        ]
    },
    {
        id: 7,
        txt: `Виведіть <span>булеве значення</span>: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?`,
        answer: [
            `const <span>floorTotalCost</span> = Math.floor(totalCost);
            <br>
            Результат - <span>${ floorTotalCost % 2 === 0 }</span>;`
        ]
    },
    {
        id: 8,
        txt: `Виведіть суму <span>решти</span>, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.`,
        answer: [
            `const <span>userRest</span> = 500 - totalCost;
            <br>
            Результат - <span>${ userRest }</span>;`
        ]
    },
    {
        id: 9,
        txt: `Виведіть <span>середнє значення</span> цін, округлене до другого знаку після коми`,
        answer: [
            `const <span>arifPrice</span> = ( ( pantsPrice + shortsPrice + shirtsPrice ) / 3).toFixed(2);
            <br>
            Результат - <span>${ arifPrice }</span>;`
        ]
    },
    {
        id: 10,
        txt: `Створіть змінну, в якої збережіть <span>випадкову знижку</span> (використовуйте функцію <span>Math.random</span>).`,
        answer: [
            `const <span>discount</span> = Math.floor(Math.random() * 101);
            <br>
            Результат - <span>${ discount }</span>;`
        ]
    },
    {
        id: 11,
        txt: `Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до <span>2 знаків</span> після коми.`,
        answer: [
            `const <span>userDiscount</span> = (totalCost - ( totalCost * discount ) / 100).toFixed(2);
            <br>
            Результат - <span>${ userDiscount }</span>;`
        ]
    },
    {
        id: 12,
        txt: 'Виведіть <span>чистий прибуток</span>, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?',
        answer: [
            `const <span>netProfit</span> = ( totalCost / 2) -  ( totalCost * discount ) / 100;
            <br>
            Результат - <span>${ netProfit }</span>;`
        ]
    },
    {
        id: 13,
        txt: 'Створіть <span>шаблонний рядок</span> та виведіть всі обчислення вчинені в <span>Base</span> частині домашнього завдання у вигляді одного рядка наступного вигляду: Максимальна ціна: 9999.99 Мінімальна ціна: 1111.11 Вартість всіх товарів: 1345.66 ...і так далі.',
        answer: [
            patternString
        ]
    }
];
