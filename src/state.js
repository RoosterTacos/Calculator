import * as parse from './parse.js';

//  On state change from strokes/presses add values to state
export let oldStateObj = {
    data: ''
}

export let stateObj = {
    data: '',
    hasOperator: false
};

// Check for state change
export const hasStateChanged = () => {
    if(oldStateObj.data !== stateObj.data){
        return true;
    }
}

// Change / Handle state 
export const handleStateChange = () => {
    console.log('State: ',stateObj.data);
}

export const addToState = (data) => {
    stateObj.data += data;
}