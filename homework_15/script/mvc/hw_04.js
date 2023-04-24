// Перед виконанням цього домашнього завдання необхідно
// створити 3 масиви:
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const arrsOutput = document.querySelector("#arrsOutput");

const showArr = (arr, arrName) => {
    const arrStr = document.createElement('p');
    arrStr.textContent = `const ${arrName} = [ ${arr} ]`;
    return arrStr
}

arrsOutput.append(showArr(students, 'students'));
arrsOutput.append(showArr(themes, 'themes'));
arrsOutput.append(showArr(marks, 'marks'));

console.log(`students - ${students}`);
console.log(`themes - ${themes}`);
console.log(`marks - ${marks}`);

// Розділіть студентів на пари(хлопець + дівчина) для работи над
// проєктом.

const getPairs = (arr) => {
    const women = [];
    const men = [];
    arr.forEach(element => {
        element.endsWith("а") ? women.push(element) : men.push(element)
    });
    const sortArr = women.reduce((acc, el, i) => {
        acc.push([el, men[i]]);
        return acc;
      }, []);
    return sortArr
}

const pairs = getPairs(students);
const pairOutput = document.querySelector("#pairOutput");

const showNestArr = (arr, arrName) => {
    const arrMain = document.createElement('p');
    arrMain.textContent = `const ${arrName} = [ `;
    arr.forEach(el => {
        arrMain.textContent += ` [ ${el} ], `
    });
    arrMain.textContent += ` ]`;
    return arrMain
}

pairOutput.append(showNestArr(pairs, 'pairs'))
console.log(`pairs - ${pairs}`);

// Зіставте пари з попереднього завдання та теми проєктів, над
// якими студенти будуть працювати.

const setProject = (arr, project) => {
    let projectArr = arr;
    let i = 0;
    projectArr.forEach( el => {
        el[0] = el[0] + ' i ' + el[1];
        el.splice(1, 1);
        el.push(project[i]);
        i++;
    });
    return projectArr
}

const project = setProject(pairs, themes);

const projectOutput =  document.querySelector("#projectOutput");
projectOutput.append(showNestArr(project, 'project'));
console.log(`project - ${project}`);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати
const setMark = (student, mark) => {
    const marks = student.reduce((acc, el, i) => {
        acc.push([el, mark[i]]);
        return acc;
    }, []);
    return marks;
}

const test = setMark(students, marks);

const testOutput = document.querySelector("#testOutput");

testOutput.append(showNestArr(test, 'test'));
console.log(`test - ${test}`);

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
// (тут функція буде не чистою, але не повинна мутувати массив):

const randomMark = () => {
    let rand = 1  + Math.random() * (5 - 1)
    return Math.round(rand);
}

const setRandomMark = (arr) => {
    const markArr = [];
    arr.forEach(element => {
        element.push(randomMark())
        markArr.push(element)
    });
    return markArr
}

const group = setRandomMark(project);

const groupOutput = document.querySelector("#groupOutput");

groupOutput.append(showNestArr(group, 'group'));
console.log(`group - ${group}`);
