// 1. 
const getMaxDigit = ( number ) => {
    const splitNumArr = String( number ).split('');
    return splitNumArr.sort()[ splitNumArr.length - 1 ];
}
// temporary value
const maxDigit = `найбільше число`;
// const firstInput = document.querySelector('#firstInput');
// const firstOutput = document.querySelector('#firstOutput');

// firstInput.addEventListener("input", ( e ) => {
//     e.preventDefault();
//     firstOutput.textContent = getMaxDigit( e.target.value );
//     console.log(`1. Результат роботи першої функції -  ${ firstOutput.textContent }`);
// });

// 2.
const getCorrectName = ( name ) => {
    const correctName = name[ 0 ].toUpperCase() + name.slice( 1 ).toLowerCase();
    return correctName;
}
// temporary value
const correctName = `коректне значення`
// const secondInput = document.querySelector('#secondInput');
// const secondOutput = document.querySelector('#secondOutput');

// secondInput.addEventListener("input", ( e ) => {
//     e.preventDefault();
//     secondOutput.textContent = getCorrectName( e.target.value );
//     console.log(`2. Результат роботи другої функції -  ${ secondOutput.textContent }`);
// });

// 3.
const getRandomNumber = ( firstNum, secondNum ) => {
    const randomNumber = Math.floor( Math.random() * ( secondNum - firstNum ) + firstNum );
    return randomNumber;
}
// temporary value
const randomNumber = `random`;
// const randomForm = document.forms.randomNum;
// randomForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const first = Number( randomForm[ 0 ].value );
//     const second = Number( randomForm[ 1 ].value );
//     if ( first < second ) {
//         randomForm[ 1 ].style.backgroundColor = '';
//         thirdOutput.textContent = getRandomNumber( first, second );
//         console.log(`3. Результат роботи третьої функції -  ${ thirdOutput.textContent }`);
//     } else {
//         randomForm[ 1 ].style.backgroundColor = 'red';
//     }
// });

// 4. 
const getSalary = ( salary ) => {
    const tax = ( 18 + 1.5 ) / 100;
    return salary - salary * tax;
}
// temporary value
const salary = `salary`;
// const fourInput = document.querySelector("#fourInput");
// const fourOutput = document.querySelector("#fourOutput");

// fourInput.addEventListener("input", ( e ) => {
//     e.preventDefault();
//     fourOutput.textContent = getSalary( e.target.value ).toFixed( 2 );
//     console.log(`4. Результат роботи четвертої функції -  ${ fourOutput.textContent }`);
// });

// 5. 
const  getRandomPassword = ( amount ) => {
    amount = !amount ? 8 : amount;
    const numArr = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    let password = '';
    for ( let i = 0; i < amount; i++ ) {
        const numArrRand = Math.floor( Math.random() * numArr.length );
        password += numArr[ numArrRand ];
    }
    return password;
}
// temporary value
const randomPass = `password`;
// const fiveInput = document.querySelector("#fiveInput");
// const fiveOutput = document.querySelector("#fiveOutput");

// fiveInput.addEventListener("input", ( e ) => {
//     e.preventDefault();
//     fiveOutput.textContent = getRandomPassword( e.target.value );
//     console.log(`5. Результат роботи п"ятої функції -  ${ fiveOutput.textContent }`);
// });

// 6. 
const deleteLetters = ( letter, sentence ) => {
    const splitSentence = sentence.split('');
    let correctSentence = '';
    for ( let i = 0 ; i < splitSentence.length; i++ ) {
        if ( splitSentence[ i ] != letter ) {
            correctSentence += splitSentence[ i ];
        }
    };
    return correctSentence;
}
// temporary value
const sentence = `delete leters res`;
// const deleteLettersForm = document.forms.deleteLettersForm;
// const sixOutput = document.querySelector("#sixOutput");

// deleteLettersForm.addEventListener("submit", ( e ) => {
//     e.preventDefault();
//     const userSentence = deleteLettersForm[ 0 ].value;
//     const userLetter = deleteLettersForm[ 1 ].value;
//     sixOutput.textContent = deleteLetters( userLetter, userSentence );
//     console.log(`6. Результат роботи шостої функції -  ${ sixOutput.textContent }`);
// });

const answerDataThree = [
    {
        id: 1,
        answer: [
            maxDigit
        ]
    },
    {
        id: 2,
        answer: [
            correctName
        ]
    },
    {
        id: 3,
        answer: [
            randomNumber
        ]
    },
    {
        id: 4,
        answer: [
            salary
        ]
    },
    {
        id: 5,
        answer: [
            randomPass
        ]
    },
    {
        id: 6,
        answer: [
            sentence
        ]
    },
];

export default answerDataThree;