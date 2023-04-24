const formHandler = ( form ) => {

    form.addEventListener("submit", ( e ) => {

        e.preventDefault();

        const formValue = form[0].value;

        console.log(`значення обраного поля форми - ${ formValue }`);

    });

    form.addEventListener("reset", ( e ) => {

        e.preventDefault();

        alert(`Обране значення скинуто.`);

    });

};

export default formHandler;