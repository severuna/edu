const showTaskContainer = ( task, answer ) => {

    const taskContainer = document.createElement("div");

    taskContainer.className = 'item flex-column';

    taskContainer.append(task);

    taskContainer.append(answer);

    return taskContainer;

}

export default showTaskContainer;