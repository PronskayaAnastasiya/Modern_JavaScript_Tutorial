function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удлось загрузить скрипт ${src}`));
    document.head.append(script);
}

//loadScript('./script2.js', function () { sayHello() });

console.log('script1');

/*
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    console.log(`Здорово,  скрипт ${script.src} загрузился`);
    console.log(_);
})
*/

const script3 = './script3.js';
const script4 = './script4.js';

/*
loadScript(script3, function (script) {
    console.log(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);
    loadScript(script4, function (script) {
        console.log(`Здорово, второй скрипт загрузился`);
    });
})
*/

loadScript('script5.js', function (error, script) {
    if (error) {
        console.log(error)
    } else {
        `Здорово, скрипт ${script.src} загрузился`;
    }
})

loadScript('1.js', step1);
function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        //...
        loadScript('2.js', step2);
    }
}
function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        //...
        loadScript('3.js', step3);
    }
}