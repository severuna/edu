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

const thirdOutput = document.querySelector("#thirdOutput");
const randomForm = document.forms.randomNum;

randomForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const first = Number(randomForm[0].value);
    const second = Number(randomForm[1].value);
    if (first < second) {
        randomForm[1].style.backgroundColor = '';
        thirdOutput.textContent = getRandomNumber(first, second);
        console.log(`3. Результат роботи третьої функції -  ${thirdOutput.textContent}`);
    } else {
        randomForm[1].style.backgroundColor = 'red';
    }
});


// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку  від зарабітньої плати.

const getSalary = (salary) => {
    const tax = (18 + 1.5) / 100;
    return salary - salary * tax;
}

const fourInput = document.querySelector("#fourInput");
const fourOutput = document.querySelector("#fourOutput");

fourInput.addEventListener("input", ( e ) => {
    e.preventDefault();
    fourOutput.textContent = getSalary(e.target.value).toFixed(2);
    console.log(`4. Результат роботи четвертої функції -  ${fourOutput.textContent}`);
});

// 5. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

const  getRandomPassword = (amount) => {
    amount = !amount ? 8 : amount;
    const numArr = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    let password = '';
    for ( let i = 0; i < amount; i++ ) {
        const numArrRand = Math.floor( Math.random() * numArr.length );
        password += numArr[numArrRand];
    }
    return password;
}

const fiveInput = document.querySelector("#fiveInput");
const fiveOutput = document.querySelector("#fiveOutput");

fiveInput.addEventListener("input", ( e ) => {
    e.preventDefault();
    fiveOutput.textContent = getRandomPassword(e.target.value);
    console.log(`5. Результат роботи п"ятої функції -  ${fiveOutput.textContent}`);
});

// 6. Створіть функцію, яка видаляє всі букви з речення.