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

const answerDataNine = [
    {
        id: 1,
        answer: [
            blocks
        ]
    }
];

export default answerDataNine;
