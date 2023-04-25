// 1. 
const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};

const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};

const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

// 2. 
function getMyTaxes ( salary ) {
    return (this.tax * salary).toFixed(2);
}
// temp val
const taxes = `taxes`;

// 3. 
function getMiddleTaxes ( ) {
    return (this.tax * this.middleSalary).toFixed(2);
}
// temp val
const middleTaxes = `middle taxes`;

// 4. 
function getTotalTaxes ( ) {
    return (this.tax * this.middleSalary * this.vacancies);
}
// temp val
const totalTaxes = `total taxes`;

// 5. 
function getMySalary ( country ) {
    const randomSalaryObj = {};
    const randomNumber = Math.floor( Math.random() * ( 2000 - 1500 ) + 1500 );
    randomSalaryObj.salary = randomNumber;
    randomSalaryObj.taxes = Number((randomSalaryObj.salary - randomSalaryObj.salary * country.tax).toFixed(2));
    randomSalaryObj.profit = Number((randomSalaryObj.salary - randomSalaryObj.taxes).toFixed(2));
    console.log(randomSalaryObj);
    return randomSalaryObj;
}
// temp val
const mySalary = `my salary`;

const answerDataSeven = [
    {
        id: 1,
        answer: [
            ukraine,
            latvia,
            litva
        ]
    },
    {
        id: 2,
        answer: [
            taxes
        ]
    },
    {
        id: 3,
        answer: [
            middleTaxes
        ]
    },
    {
        id: 4,
        answer: [
            totalTaxes
        ]
    },
    {
        id: 5,
        answer: [
            mySalary
        ]
    }
];

export default answerDataSeven;