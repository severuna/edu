const output = document.querySelector("#output");

const charactersForm = document.forms.showCharacters;

charactersForm.addEventListener("submit", ( e )=> {

    e.preventDefault();

    const characterInput = charactersForm[0].value;

    getData(characterInput, 'characters', '');

});

charactersForm.addEventListener("reset", ( e )=> {

    e.preventDefault();

    const characterInput = charactersForm[0].value;

    getData(characterInput, 'characters', '?format=wookiee');

});

const planetsForm = document.forms.showPlanets;

planetsForm.addEventListener("submit", ( e )=> {

    e.preventDefault();

    const planetInput = planetsForm[0].value;

    getData(planetInput, 'planets', '');
        
});

planetsForm.addEventListener("reset", ( e )=> {

    e.preventDefault();

    const planetInput = planetsForm[0].value;

    getData(planetInput, 'planets', '?format=wookiee');

});

function getImg ( data, name ) {

    let src = '';

    data.forEach( el => {

        if ( el.name == name ) {

            src = el.src;

        } else if ( el.whrascwo == name) {

            src = el.src;

        }

    });

    return src

}

function showItem ( element ) {

    const item = document.createElement("div");

    item.className = "item flex-column";

    const itemImg = document.createElement("img");

    itemImg.classList.add("item-img");

    if ( element.whrascwo != undefined) {

        itemImg.src = getImg( imgData, element.whrascwo);

    } else {

        itemImg.src = getImg( imgData, element.name);

    }
    
    item.append(itemImg);

    const itemName = document.createElement("h2");

    itemName.className = "subtitle";
    
    if ( element.whrascwo != undefined) {

        itemName.textContent = element.whrascwo;

    } else {

        itemName.textContent = element.name;

    }
        
    item.append(itemName);

    if( element.gender || element.rrwowhwaworc ) {

        const itemGender = document.createElement("div");
    
        itemGender.className = "item-gender flex-row";
    
        const itemGenderText = document.createElement("p");
    
        itemGenderText.classList.add("field-label");
    
        itemGenderText.textContent = `Gender: `;
    
        itemGender.append(itemGenderText);

        const itemGenderPic = document.createElement("img");

        itemGenderPic.classList.add("item-gender__svg");

        if( element.gender == 'male' || element.rrwowhwaworc =='scraanwo') {

            itemGenderPic.src = './img/man-svg.svg';

        } else if ( element.gender == 'female' || element.rrwowhwaworc == 'wwwoscraanwo' ) {

            itemGenderPic.src = './img/woman-svg.svg';

        } else if (  element.gender == 'n/a' || element.rrwowhwaworc == 'wh/ra' ) {

            itemGenderPic.src = './img/unknown2-svg.svg';

        } else {

            itemGenderPic.src = './img/hermaphrodite-svg.svg';

        }
        
        itemGender.append(itemGenderPic);

        item.append(itemGender);

    }

    output.append(item);

}

function getDetails ( data ) {

    const req = async url => {

        const data = await fetch(url);

        return data.json();

    }

    req(data).then(showItem)
}
    
function showData ( data, selector, wookiee ) {

    const title = document.querySelector("#title");

    title.classList.add("title");

    title.textContent = `${ data.title }. ${ selector }`;

    output.innerHTML = '';

    data[selector].forEach( el => {

        let k = el;

        if ( String(wookiee).includes('?format=wookiee') ) {

            k += wookiee;

        } 

        getDetails(k)

    });

    return title
}
    
function getData ( num, selector, wookiee ) {

    const req = async url => {

        const data = await fetch(url);

        return data.json();

    }

    let swapiLink = `https://swapi.dev/api/films/${ num }/`;

    req(swapiLink).then(res => showData( res, selector, wookiee ));
    
}
