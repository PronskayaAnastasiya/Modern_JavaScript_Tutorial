let promice = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve("done"), 1000);
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promice.then(function (result) { console.log(result) }, function (error) { console.log(error) });
promice.catch(error => console.log(error));

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('Ошибка'));
    document.head.append(script);
}

function loadScript2(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Oops"));
        document.head.append(script);
    })
}

let promise = loadScript2("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => console.log(`${script.src} загружен!`),
    error => console.log(`Ошибка: ${error.message}`)
);

promise.then(script => console.log('Ещё один обработчик...'));


let isMomHappy = false;
let willGetNewPhone = new Promise(function (resolve, reject) {
    if (isMomHappy) {
        let phon = {
            brand: "Samsung",
            color: "black"
        };
        resolve(phon);
    } else {
        var reason = new Error('momis not happy');
        reject(reason);
    }
})

let askMom = function () {
    willGetNewPhone
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message)
        })
}