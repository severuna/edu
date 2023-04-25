const showWork = ( title, taskContainer, container ) => {

    container.innerHTML = '';

    const workTitle = document.createElement("h2");

    workTitle.classList.add("title");

    container.append(title);

    container.append(taskContainer);

    return container;

}

export default showWork;