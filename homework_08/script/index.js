// 1. У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {

    constructor( university, course, fullName ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = []
    }

    // 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    
    getInfo() {
        const info = `Студент <span>${ this.course }го</span> курсу <span>${ this.university }</span>, <span>${ this.fullName }</span>`;
        return info
    }
    // 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    
    get marks() {
        return this._marks;
    }

    // 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

    set marks( value ) {
        this._marks.push(value);
        return [...this._marks]
    }

}

const showClass = ( ) => {
    const container = document.createElement("p");
    container.innerHTML = `<pre>class <span>Student</span> {
        
        constructor( <span>university</span>, <span>course</span>, <span>fullName</span> ) {
            this.<span>university</span> = <span>university</span>;
            this.<span>course</span> = <span>course</span>;
            this.<span>fullName</span> = <span>fullName</span>;
        }
    
    }</pre>`
    return container
}

const studentOutput = document.querySelector("#studentOutput");
studentOutput.append(showClass());

const userStudent = new Student();

const infoForm = document.forms.infoForm;
const infoOutput = document.querySelector("#infoOutput");

infoForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    userStudent.fullName = infoForm[0].value;
    userStudent.course = infoForm[1].value;
    userStudent.university = infoForm[2].value;
    infoOutput.innerHTML = `<p>${userStudent.getInfo()}</p>`;
});


const setMarkForm = document.forms.setMarkForm;
const setMarkOutput = document.querySelector("#setMarkOutput");
