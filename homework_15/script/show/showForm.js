const showForm = ( formId ) => {

    const form = document.createElement("form");

    form.id = formId;

    form.className = 'form flex-column';

    return form;

}

export default showForm;