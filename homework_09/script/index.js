document.addEventListener("DOMContentLoaded", ( ) => {
    const root = document.querySelector("#root");

    const generateBlocks = ( container ) => {
        for ( let i = 0; i < 25 ; i++ ) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.style.backgroundColor = `rgb(${Math.floor( Math.random() * ( 250 - 0 ) + 0 )}, ${Math.floor( Math.random() * ( 250 - 0 ) + 0 )}, ${Math.floor( Math.random() * ( 250 - 0 ) + 0 )})`;
            container.append(item);
        }
    }
    generateBlocks(root);
});