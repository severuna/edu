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


setMarkForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const addedMark = setMarkForm[0].value;
    userStudent.marks = Number(addedMark);
    setMarkOutput.innerHTML = `<p>Оцінку <span>${ addedMark }</span> додано.</p>`;
});

const getMarksBtn = document.querySelector("#getMarks");
const getMarksOutput = document.querySelector("#getMarksOutput");

getMarksBtn.addEventListener("click", ( e ) => {
    e.preventDefault();
    const getMarksMessage = document.createElement("p");
    getMarksMessage.textContent = userStudent.marks;
    getMarksOutput.append(getMarksMessage);
});

const getAverageBtn = document.querySelector("#getAverage");
const averageMarkOutput =  document.querySelector("#averageMarkOutput");


getAverageBtn.addEventListener("click", ( e ) => {
    e.preventDefault();
    if (userStudent.getAverageMark().length == 0) {
        averageMarkOutput.innerHTML = `<p>Bам потрібно додати вище хоча б <span>одну оцінку</span></p>`;
    } else {
        averageMarkOutput.innerHTML = `<p>Середня <span>оцінка</span> - <span>${ userStudent.getAverageMark() }</span></p>`;
    }
});

const setDismissBtn = document.querySelector("#setDismissBtn");
const dismissOutput = document.querySelector("#dismissOutput");

setDismissBtn.addEventListener("click", ( e ) => {
    e.preventDefault();
    userStudent.dismiss();
    dismissOutput.innerHTML = `<p>Студента виключено</p>`;
});

