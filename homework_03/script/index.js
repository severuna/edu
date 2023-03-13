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
    console.log(`1. Результат роботи першої функції -  ${firstOutput.textContent}`);
    firstOutput.textContent = getMaxDigit(e.target.value);
});

// 2. Створити функцію, яка форматує ім'я, роблячи першу букву
// великою

const getCorrectName = (name) => {
    const correctName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return correctName;
}
