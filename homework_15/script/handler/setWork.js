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

export const setWork = ( formValue ) => {

    if ( formValue === 'hw_01') {
        console.log(taskDataOne[0].txt);
    } else if ( formValue === 'hw_01') {
        console.log(taskDataOne[0].txt);
    } else if ( formValue === 'hw_02') {
        console.log(`taskDataTwo[0].txt`);
    } else if ( formValue === 'hw_03') {
        console.log(taskDataThree[0].txt);
    } else if ( formValue === 'hw_04') {
        console.log(taskDataFour[0].txt);
    } else if ( formValue === 'hw_05') {
        console.log(taskDataFive[0].txt);
    } else if ( formValue === 'hw_06') {
        console.log(taskDataSix[0].txt);
    } else if ( formValue === 'hw_07') {
        console.log(taskDataSeven[0].txt);
    } else if ( formValue === 'hw_08') {
        console.log(taskDataEight[0].txt);
    } else if ( formValue === 'hw_09') {
        console.log(taskDataNine[0].txt);
    }else if ( formValue === 'hw_10') {
        console.log(taskDataTen[0].txt);
    }else if ( formValue === 'hw_11') {
        console.log(taskDataEleven[0].txt);
    }
};
