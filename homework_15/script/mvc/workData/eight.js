// 1. У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {

    constructor( university, course, fullName ) {
        this.university = university;
        this.course = course;
        this.dismissing = false;
        this.fullName = fullName;
        this._marks = []
    }

    // 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    
    getInfo() {
        const info = `Студент <span>${ this.course }го</span> курсу <span>${ this.university }</span>, <span>${ this.fullName }</span>`;
        return info
    }

    // 4. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

    getAverageMark() {
        if(this._marks.length === 0) {
            return this._marks
        }
        let count = 0;
        let sum = 0;
        this._marks.forEach(el => {
            sum += el;
            count++
        });
        let averageMark = sum / count;
        return averageMark
    }

    // 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

    dismiss() {
        return this.dismissing = true
    }

    // 7. Створіть метод this.recover, який дозволить поновити студента

    recover() {
        return this.dismissing = false
    }

    // 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    
    get marks() {
        if(this.dismissing) {
            return null
        } else {
            if ( this._marks.length == 0) {
                return `Наразі оцінки відсутні. Ви можете додати їх в формі нижче.`;
            } else {
                return this._marks;
            }
        }
    }

    // 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

    set marks(value) {
        if(!this.dismissing) {
            this._marks.push(value);
            return this._marks
        }
    }

}

// 1
const classStudent = `<pre>class <span>Student</span> {
        
    constructor( <span>university</span>, <span>course</span>, <span>fullName</span> ) {
        this.<span>university</span> = <span>university</span>;
        this.<span>course</span> = <span>course</span>;
        this.<span>fullName</span> = <span>fullName</span>;
    }

}</pre>`;

// create user student
const userStudent = new Student();

// 2
userStudent.fullName = `student name`;
userStudent.course = `student course`;
userStudent.university = `student university`;

// 3, 4
user.marks = `user marks`;

// 5
const averageMark = `середня оцінка`;

// 6
const userStudentDismiss = `відраховано`;

// 7
const userStudentRecover = `поновлено`;

const taskDataEight = [
    {
        id: 1,
        txt: `У цьому завданні вам необхідно створити клас <span>Student</span> та розробляти методи всередині цього класу. У стдентів повинні бути наступні властивості: <span>university, course, fullName</span>, вони передаються при створенні студента(в конструктор).`,
        answer: [
            classStudent
        ]
    },
    {
        id: 2,
        txt: `Створіть метод <span>this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер"</span>, метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.`,
        answer: [
            userStudent.fullName,
            userStudent.course,
            userStudent.university
        ]
    },
    {
        id: 3,
        txt: `Створіть геттер оцінок <span>this.marks</span>, який повертає масив оцінок студента <span>[5, 4, 4, 5]</span>`,
        answer: [
            user.marks
        ]
    },
    {
        id: 4,
        txt: `Створіть сеттер оцінок <span>this.marks = 5</span>, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив <span>this.marks -> [5, 4, 4, 5, 5]</span>`,
        answer: [
            user.marks
        ]
    },
    {
        id: 5,
        txt: `Створіть метод отримання середнього балу <span>this.getAverageMark() -> 4.6</span>`,
        answer: [
            averageMark
        ]
    },
    {
        id: 6,
        txt: `Створіть метод <span>this.dismiss</span>, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди <span>null</span> замість масиву оцінок)`,
        answer: [
            userStudentDismiss
        ]
    },
    {
        id: 7,
        txt: `Створіть метод <span>this.recover</span>, який дозволить поновити студента`,
        answer: [
            userStudentRecover
        ]
    }
];

export default taskDataEight;
