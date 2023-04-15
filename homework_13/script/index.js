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

    console.log('click nextBtn');

});
