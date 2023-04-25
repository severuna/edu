const taskDataSix = [
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
        `
    },
    {
        id: 2,
        txt: `Створіть функцію <span>getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]</span> - яка повертає список предметів для конкретного студента.`
    },
    {
        id: 3,
        txt: `Створіть функцію <span>getAverageMark(students[0]) --> 3.79</span> – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.`
    },
    {
        id: 4,
        txt: `Створіть функцію <span>getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}</span> – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка.`
    },
    {
        id: 5,
        txt: `Ствроіть функцію <span>getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]</span> – яка повертає імена студентів у алфавітному порядку.`
    },
    {
        id: 6,
        txt: `Створіть функцію <span>getBestStudent(students) --> "Anton"</span> – яка повертає  кращого студента зі списку по показнику середньої оцінки.`
    },
    {
        id: 7,
        txt: `Створіть функцію <span>calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }</span> – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень`
    },
];

export default taskDataSix;
