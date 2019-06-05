/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('scroll.js loaded')

document.addEventListener('keydown', function (event) {
    var key = event.key;
    switch (key) {
        case "ArrowUp":
            scroll(0, 0);
            break;
        case "ArrowDown":
            scroll(0, document.body.scrollHeight);
            break;
    }
})
