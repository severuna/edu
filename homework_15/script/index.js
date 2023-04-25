console.log('the page is loaded');

import formHandler from "./handler/formHandler.js";
import getElement from "./handler/getElement.js";
import showWork from "./show/showWork.js";
import showTaskContainer from "./show/showTaskContainer.js";
import showTask from "./show/showTask.js";
import showAnswer from "./show/showAnswer.js";


const worksForm = document.forms.worksForm;

formHandler(worksForm);
