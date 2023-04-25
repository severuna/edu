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

const answerDataTwo = [
    {
        id: 1,
        answer: [
            N
        ]
    },
    {
        id: 2,
        answer: [
            numCheckMessage
        ]
    },
    {
        id: 3,
        answer: [
            M
        ]
    },
    {
        id: 4,
        answer: [
            numCheckMessage
        ]
    },
    {
        id: 5,
        answer: [
            evemNumMessage
        ]
    },
    {
        id: 6,
        answer: [
            sum
        ]
    }
]