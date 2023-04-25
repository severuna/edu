export const showWork = ( title, container ) => {

    container.innerHTML = '';

    const workTitle = document.createElement("h2");

    workTitle.className = "title";

    workTitle.textContent = title;

    container.append(workTitle);

    return container;

}
