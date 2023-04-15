function showData ( container, task, answer ) {

    const item = document.createElement("span");

    item.textContent = `${ task } -> ${ answer }`;

    container.append(item);

    return container

}

// 1 Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3

function* createIdGenerator() {
    let i = 1;
    while(true)
        yield i++;
}

const idGenerator = createIdGenerator();

const nextOutput = document.querySelector("#nextOutput");

const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", ( e ) => {

    e.preventDefault();

    const nextValue = idGenerator.next().value;

    showData(nextOutput, 'idGenerator.next().value', nextValue);

});


// 2. Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. Працювати генератор буде наступним чином:
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12

const upBtn = document.querySelector("#upBtn");
