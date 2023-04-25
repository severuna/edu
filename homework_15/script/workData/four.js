// 1
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// const arrsOutput = document.querySelector("#arrsOutput");

// const showArr = (arr, arrName) => {
//     const arrStr = document.createElement('p');
//     arrStr.textContent = `const ${arrName} = [ ${arr} ]`;
//     return arrStr
// }

// arrsOutput.append(showArr(students, 'students'));
// arrsOutput.append(showArr(themes, 'themes'));
// arrsOutput.append(showArr(marks, 'marks'));

// 2
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
// temp val
const pairs =  `pairs`;
// const pairs = getPairs(students);
// const pairOutput = document.querySelector("#pairOutput");

// const showNestArr = (arr, arrName) => {
//     const arrMain = document.createElement('p');
//     arrMain.textContent = `const ${arrName} = [ `;
//     arr.forEach(el => {
//         arrMain.textContent += ` [ ${el} ], `
//     });
//     arrMain.textContent += ` ]`;
//     return arrMain
// }

// 3
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
// temp val
const project = `project`;
// const project = setProject(pairs, themes);
// const projectOutput =  document.querySelector("#projectOutput");
// projectOutput.append(showNestArr(project, 'project'));
// console.log(`project - ${project}`);

// 4
const setMark = (student, mark) => {
    const marks = student.reduce((acc, el, i) => {
        acc.push([el, mark[i]]);
        return acc;
    }, []);
    return marks;
}
// temp val
const test = `test`;
// const test = setMark(students, marks);

// 5
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
// temp val
const group = `group;`
// const group = setRandomMark(project);

export const taskDataFour = [
    {
        id: 0,
        title: `Homework 04. Масиви`
    },
    {
        id: 1,
        txt: `Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
        <br>
        <span>const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];<span>
        <br>
        <span>const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];</span>
        <br>
        <span>const marks = [4, 5, 5, 3, 4, 5];</span>`,
        answer: [
            students,
            themes,
            marks
        ]
    },
    {
        id: 2,
        txt: `Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.`,
        answer: [
            pairs
        ]
    },
    {
        id: 3,
        txt: `Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.`,
        answer: [
            project
        ]
    },
    {
        id: 4,
        txt: `Зіставте оцінки(marks) зі студентом(students):`,
        answer: [
            test
        ]
    },
    {
        id: 5,
        txt: `Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив):`,
        answer: [
            group
        ]
    }
];
