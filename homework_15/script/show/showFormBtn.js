const showFormBtn = ( ) => {

    const field = document.createElement("div");

    field.className = "field flex-row";

    const submitBtn = document.createElement("button");

    submitBtn.type = "submit";

    submitBtn.className = 'btn';

    const resetBtn = document.createElement("button");

    resetBtn.type = "reset";

    resetBtn.className = 'btn';

    field.append(submitBtn);

    field.append(resetBtn);

    return field;

}

export default showFormBtn;
