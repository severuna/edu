const showField = ( idInput, typeInput ) => {

    const field = document.createElement("div");

    field.className = "field flex-row";

    const label = document.createElement("label");

    label.setAttribute("for", idInput);

    label.className = "field-desc";

    const input = document.createElement("input");

    input.type = typeInput;

    input.id = idInput;

    field.append(label);

    field.append(input);

    return field;

}

export default showField;
