const showFormFiled = ( text, typeInput, id ) => {

    const field = document.createElement("div");

    field.className = 'field flex-row';

    const label = document.createElement("label");

    label.setAttribute('for', id);

    label.textContent = text;

    const input = document.createElement("input");

    input.type = typeInput;

    field.append(label);

    field.append(input);

    return field;

}

export default showFormFiled;