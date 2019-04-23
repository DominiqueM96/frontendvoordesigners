/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadBtn = document.getElementsByClassName('download');

for (var i = 0; i < downloadBtn.length; i++) {
    console.log(downloadBtn[i]);
    downloadBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        //        this.src = '../img/hart rood-01.png';

    });
}
