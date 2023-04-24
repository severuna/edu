// Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем), а також програма має вміти пропускати парні числа.
// Отримайте у користувача число(N) від якого ми будемо
// Отримати число можна за допомогою prompt.
// Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення N ЦІЛИМ числом.
// (Підказка: якщо при конвертації в ціле число ми отримали NaN – це
//  число нам не підходить)
// Отримайте у користувача число(M) до якого ми будемо складати
// (включно).
// Отримати число можна за допомогою prompt.
// Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення M ЦІЛИМ числом.
// (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходит)
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


let N;

do {
    N = +prompt('Введіть перше число, будь ласка. Воно повинно дорівнювати або бути більше 0.');
} while ( N < 0 || !Number.isInteger(N) );


console.log(`Перше число, що введене користвачем, - ${ N }.`);
document.querySelector("#first").textContent = N;


const numCheckMessage = `Число нам підходить.`;

console.log( numCheckMessage );
document.querySelector("#second").textContent = numCheckMessage;

let M;

do {
    M = +prompt(`Введіть друге число, будь ласка. Воно повинно бути більше першого числа (перше число, що ви ввели, - ${ N }).`);
} while ( M < N || !Number.isInteger(M) );

console.log(`Друге число, що введене користвачем, - ${ M }.`);
document.querySelector("#third").textContent = M;

console.log( numCheckMessage );
document.querySelector("#four").textContent = numCheckMessage;

const evenNumCheck = confirm('Чи враховувати парні числа? ОК - так, Cancel - ні.');

const evemNumMessage = `Ви обрали - ${ evenNumCheck }, тому числа ${ evenNumCheck ? ' будуть ' : ' не будуть' } враховані.`;

document.querySelector("#five").textContent = evemNumMessage;
console.log( evemNumMessage );

let sum = 0;

for ( let i = N ; i <= M ; i ++ ) {
    if ( evenNumCheck ) {
        sum += i;
    } else {
        if ( i % 2 != 0 ) {
            sum += i;
        }
    }
}

document.querySelector("#six").textContent = sum;
console.log (`Сума обраних чисел  ${ sum }`);
