const setNumberType = (arr) => {
    const numberTypeArr = [];
    arr.forEach(el => {
        numberTypeArr.push(Number(el))
    });
    return numberTypeArr
}

// 1. 
const filterEvenNumbers = (...numbers) => {
    return numbers.filter( el => el % 2 != 0 )
}
// temp val
const filterEven = `filter`;
// const filterEvenForm = document.forms.filterEvenForm;
// const filterOutput = document.querySelector("#filterOutput");

// filterEvenForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const filterInput = filterEvenForm[0].value.split(', ');
//     const filterInputArr = setNumberType(filterInput);
//     const filterResult = filterEvenNumbers(...filterInputArr);
//     console.log(`1. Результат роботи - ${filterResult}`);
//     filterOutput.textContent = `Результат роботи - ${filterResult}`;
// });

// 2. 
const getAverage = (...numbers) => {
    const numbersLength = numbers.length;
    let sum = 0;
    numbers.forEach(el => {
        sum += el;
    });
    return (sum / numbersLength).toFixed(2);
}
// temp val
const average = `average`;
// const getAverageForm = document.forms.getAverageForm;
// const averageOutput = document.querySelector("#averageOutput");
// getAverageForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const averageInput = getAverageForm[0].value.split(', ');
//     const averageInputArr = setNumberType(averageInput);
//     const averageResult = getAverage(...averageInputArr);
//     console.log(`2. Результат роботи - ${averageResult}`);
//     averageOutput.textContent = `Результат роботи - ${averageResult}`;
// });

// 3. 
const getDividedByFive = (...numbers) => {
    return numbers.filter( el => el % 5 == 0 )
}
// temp val
const dividedByFive = `divided`;
// const dividedByFiveForm = document.forms.dividedByFiveForm;
// const dividedOutput = document.querySelector("#dividedOutput");
// dividedByFiveForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const dividedInput = dividedByFiveForm[0].value.split(', ');
//     const dividedInputArr = setNumberType(dividedInput);
//     const dividedResult = getDividedByFive(...dividedInputArr);
//     console.log(`3. Результат роботи - ${dividedResult}`);
//     dividedOutput.textContent = `Результат роботи - ${dividedResult}`;
// });

// 4. 
const countPositiveNumbers = (...numbers) => {
    return numbers.filter( el => el > 0 )
}
// temp val
const positiveNumbers = `posititve`;
// const positiveNumbersForm = document.forms.positiveNumbersForm;
// const positiveOutput = document.querySelector("#positiveOutput");
// positiveNumbersForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const positiveInput = positiveNumbersForm[0].value.split(', ');
//     const positiveInputArr = setNumberType(positiveInput);
//     const positiveResult = countPositiveNumbers(...positiveInputArr);
//     console.log(`4. Результат роботи - ${positiveResult}`);
//     positiveOutput.textContent = `Результат роботи - ${positiveResult}`;
// });

// 5. 
const divideByThree = (word) => {
    const splitStr = word.join('');
    const dividedStr = [];
    for( let i = 0; i < splitStr.length; i += 3) {
        dividedStr.push(splitStr.slice(i, i + 3))
    }
    return dividedStr
}
// temp val
const divideThree = `divide 3`;
// const byThreeForm = document.forms.byThreeForm;
// const byThreeOutput = document.querySelector("#byThreeOutput");
// byThreeForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const byThreeInput = byThreeForm[0].value.split(' ');
//     const byThreeResult = divideByThree(byThreeInput);
//     console.log(`5. Результат роботи - ${byThreeResult}`);
//     byThreeOutput.textContent = `Результат роботи - ${byThreeResult}`;
// });

// 6.
const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor( Math.random() * ( max - min ) + min ));
    }
    return randomArray
}
// temp val 
const randomArr = `random arr`;
// const randomArrayForm = document.forms.randomArrayForm;
// const randomArrayOutput = document.querySelector("#randomArrayOutput");
// randomArrayForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const lengthArr = Number(randomArrayForm['length'].value);
//     const minArr = Number(randomArrayForm['min'].value);
//     const maxArr = Number(randomArrayForm['max'].value);
//     const randomArrayResult = getRandomArray(lengthArr, minArr, maxArr);
//     console.log(`6. Результат роботи - ${randomArrayResult}`);
//     randomArrayOutput.textContent = `Результат роботи - ${randomArrayResult}`
// });

export const taskDataFive = [
    {
        id: 0,
        title: `Homework 05. Перебираючі методи масивів`
    },
    {
        id: 1,
        txt: `Створіть функцію <span>filterEvenNumbers(...numbers)</span> – яка фільтрує парні числа, передані як аргументи функції.`,
        answer: [
            filterEven
        ]
    },
    {
        id: 2,
        txt: `Створіть функцію <span>getAverage(...numbers)</span> – яка рахує середнє арифметичне всіх переданих в неї аргументів.`,
        answer: [
            average
        ]
    },
    {
        id: 3,
        txt: `Створіть функцію <span>getDividedByFive(...numbers)</span> – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.`,
        answer: [
            dividedByFive
        ]
    },
    {
        id: 4,
        txt: `Створіть функцію <span>countPositiveNumbers(...numbers)</span> – яка порахує кількість чисел більших 0.`,
        answer: [
            positiveNumbers
        ]
    },
    {
        id: 5,
        txt: `Створіть функцію <span>divideByThree(word)</span>, яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.`,
        answer: [
            divideThree
        ]
    },
    {
        id: 6,
        txt: `Створіть функцію <span>getRandomArray(length, min, max)</span> – яка повертає масив випадкових цілих чисел. У функції є параметри: <span>length</span> - довжина масиву, <span>min</span> – мінімальне значення цілого числа, <span>max</span> – максимальне значення цілого числа.`,
        answer: [
            randomArr
        ]
    }
];
