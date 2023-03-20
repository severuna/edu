const setNumberType = (arr) => {
    const numberTypeArr = [];
    arr.forEach(el => {
        numberTypeArr.push(Number(el))
    });
    return numberTypeArr
}

// 1. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції.


const filterEvenNumbers = (...numbers) => {
    return numbers.filter( el => el % 2 != 0 )
}

const filterEvenForm = document.forms.filterEvenForm;
const filterOutput = document.querySelector("#filterOutput");

filterEvenForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const filterInput = filterEvenForm[0].value.split(', ');
    const filterInputArr = [];
    filterInput.forEach(el => {
        filterInputArr.push(Number(el))
    });
    const filterResult = filterEvenNumbers(...filterInputArr);
    console.log(`1. Результат роботи - ${filterResult}`);
    filterOutput.textContent = `Результат роботи - ${filterResult}`;
});

// 2. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів

const getAverage = (...numbers) => {
    const numbersLength = numbers.length;
    let sum = 0;
    numbers.forEach(el => {
        sum += el;
    });
    return sum / numbersLength
}


const getAverageForm = document.forms.getAverageForm;
const averageOutput = document.querySelector("#averageOutput");


