// 1
let N;

do {
    N = +prompt('Введіть перше число, будь ласка. Воно повинно дорівнювати або бути більше 0.');
} while ( N < 0 || !Number.isInteger(N) );

// 2
const numCheckMessage = `Число нам підходить.`;

// 3
let M;

do {
    M = +prompt(`Введіть друге число, будь ласка. Воно повинно бути більше першого числа (перше число, що ви ввели, - ${ N }).`);
} while ( M < N || !Number.isInteger(M) );

// 5
const evenNumCheck = confirm('Чи враховувати парні числа? ОК - так, Cancel - ні.');
const evemNumMessage = `Ви обрали - ${ evenNumCheck }, тому числа ${ evenNumCheck ? ' будуть ' : ' не будуть' } враховані.`;

// 6
let sum = 0;

for ( let i = N ; i <= M ; i ++ ) {
    if ( evenNumCheck ) {
        sum += i;
    } else {
        if ( i % 2 != 0 ) {
            sum += i;
        }
    }
}

export const taskDataTwo = [
    {
        id: 0,
        title: `Homework 02. Цикли і Розгалуження`
    },
    {
        id: 1,
        txt: `Необхідно написати програму, яка виконує складання чисел від <span>N</span> до <span>M</span> (<span>N</span> та <span>M</span> – задаються користувачем), а також програма має вміти пропускати парні числа. Отримайте у користувача число(<span>N</span>) від якого ми будемо рахувати:`,
        answer: [
            `Перше число, введене користувачем, - <span>${ N }</span>`
        ]
    },
    {
        id: 2,
        txt: `Перевірте, чи є передане значення <span>N ЦІЛИМ</span> числом.`,
        answer: [
            `<span>${ numCheckMessage }</span>`
        ]
    },
    {
        id: 3,
        txt: `Отримайте у користувача число (<span>M</span>) до якого ми будемо складати (включно).`,
        answer: [
            `Друге число, введене користувачем, - - <span>${ M }</span>`
        ]
    },
    {
        id: 4,
        txt: `Перевірте, чи є передане значення <span>M ЦІЛИМ</span> числом.`,
        answer: [
            `<span>${ numCheckMessage }</span>`
        ]
    },
    {
        id: 5,
        txt: `Отримайте у користувача булевий параметр(<span>true/false</span>), який підкаже нам чи потрібно пропускати парні числа. <span>TRUE</span> – потрібно, <span>FALSE/<span> – не потрібно.`,
        answer: [
            `<span>${ evemNumMessage }</span>`
        ]
    },
    {
        id: 6,
        txt: `Напишіть <span>цикл</span>, який буде складати числа від раніше отриманих <span>N</span> та <span>M</span>. В циклі додайте <span>перевірку</span> – чи потрібно пропускати при складанні парні числа. Виведіть результат`,
        answer: [
            `Сума обраних чисел ${ sum }`
        ]
    }
];
