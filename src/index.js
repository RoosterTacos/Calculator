


//  On state change from strokes/presses add values to screen
let oldState = '';
let state = '';

// Check for state change
const hasStateChanged = () => {
    if(oldState !== newState){
        return true;
    }
}

const handleStateChange = () => {
    console.log('State: ',state);
}

setInterval(() => {
    if(hasStateChanged) handleStateChange();
    oldState = state;
}, 100);





// On "=" parse string for operator (+-*/) and split up text
// into 3 parts A Operator B

// Send to proper function for calculation

// Return answer to screen




// Get all button presses
window.addEventListener('DOMContentLoaded', () => {
    const numpad = document.getElementsByClassName('numpad')[0];

    numpad.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(e.target.className === 'btn'){
            state = e.target.innerText;
        }
    })
})





