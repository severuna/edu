document.addEventListener("DOMContentLoaded", ( ) => {
    
    window.addEventListener("keydown", ( e ) => {
        const key = document.querySelector(`div[data-key="${ e.keyCode }"]`);
        const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
    
});