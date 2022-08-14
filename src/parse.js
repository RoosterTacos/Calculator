import * as state from './state.js';

// Parse / Check State
// Check / Set State Operator


export const validateState = (event) => {
    console.log('parsing')

    // Check for operator
    let operatorCheckedState = checkForOperator(stateObj);
    
    // CHECKS FOR / SETS OPERATOR.  WHAT IF ALREADY FLAGGED?  -> 
    if(operatorCheckedState) flagOperator(stateObj, true);
    
    console.log(operatorCheckedState)

    if(stateObj.data.length <= 13){
        addToState(event.target.innerText);
    }

}

export const checkForOperator = (stateObj) => {
    const operator = stateObj.data.match(/\-|\*|\+|\//ig);

    if((operator) && operator.length > 0){
        return true;
    } else {
        return false;
    }
}

export const flagOperator = (stateObj, bool) => {
    if(bool){
        stateObj.hasOperator = true;
    } else {
        stateObj.hasOperator = false;
    }
}