var promise = new Promise(function(resolve) {

    function sayHello() {
        resolve('Hello World!');
    }

    setTimeout(sayHello, 10000);

})

console.log(promise);

promise.then(function(message) {
    console.log(message)
})
