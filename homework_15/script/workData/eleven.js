const randomChinese = document.addEventListener("DOMContentLoaded", ( ) => {
    
    async function getRandomChinese(length) {

        let randomChinese = '';

        let count = length;

        while ( count >= 1 ) {

            const sign = Number(String(Date.now()).substring(String(Date.now()).length - 5, String(Date.now()).length));

            randomChinese += String.fromCharCode(sign);

            setTimeout(count--, 50);

        }

        return randomChinese
    }
    
    console.log(getRandomChinese(5));
    
});

const chinese = `The answer is in the console.`;

export const taskDataEleven = [
    {
        id: 0,
        title: `Homework 11. Асинхронність та Date. Проміси`
    },
    {
        id: 1,
        txt: `Створіть функцію, яка повертає проміс <span>getRandomChinese(length)</span>.
        <br>
        Функція працює таким чином:
        <br>
        Запускається цикл (підказка: можна використовувати <span>while</span>) <span>length</span> раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу <span>Date.now()</span>
        <br>
        Наприклад отримали <span>const sign = 16086;</span>.
        <br>
        Конвертуємо отриману цифу в рядок <span>String.fromCharCode(sign);/<span> та чекаємо <span>50 ms</span>
        <br>
        Функція <span>gerRandomChinese(length)</span> повинна повернути рядок довжиною (<span>length</span>) з китайськими ієрогліфами.
        <br>
        Час роботи проміса має складати <span>length * 50ms</span>.
        `,
        answer: [
            chinese
        ]
    }
];
