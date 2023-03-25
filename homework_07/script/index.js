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
    return this.tax * salary
}
