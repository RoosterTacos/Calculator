import * as parse from './parse.js';
import * as state from './state.js';


// Begin listener for state change
setInterval(() => {
    if(state.hasStateChanged) state.handleStateChange();
    
    state.oldStateObj.data = state.stateObj.data;
}, 100);

// Get all button presses
window.addEventListener('DOMContentLoaded', () => {
    const numpad = document.getElementsByClassName('numpad')[0];

    numpad.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        
        if(event.target.className === 'btn'){
            parse.validateState(event, state.stateObj);
        }
    })
})





