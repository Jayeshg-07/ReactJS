const myArray = [1, 2, 3, 4, 5];
const outputDiv = document.getElementById('output');

function printArrayWithDelay() {
    myArray.forEach((element, index) => {
        setTimeout(() => {
            outputDiv.innerHTML += element + '<br>';
        }, index * 3000);
    });
}

printArrayWithDelay();