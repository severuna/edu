// 1
const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: 
            {
                math: [4, 4, 3, 4],
                algorithms: [3, 3, 3, 4, 4, 4],
                data_science: [5, 5, 3, 4]
            }
    }, 
    {
        name: "Victor",
        course: 4,
        subjects: 
            {
                physics: [5, 5, 5, 3],
                economics: [2, 3, 3, 3, 3, 5],
                geometry: [5, 5, 2, 3, 5]
            }
    }, 
    {
        name: "Anton",
        course: 2,
        subjects: 
            {
                statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
                english: [5, 3],
                cosmology: [5, 5, 5, 5]
            }
    }
];

// 2
const getSubjects = ( student, arr ) => {
    let returnArr = []
    arr.forEach( el => {
        if (el.name == student) {
            for ( const elem in el.subjects ) {
                let str = elem.split('_').join(" ")
                returnArr.push(str[0].toUpperCase() + str.slice(1));
            }
        }
    });
    return returnArr
}
// temp val 
const studentSub = `sub list`;

// 3
const getAverageMark = ( student, arr ) => {
    let sumMark = 0;
    let count = 0;
    let averageMark = 0;
    arr.forEach( el => {
        if (el.name == student) {
            for (const ch in el.subjects) {
                el.subjects[ch].forEach( elem => {
                    sumMark += elem;
                    count++;
                })
            }
        }
    });
    averageMark = (sumMark / count).toFixed(2);
    return averageMark
}
// temp val
const averageMark = `average`;

// 4
const getStudentInfo = ( student, arr ) => {
    const studentInfo = {};
    arr.forEach( el =>{
        if (el.name == student) {
            studentInfo.course = el.course
        }
    });
    studentInfo.name = student;
    studentInfo.averageMark = getAverageMark(student, arr)
    return studentInfo
}
// temp val
const studentInfo = `student info`;

// 5
const getStudentsNames = ( arr ) => {
    const studentsNamesArr = [];
    arr.forEach( el => {
        studentsNamesArr.push(el.name)
    });
    studentsNamesArr.sort();
    return studentsNamesArr
}
// temp val
const studentNames = `names list`;

// 6
const getBestStudent = ( arr ) => {
    let bestStudent = '';
    for (let i = 1; i < arr.length; i++) {
        if (getAverageMark(arr[i].name, arr) > getAverageMark(arr[i - 1].name, arr)) {
            bestStudent = arr[i].name
        } else {
            bestStudent = arr[i - 1].name
        }
    }
    return bestStudent
}
// temp val
const bestStudent = `best student`;

// 7
const calculateWordLetters = ( word ) => {
    const symbols = new Map();
    for (const w of word) {
        const currCount = symbols.get(w) || 0;
        symbols.set(w, currCount + 1);
    }
    const calculateObj = Object.fromEntries(symbols);
    return calculateObj
}
// temp val
const wordLetters = `word res`;

export const taskDataSix = [
    {
        id: 1,
        txt: `Для початку необхідно створити наступний масив (ви можете його просто скопіювати):
        <br>
        const <span>students</span> = [
        <br>
        {
        <br>
        <span>name</span>: "Tanya",
        <br>
        <span>course</span>: 3,
        <br>
        <span>subjects</span>: {
            <br>
            <span>math</span>: [4, 4, 3, 4],
            <br>
            <span>algorithms</span>: [3, 3, 3, 4, 4, 4],
            <br>
            <span>data_science</span>: [5, 5, 3, 4]
            <br>
            }
            <br>
        }, 
        <br>
        {
            <br>
            <span>name</span>: "Victor",
            <br>
            <span>course</span>: 4,
            <br>
            <span>subjects</span>: {
                <br>
                <span>physics</span>: [5, 5, 5, 3],
                <br>
                <span>economics</span>: [2, 3, 3, 3, 3, 5],
                <br>
                <span>geometry</span>: [5, 5, 2, 3, 5]
                <br>
            }
            <br>
        }, 
        <br>
        {
            <br>
            <span>name</span>: "Anton",
            <br>
            <span>course</span>: 2,
            <br>
            <span>subjects</span>: {
                <br>
                <span>statistics</span>: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
                <br>
                <span>english</span>: [5, 3],
                <br>
                <span>cosmology</span>: [5, 5, 5, 5]
                <br>
            }
            <br>
        }
        ];
        `,
        answer: [
            students
        ]
    },
    {
        id: 2,
        txt: `Створіть функцію <span>getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]</span> - яка повертає список предметів для конкретного студента.`,
        answer: [
            studentSub
        ]
    },
    {
        id: 3,
        txt: `Створіть функцію <span>getAverageMark(students[0]) --> 3.79</span> – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.`,
        answer: [
            averageMark
        ]
    },
    {
        id: 4,
        txt: `Створіть функцію <span>getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}</span> – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка.`,
        answer: [
            studentInfo
        ]
    },
    {
        id: 5,
        txt: `Ствроіть функцію <span>getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]</span> – яка повертає імена студентів у алфавітному порядку.`,
        answer: [
            studentNames
        ]
    },
    {
        id: 6,
        txt: `Створіть функцію <span>getBestStudent(students) --> "Anton"</span> – яка повертає  кращого студента зі списку по показнику середньої оцінки.`,
        answer: [
            bestStudent
        ]
    },
    {
        id: 7,
        txt: `Створіть функцію <span>calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }</span> – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень`,
        answer: [
            wordLetters
        ]
    },
];
