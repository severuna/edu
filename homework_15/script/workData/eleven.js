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
        txt: `Створіть функцію, яка повертає проміс getRandomChinese(length).
        <br>
        Функція працює таким чином:
        <br>
        Запускається цикл (підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now()
        <br>
        Наприклад отримали const sign = 16086;.
        <br>
        Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
        <br>
        Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами.
        <br>
        Час роботи проміса має складати length * 50ms.
        `,
        answer: [
            chinese
        ]
    }
];
