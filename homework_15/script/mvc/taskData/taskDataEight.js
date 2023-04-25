const taskDataEight = [
    {
        id: 1,
        txt: `У цьому завданні вам необхідно створити клас <span>Student</span> та розробляти методи всередині цього класу. У стдентів повинні бути наступні властивості: <span>university, course, fullName</span>, вони передаються при створенні студента(в конструктор).`
    },
    {
        id: 2,
        txt: `Створіть метод <span>this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер"</span>, метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.`
    },
    {
        id: 3,
        txt: `Створіть геттер оцінок <span>this.marks</span>, який повертає масив оцінок студента <span>[5, 4, 4, 5]</span>`
    },
    {
        id: 4,
        txt: `Створіть сеттер оцінок <span>this.marks = 5</span>, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив <span>this.marks -> [5, 4, 4, 5, 5]</span>`
    },
    {
        id: 5,
        txt: `Створіть метод отримання середнього балу <span>this.getAverageMark() -> 4.6</span>`
    },
    {
        id: 6,
        txt: `Створіть метод <span>this.dismiss</span>, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди <span>null</span> замість масиву оцінок)`
    },
    {
        id: 7,
        txt: `Створіть метод <span>this.recover</span>, який дозволить поновити студента`
    }
];

export default taskDataEight;
