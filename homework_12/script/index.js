document.addEventListener("DOMContentLoaded", ( ) => {

    const output = document.querySelector("#output");

    const charactersForm = document.forms.showCharacters;

    charactersForm.addEventListener("submit", ( e )=> {

        e.preventDefault();

        console.log('charactersForm submit');

        const characterInput = charactersForm[0].value;

        getData(characterInput);

        console.log(`You have chosen movie number ${ characterInput }`);

    });

    const planetsForm = document.forms.showPlanets;

    planetsForm.addEventListener("submit", ( e )=> {

        e.preventDefault();

        console.log('planetsForm submit');

        const planetInput = planetsForm[0].value;

        getData(planetInput);

        console.log(`You have chosen movie number ${ planetInput }`);
        
    });
    
    function showData ( data ) {
        const title = document.querySelector("#title");
        title.classList.add("title");
        title.textContent = data.title;
        data.characters.forEach( el => {
            console.log(el)
        });
        return title
    }
    
    function getData ( num ) {

        const req = async url => {

            const data = await fetch(url);

            return data.json();

        }

        let swapiLink = `https://swapi.dev/api/films/${ num }/`;

        req(swapiLink).then(showData)
    }

});
