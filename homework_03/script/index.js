// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке
// число та виводить найбільшу цифру в цьому числі.

const getMaxDigit = (number) => {
    const splitNumArr = String(number).split('');
    return splitNumArr.sort()[splitNumArr.length - 1];
}

const firstInput = document.querySelector('#firstInput');
const firstOutput = document.querySelector('#firstOutput');

firstInput.addEventListener("input", (e) => {
    e.preventDefault();
    firstOutput.textContent = getMaxDigit(e.target.value);
    console.log(`1. Результат роботи першої функції -  ${firstOutput.textContent}`);
});

// 2. Створити функцію, яка форматує ім'я, роблячи першу букву
// великою

const getCorrectName = (name) => {
    const correctName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return correctName;
}

const secondInput = document.querySelector('#secondInput');
const secondOutput = document.querySelector('#secondOutput');

secondInput.addEventListener("input", (e) => {
    e.preventDefault();
    secondOutput.textContent = getCorrectName(e.target.value);
    console.log(`2. Результат роботи другої функції -  ${secondOutput.textContent}`);
});

// 3. Створити функцію, яка повертає випадкове ціле число в
// діапазоні від N до M.

const getRandomNumber = (firstNum, secondNum) => {
    const randomNumber = Math.floor(Math.random() * (secondNum - firstNum) + firstNum);
    return randomNumber;
}
