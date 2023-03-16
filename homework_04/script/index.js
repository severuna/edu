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

arrsOutput.append(showArr(students, 'students'))
arrsOutput.append(showArr(themes, 'themes'))
arrsOutput.append(showArr(marks, 'marks'))