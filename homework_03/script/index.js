// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке
// число та виводить найбільшу цифру в цьому числі.

const getMaxDigit = (number) => {
    const splitNumArr = String(number).split('');
    return splitNumArr.sort()[splitNumArr.length - 1];
}

const firstInput = document.querySelector('#firstInput');
firstInput.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(e.target.value)
});