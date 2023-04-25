const blocks = ( ) => {

    const root = document.querySelector("#root");

    const generateBlocks = ( container ) => {
        for ( let i = 0; i < 25 ; i++ ) {
            const block = document.createElement("div");
            block.classList.add("block");
            container.append(block);
        }
    }
    generateBlocks(root);

    (function generateBlocksInterval( ) {
        [...document.querySelectorAll(".block")].forEach( block => {
            block.style.backgroundColor = `rgb(${Math.floor( Math.random() * ( 250 - 0 ) + 0 )}, ${Math.floor( Math.random() * ( 250 - 0 ) + 0 )}, ${Math.floor( Math.random() * ( 250 - 0 ) + 0 )})`;
        });
        setTimeout(generateBlocksInterval, 1000);
    })();

}

export const taskDataNine = [
    {
        id: 1,
        txt: `Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
        <br>
        Щоб квадрати з'явились на сторінці, необхідно викликати функцію <span>generateBlocks();<span>.
        <br>
        Зробіть так, щоб квадрати змінювали колір раз на секунду.
        <br>
        Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію <span>generateBlocksInterval();</span>.
        `,
        answer: [
            blocks
        ]
    }
];
