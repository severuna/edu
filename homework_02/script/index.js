// Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем), а також програма має вміти пропускати парні числа.

// Отримайте у користувача число(N) від якого ми будемо
// Отримати число можна за допомогою prompt.
// Пам'ятайте, ЧИСЛО, не РЯДОК!
const N = +prompt('Введіть перше число, будь ласка');
console.log(`Перше число, введене користувачем, - ${N}`);

// Перевірте, чи є передане значення N ЦІЛИМ числом.
// (Підказка: якщо при конвертації в ціле число ми отримали NaN – це
//  число нам не підходить)
Number.isInteger(N) ? console.log(`Перше число нам підходить.`) : console.log(`Перше число нам не підходить.`);

// Отримайте у користувача число(M) до якого ми будемо складати
// (включно).
// Отримати число можна за допомогою prompt.
// Пам'ятайте, ЧИСЛО, не РЯДОК!
const M = +prompt('Введіть друге число, будь ласка (більше за перше!)');
console.log(`Друге число, введене користувачем, - ${M}`);

// Перевірте, чи є передане значення M ЦІЛИМ числом.
// (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходит)
Number.isInteger(M) ? console.log(`Друге число нам підходить.`) : console.log(`Друге число нам не підходить.`);

// Отримайте у користувача булевий параметр(true/false), який
// підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно,
// FALSE – не потрібно. Використовуйте функцію confirm

// Напишіть цикл, який буде складати числа від раніше отриманих
// N та M

// В циклі додайте перевірку – чи потрібно пропускати при
// складанні парні числа.
// (Використовуйте для цього if/else).
// Якщо парні числа потрібно пропускати не додавайте їх до суми.

// Виведіть результат