// 1 Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3

const nextOutput = document.querySelector("#nextOutput");

const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", ( e ) => {

    e.preventDefault();

    console.log('click nextBtn');

});
