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

const taskDataSeven = [
    {
        id: 1,
        txt: `Створіть 3 об'єкти, що описують країни:
        <br>
        const <span>ukraine</span> = { 
            <br>
            <span>tax</span>: 0.195, 
            <br>
            <span>middleSalary</span>: 1789, 
            <br>
            <span>vacancies</span>: 11476
            <br> 
        };
        <br>
        const <span>latvia</span> = { 
            <br>
            <span>tax</span>: 0.25, 
            <br>
            <span>middleSalary</span>: 1586, 
            <br>
            <span>vacancies</span>: 3921 
            <br>
        };
        <br>
        const <span>litva</span> = { 
            <br>
            <span>tax</span>: 0.15, 
            <br>
            <span>middleSalary</span>: 1509, 
            <br>
            <span>vacancies</span>: 1114 
            <br>
        };`,
        answer: [
            `Створіть 3 об'єкти, що описують країни:
        <br>
        const <span>ukraine</span> = { 
            <br>
            <span>tax</span>: 0.195, 
            <br>
            <span>middleSalary</span>: 1789, 
            <br>
            <span>vacancies</span>: 11476
            <br> 
        };
        <br>
        const <span>latvia</span> = { 
            <br>
            <span>tax</span>: 0.25, 
            <br>
            <span>middleSalary</span>: 1586, 
            <br>
            <span>vacancies</span>: 3921 
            <br>
        };
        <br>
        const <span>litva</span> = { 
            <br>
            <span>tax</span>: 0.15, 
            <br>
            <span>middleSalary</span>: 1509, 
            <br>
            <span>vacancies</span>: 1114 
            <br>
        };`
        ]
    },
    {
        id: 2,
        txt: `Створіть функцію <span>getMyTaxes.call(country, salary) -> number;</span> – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через <span>call</span> та працювати з даними через <span>this</span>.`,
        answer: [
            taxes
        ]
    },
    {
        id: 3,
        txt: `Створіть функцію <span>getMiddleTaxes.call(country) -> number;</span> – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. <span>(tax * middleSalary)</span>. Функція повинна викликатись через <span>call</span> та працювати з даними через <span>this</span>.`,
        answer: [
            middleTaxes
        ]
    },
    {
        id: 4,
        txt: `Створіть функцію <span>getTotalTaxes.call(country) -> number;</span> – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. <span>(tax * middleSalary * vacancies)</span>. Функція повинна викликатись через <span>call</span> та працювати з даними через <span>this.</span>`,
        answer: [
            totalTaxes
        ]
    },
    {
        id: 5,
        txt: `Створіть функцію <span>getMySalary(country)</span> – яка буде писати в консоль об'єкт виду: <span>{ salary: number, taxes: number, profit: number }</span> кожні 10 секунд. Значення <span>salary</span> – генеруйте випадковим чином у діапазоні 1500-2000. <span>taxes</span> – розраховується в залежності від вибраної країни та значення <span>salary</span>. <span>profit = salary - taxes;</span> для виводу в консоль кожні 10 секунд використайте <span>setInterval.</span>`,
        answer: [
            mySalary
        ]
    },
];

export default taskDataSeven;
