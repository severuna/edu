const showTask = ( content, number ) => {

    const task = document.createElement("h2");

    task.className = "task";

    const num = document.createElement("span");

    num.textContent = number;

    task.append(num);

    task.textContent += content;

    return task;

}

export default showTask;