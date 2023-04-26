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

        const task = document.createElement("h3");

        task.className = "subtitle";

        task.innerHTML = `<span>${ taskNum }.</span> ${ taskTxt}`;

        item.append(task);

        const answer = document.createElement("p");

        answer.className = "subtitle";

        answer.innerHTML = dataArr[i].answer;

        item.append(answer);

        container.append(item);

    }

    return container;

}
