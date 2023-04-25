const showTaskContainer = ( task ) => {

    const taskContainer = document.createElement("div");

    taskContainer.className = 'item flex-column';

    taskContainer.append(task);

    return taskContainer;

}

export default showTaskContainer;