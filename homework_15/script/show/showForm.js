const showForm = ( formId ) => {

    const form = document.createElement("form");

    form.className = "form flex-column";

    form.id = formId;

    return form;

}

export default showForm;
