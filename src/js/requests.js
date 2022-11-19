export function sendToDatabase(data) {
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

export function testRequests() {
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

export function makeRandomGuess(data) {
    fetch('http://127.0.0.1:8000/random-guess/', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'applications/json',
        },
        body: JSON.stringify({
            url: data,
        }),
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                alert('request made to database!');
                console.log(data);
            }
        })
        .catch(() => {
            alert('Error sending request...');
        });
}