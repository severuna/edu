console.log('the page is loaded');

import formHandler from "./handler/formHandler.js";
import getElement from "./handler/getElement.js";
import showWork from "./show/showWork.js";
import showTaskContainer from "./show/showTaskContainer.js";
import showTask from "./show/showTask.js";
import showAnswer from "./show/showAnswer.js";
import { taskDataOne } from "./workData/one.js";
// temp commit
// import { taskDataTwo } from "./workData/two.js";
import { taskDataThree } from "./workData/three.js";
import { taskDataFour } from "./workData/four.js";
import { taskDataFive } from "./workData/five.js";
import { taskDataSix } from "./workData/six.js";
import { taskDataSeven } from "./workData/seven.js";
import { taskDataEight } from "./workData/eight.js";
import { taskDataNine } from "./workData/nine.js";
import { taskDataTen } from "./workData/ten.js";
import { taskDataEleven } from "./workData/eleven.js";



const worksForm = document.forms.worksForm;

formHandler(worksForm);
