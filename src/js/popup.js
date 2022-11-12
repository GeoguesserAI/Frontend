// This function sends the data submitted through the form to the database.
function sendToDatabase(data) {
    fetch('http://127.0.0.1:8000/send-image', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
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
        .catch((error) => {
            alert('Error sendng request...')
        });
}

// waits for the submit form and calls the function
var form = document.getElementById('geoForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var input = document.getElementById('input-field');
    sendToDatabase(input.text);
});
