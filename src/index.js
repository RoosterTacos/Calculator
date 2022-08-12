


//  On state change from strokes/presses add values to state
let oldState = '';
let state = '';

// Check for state change
export const hasStateChanged = () => {
    if(oldState !== newState){
        return true;
    }
}

setInterval(() => {
    if(hasStateChanged) handleStateChange();
    oldState = state;
}, 100);

// Change / Handle state 
export const handleStateChange = () => {
    console.log('State: ',state);
}

export const addToState = (data) => {
    state += data;
}

// Parse / Check State
export const validateState = (event) => {
    if(state.length <= 13){
        addToState(event.target.innerText);
    }
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





