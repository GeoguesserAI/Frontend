import {sendToDatabase, testRequests, makeRandomGuess} from './requests'

// waits for the submit form and calls the function
var form = document.getElementById('geoForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var input = document.getElementById('input-field');
    sendToDatabase(input.value);
});

var testButton = document.getElementById('test-button');
testButton.addEventListener('click', (event) => {
    event.preventDefault();
    testRequests();
});

var randomGuess = document.getElementById('random-guess')
randomGuess.addEventListener('click', (event) => {
    event.preventDefault();
    var url = window.location;
    makeRandomGuess(url);
});
