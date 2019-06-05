/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadBtn = document.getElementsByClassName('download');

for (var i = 0; i < downloadBtn.length; i++) {
        console.log(downloadBtn[i]);
    downloadBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        countLike();
    });
}

function countLike() {
    var likes = document.querySelectorAll(".download.active").length;
    //                insert lenght to html 
    document.querySelector(".counter")
        .innerHTML = likes;
}
