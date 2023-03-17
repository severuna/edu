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

console.log(pairs);