// Counter function using closure
const createCounter = () => {
    let count = 0;
    // Inner function (closure) that has access to the outer function's variables
    const increment = () => {
        count++;
        updateDisplay();
    };
    const getCounterValue = () => count;
    const updateDisplay = () => {
        const displayElement = document.getElementById('counterDisplay');
        if (displayElement) {
            displayElement.textContent = `Counter Value: ${getCounterValue()}`;
        }
    };
    return {
        increment, getCounterValue
    };
};

const counter = createCounter();
const incrementCounter = () => {
    counter.increment();
};
// Initial display update
counter.updateDisplay();