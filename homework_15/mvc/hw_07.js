// 1. Створіть 3 об'єкти, що описують країни:

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

const showObj = ( obj, objName ) => {
    const container = document.createElement("p");
    container.innerHTML = `const <span>${ objName }</span> = {
        <span>tax</span> : ${ obj.tax },
        <span>middleSalary</span> : ${ obj.middleSalary },
        <span>vacancies</span> : ${ obj.vacancies }
    }`;
    return container
}

const outputObj = document.querySelector("#outputObj");
outputObj.append(showObj(ukraine, 'ukraine'));
outputObj.append(showObj(latvia, 'latvia'));
outputObj.append(showObj(litva, 'litva'));

// 2. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this 

function getMyTaxes ( salary ) {
    return (this.tax * salary).toFixed(2);
}

const myTaxesForm = document.forms.myTaxesForm;
const myTaxesOutput = document.querySelector("#myTaxesOutput");

myTaxesForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const country = myTaxesForm[0].value;
    const salary = Number(myTaxesForm[1].value);
    if ( country === 'ukraine' ) {
        console.log(`В країні ${ country} з зарплатні ${ salary } податок становитиме ${getMyTaxes.call(ukraine, salary)}`);
        myTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span> з зарплатні <span>${ salary }</span> податок становитиме <span>${getMyTaxes.call(ukraine, salary)}</span></p>`;
    } else if ( country === 'latvia' )  {
        console.log(`В країні ${ country} з зарплатні ${ salary } податок становитиме ${getMyTaxes.call(latvia, salary)}`);
        myTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span> з зарплатні <span>${ salary }</span> податок становитиме <span>${getMyTaxes.call(latvia, salary)}</span></p>`;
    } else if ( country === 'litva' ) {
        console.log(`В країні ${ country} з зарплатні ${ salary } податок становитиме ${getMyTaxes.call(litva, salary)}`);
        myTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span> з зарплатні <span>${ salary }</span> податок становитиме <span>${getMyTaxes.call(litva, salary)}</span></p>`;
    }
});

// 3. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes ( ) {
    return (this.tax * this.middleSalary).toFixed(2);
}

const middleTaxesForm = document.forms.middleTaxesForm;
const middleTaxesOutput = document.querySelector("#middleTaxesOutput");

middleTaxesForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const country = middleTaxesForm[0].value;
    if ( country === 'ukraine' ) {
        console.log(`В країні ${ country} в середньому платять податків ${getMiddleTaxes.call(ukraine)}`);
        middleTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  в середньому платять податків <span>${getMiddleTaxes.call(ukraine)}</span></p>`;
    } else if ( country === 'latvia' )  {
        console.log(`В країні ${ country}  в середньому платять податків ${getMiddleTaxes.call(latvia)}`);
        middleTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  в середньому платять податків <span>${getMiddleTaxes.call(latvia)}</span></p>`;
    } else if ( country === 'litva' ) {
        console.log(`В країні ${ country}  в середньому платять податків ${getMiddleTaxes.call(litva)}`);
        middleTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  в середньому платять податків <span>${getMiddleTaxes.call(litva)}</span></p>`;
    }
});

// 4. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes ( ) {
    return (this.tax * this.middleSalary * this.vacancies);
}

const totalTaxesForm = document.forms.totalTaxesForm;
const totalTaxesOutput = document.querySelector("#totalTaxesOutput");

totalTaxesForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const country = totalTaxesForm[0].value;
    if ( country === 'ukraine' ) {
        console.log(`В країні ${ country} всього платять податків ${getTotalTaxes.call(ukraine)}`);
        totalTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  всього платять податків <span>${getTotalTaxes.call(ukraine)}</span></p>`;
    } else if ( country === 'latvia' )  {
        console.log(`В країні ${ country}  всього платять податків ${getTotalTaxes.call(latvia)}`);
        totalTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  всього платять податків <span>${getTotalTaxes.call(latvia)}</span></p>`;
    } else if ( country === 'litva' ) {
        console.log(`В країні ${ country}  всього платять податків ${getTotalTaxes.call(litva)}`);
        totalTaxesOutput.innerHTML = `<p>В країні <span>${ country}</span>  всього платять податків <span>${getTotalTaxes.call(litva)}</span></p>`;
    }
});

// 5. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes; для виводу в консоль кожні 10 секунд використайте setInterval

function getMySalary ( country ) {
    const randomSalaryObj = {};
    const randomNumber = Math.floor( Math.random() * ( 2000 - 1500 ) + 1500 );
    randomSalaryObj.salary = randomNumber;
    randomSalaryObj.taxes = Number((randomSalaryObj.salary - randomSalaryObj.salary * country.tax).toFixed(2));
    randomSalaryObj.profit = Number((randomSalaryObj.salary - randomSalaryObj.taxes).toFixed(2));
    console.log(randomSalaryObj);
    return randomSalaryObj;
}
const mySalaryForm = document.forms.mySalaryForm;
const mySalaryOutput = document.querySelector("#mySalaryOutput");

mySalaryForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const country = totalTaxesForm[0].value;
    mySalaryOutput.innerHTML = `<p> Ви обрали країну  <span>${ country}</span>. Результат роботи фукції можете переглянути в <span>консолі</span>.`;
    if ( country === 'ukraine' ) {
        setInterval(getMySalary, 10000, ukraine);
    } else if ( country === 'latvia' )  {
        setInterval(getMySalary, 10000, latvia);
    } else if ( country === 'litva' ) {
        setInterval(getMySalary, 10000, litva);
    }
});
