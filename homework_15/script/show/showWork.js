export const showWork = ( title, container, dataArr ) => {

    container.innerHTML = '';

    const workTitle = document.createElement("h2");

    workTitle.className = "title";

    workTitle.textContent = title;

    container.append(workTitle);

    for ( let i = 1; i < dataArr.length; i++ ) {

        const item = document.createElement("div");

        item.className = 'item flex-column';

        const taskNum = dataArr[i].id;

        const taskTxt = dataArr[i].txt;

        const task = document.createElement("subtitle");

        task.innerHTML = `<span>${ taskNum }.</span> ${ taskTxt}`;

        item.append(task);

        container.append(item);

    }

    return container;

}
