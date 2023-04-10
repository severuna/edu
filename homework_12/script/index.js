document.addEventListener("DOMContentLoaded", ( ) => {

    const output = document.querySelector("#output");

    const charactersForm = document.forms.showCharacters;

    charactersForm.addEventListener("submit", ( e )=> {

        e.preventDefault();

        console.log('charactersForm submit');

        const characterInput = charactersForm[0].value;

        console.log(`You have chosen movie number ${ characterInput }`);

    });

    const planetsForm = document.forms.showPlanets;

    planetsForm.addEventListener("submit", ( e )=> {

        e.preventDefault();

        console.log('planetsForm submit');

        const planetInput = planetsForm[0].value;

        console.log(`You have chosen movie number ${ planetInput }`);
        
    });
    
});
