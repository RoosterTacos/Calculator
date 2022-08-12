//  On state change from strokes/presses add values to state
let oldState = {
    data: ''
}

let state = {
    data: '',
    hasOperator: false
};

// Check for state change
export const hasStateChanged = () => {
    if(oldState.data !== state.data){
        return true;
    }
}

// Begin listener for state change
setInterval(() => {
    if(hasStateChanged) handleStateChange();
    oldState.data = state.data;
}, 100);

// Change / Handle state 
export const handleStateChange = () => {
    console.log('State: ',state.data);
}

export const addToState = (data, state) => {
    state.data += data;
}

// Parse / Check State
// Check / Set State Operator
export const checkForOperator = (state) => {
    const operator = state.data.match(/\-|\*|\+|\//ig);

    if((operator) && operator.length > 0){
        return true;
    } else {
        return false;
    }
    return state;
}

export const flagOperator = (state, bool) => {
    if(bool){
        state.hasOperator = true;
    } else {
        state.hasOperator = false;
    }
}

export const validateState = (event, state) => {
    if(state.data.length <= 13){
        addToState(event.target.innerText, state);
    }

    // Check for operator
    let operatorCheckedState = checkForOperator(state);
    console.log(operatorCheckedState)
}

// Get all button presses
window.addEventListener('DOMContentLoaded', () => {
    const numpad = document.getElementsByClassName('numpad')[0];

    numpad.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        
        if(event.target.className === 'btn'){
            validateState(event, state);
        }
        
    })
})





