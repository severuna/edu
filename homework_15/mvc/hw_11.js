document.addEventListener("DOMContentLoaded", ( ) => {
    
    async function getRandomChinese(length) {

        let randomChinese = '';

        let count = length;

        while ( count >= 1 ) {

            const sign = Number(String(Date.now()).substring(String(Date.now()).length - 5, String(Date.now()).length));

            randomChinese += String.fromCharCode(sign);

            setTimeout(count--, 50);

        }

        return randomChinese
    }
    
    console.log(getRandomChinese(5));
    
});
