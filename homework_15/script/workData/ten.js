const play = document.addEventListener("DOMContentLoaded", ( ) => {

    window.addEventListener("keydown", ( e ) => {
    
        const keys = document.querySelectorAll(".item");
        keys.forEach( el => {
            el.classList.remove('play');
        });

        const key = document.querySelector(`div[data-key="${ e.keyCode }"]`);
        if (!key) return;

        const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

        key.classList.add('play');

    });
    
});

export const taskDataTen = [
    {
        id: 0,
        title: `Homework 10. Події`
    },
    {
        id: 1,
        txt: `Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук для кожної клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати).`,
        answer: [
            play
        ]
    }
];
