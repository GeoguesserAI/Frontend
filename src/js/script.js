document.addEventListener('DOMContentLoaded', function () {
    var train = document.getElementById('train');
    var run = document.getElementById('run');

    train.addEventListener('click', function () {
        alert('train clicked');
    });

    run.addEventListener('click', function () {
        alert('run clicked');
    });
});
