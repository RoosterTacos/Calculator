import * as state from './state.js';

export const validateState = (event, stateObj) => {
    
    let incomingData = event.target.innerText;
    // Check for operator
    let doesDataHaveOperator = checkForOperator(incomingData);
    
    // If incoming data has operator and so does state replace it
    if(doesDataHaveOperator  && stateObj.hasOperator) {
        let newStateData = replaceOperator(incomingData, stateObj);

        state.replaceStateData(newStateData)
        return 0;
    };

    // Flag stateObj.hasOperator if  incomingData is operator
    if(doesDataHaveOperator  && !stateObj.hasOperator) flagOperator(stateObj, true);



    if(stateObj.data.length <= 13){
        state.addToState(incomingData);
    }
}

// Check to see if data has operator in string (+-*/)
export const checkForOperator = (incomingData) => {
    const operator = incomingData.match(/\-|\*|\+|\//ig);
    
    if((operator) && operator.length > 0){
        return true;
    } else {
        return false;
    }
}

// Set operator flag on stateObj to true if contains operator (+-*/)
export const flagOperator = (stateObj, bool) => {
    if(bool){
        stateObj.hasOperator = true;
    } else {
        stateObj.hasOperator = false;
    }
}

// Replace old operator with new incoming operator
export const replaceOperator = (incomingData, stateObj) => {
    let dataWitholdOperator = stateObj.data.match(/\-|\*|\+|\//ig)[0];
    let dataWithnewOperator = stateObj.data.replace(dataWitholdOperator, incomingData);
    
    return dataWithnewOperator;
}