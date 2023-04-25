import { taskDataOne } from "../workData/one.js";
// temp commit
// import { taskDataTwo } from "./workData/two.js";
import { taskDataThree } from "../workData/three.js";
import { taskDataFour } from "../workData/four.js";
import { taskDataFive } from "../workData/five.js";
import { taskDataSix } from "../workData/six.js";
import { taskDataSeven } from "../workData/seven.js";
import { taskDataEight } from "../workData/eight.js";
import { taskDataNine } from "../workData/nine.js";
import { taskDataTen } from "../workData/ten.js";
import { taskDataEleven } from "../workData/eleven.js";

import { showWork } from "../show/showWork.js";

const output = document.querySelector("#output");

export const setWork = ( formValue ) => {

    if ( formValue === 'hw_01') {
        showWork(taskDataOne[0].title, output);
    }  else if ( formValue === 'hw_02') {
        showWork(`taskDataTwo[0].title`, output);
    } else if ( formValue === 'hw_03') {
        showWork(taskDataThree[0].title, output);
    } else if ( formValue === 'hw_04') {
        showWork(taskDataFour[0].title, output);
    } else if ( formValue === 'hw_05') {
        showWork(taskDataFive[0].title, output);
    } else if ( formValue === 'hw_06') {
        showWork(taskDataSix[0].title, output);
    } else if ( formValue === 'hw_07') {
        showWork(taskDataSeven[0].title, output);
    } else if ( formValue === 'hw_08') {
        showWork(taskDataEight[0].title, output);
    } else if ( formValue === 'hw_09') {
        showWork(taskDataNine[0].title, output);
    }else if ( formValue === 'hw_10') {
        showWork(taskDataTen[0].title, output);
    }else if ( formValue === 'hw_11') {
        showWork(taskDataEleven[0].title, output);
    }
};
