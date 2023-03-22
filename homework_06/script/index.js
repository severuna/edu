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

const showProp = ( propName, prop ) => {
    const propItem = document.createElement("p");
    propItem.textContent = `${ propName } : ${ prop }`;
    return propItem
}
const showSub = ( subName, sub ) => {
    const subContainer = document.createElement("div");
    const subTitle = document.createElement("p");
    subTitle.textContent = subName;
    subContainer.append(subTitle);
    subContainer.className = "flex-column";
    for ( const subName in sub ) {
        subContainer.append(showProp(subName, sub[subName]));
    }
    return subContainer
}


const showDataElem = ( dataElem ) => {
    const dataElemContainer = document.createElement("div");
    dataElemContainer.classList = "flex-column";
    for ( const prop in dataElem ) {
        if (prop != 'subjects') {
            dataElemContainer.append(showProp(prop, dataElem[prop]));
        }
        if (prop === 'subjects') {
            dataElemContainer.append(showSub(prop, dataElem[prop]));
        }
    }
    return dataElemContainer
}

const showDataArr = ( arr , container) => {
    arr.forEach(element => {
        container.append(showDataElem(element))
    });
    return container
}

showDataArr(students, dataArr)