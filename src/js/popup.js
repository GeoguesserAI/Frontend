// This function sends the data submitted through the form to the database.
function sendToDatabase(data) {
    fetch('http://127.0.0.1:8000/send-image/', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'applications/json',
        },
        body: JSON.stringify({
            image: data,
        }),
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                alert('image posted to data base');
                console.log(data);
            }
        })
        .catch(() => {
            alert('Error sending request...');
        });
}

function testRequests() {
    fetch('http://127.0.0.1:8000/test/', {
        method: 'GET',
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                alert('test success');
            }
        })
        .catch(() => {
            alert('Error testing request...');
        });
}

// waits for the submit form and calls the function
var form = document.getElementById('geoForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    var input = document.getElementById('input-field');
    sendToDatabase(input.text);
});

var testButton = document.getElementById('test-button');
testButton.addEventListener('click', (event) => {
    event.preventDefault();
    testRequests();
});
