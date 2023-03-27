// 1. У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {

    constructor( university, course, fullName ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    // 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    
    getInfo() {
        const info = `Студент ${ this.course }го курсу ${ this.university }, ${ this.fullName }`;
        return info
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
