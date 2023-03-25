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

