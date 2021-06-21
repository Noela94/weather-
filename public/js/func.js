console.log('client side javascript done');
console.log('hello');

fetch('http://puzzle.mead.io/puzzle').then(function (response) {
    response.json().then(function (data) {
        console.log(data);
    })
});

fetch('http://localhost:3000/weather?address=wewe').then(function (response) {
    response.json().then(function (data) {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log(data);
        }
    })
});