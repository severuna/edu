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

const answerDataSix = [
    {
        id: 1,
        answer: [
            students
        ]
    },
    {
        id: 2,
        answer: [
            studentSub
        ]
    },
    {
        id: 3,
        answer: [
            averageMark
        ]
    },
    {
        id: 4,
        answer: [
            studentInfo
        ]
    },
    {
        id: 5,
        answer: [
            studentNames
        ]
    },
    {
        id: 6,
        answer: [
            bestStudent
        ]
    },
    {
        id: 7,
        answer: [
            wordLetters
        ]
    }
];

export default answerDataSix;
