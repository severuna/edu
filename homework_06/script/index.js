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

const dataArr = document.querySelector("#dataArr");

const addBracket = ( brack, marginLeft ) => {
    const bracket = document.createElement("p");
    bracket.textContent = brack;
    bracket.style.marginLeft += marginLeft;
    return bracket
}

const showProp = ( propName, prop, marginLeft ) => {
    const propItem = document.createElement("p");
    propItem.style.marginLeft += marginLeft;
    propItem.textContent = `${ propName } : ${ prop } ,`;
    return propItem
}
const showSub = ( subName, sub ) => {
    const subContainer = document.createElement("div");
    const subTitle = document.createElement("p");
    subTitle.textContent = `${subName} : `;
    subContainer.append(subTitle);
    subContainer.className = "flex-column";
    subTitle.style.marginLeft += '10px';
    subContainer.append(addBracket(' { ', '30px'));
    for ( const subName in sub ) {
        subContainer.append(showProp(subName, sub[subName], '30px'));
    }
    subContainer.append(addBracket('}, ', '30px'));
    return subContainer
}


const showDataElem = ( dataElem ) => {
    const dataElemContainer = document.createElement("div");
    dataElemContainer.classList = "flex-column";
    dataElemContainer.append(addBracket(' { ', '10px'));
    for ( const prop in dataElem ) {
        if (prop != 'subjects') {
            dataElemContainer.append(showProp(prop, dataElem[prop], '10px'));
        }
        if (prop === 'subjects') {
            dataElemContainer.append(showSub(prop, dataElem[prop]));
        }
    }
    dataElemContainer.append(addBracket('}, ', '10px'));
    return dataElemContainer
}

const showDataArr = ( arr , container) => {
    container.append(addBracket('const students = [ ', 0));
    arr.forEach(element => {
        container.append(showDataElem(element))
    });
    container.append(addBracket(' ]', 0));
    return container
}

showDataArr(students, dataArr);

// 2. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента

const getSubjects = ( student, arr ) => {
    let returnArr = []
    arr.forEach( el => {
        if (el.name == student) {
            for ( const elem in el.subjects ) {
                let str = elem.split('_').join(" ");
                // returnArr.push(String(elem)[0].toUpperCase() + String(elem).slice(1));
                returnArr.push(str[0].toUpperCase() + str.slice(1));
            }
        }
    });
    return returnArr
}

const subjectsForm = document.forms.subjectsForm;
const subjectsOutput = document.querySelector("#subjectsOutput");

subjectsForm.addEventListener("submit", ( e ) => {
    e.preventDefault();
    const selectStudent = subjectsForm[0].value;
});

console.log(getSubjects('Tanya', students))