/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var options = {
//    root: document.querySelector('#scrollArea'),
//    rootMargin: '0px',
//    threshold: 1.0
//}
//
//var observer = new IntersectionObserver(callback, options);

//var offsetTop = VisualViewport.offsetTop;
var sectionArea1 = document.getElementById("section1");
var topPos1 = sectionArea1.offsetTop;
var sectionArea2 = document.getElementById("section2");
var topPos2 = sectionArea2.offsetTop;
var sectionArea3 = document.getElementById("section3");
var topPos3 = sectionArea3.offsetTop;
var sectionArea4 = document.getElementById("section4");
var topPos4 = sectionArea4.offsetTop;
var sectionArea5 = document.getElementById("section5");
var topPos5 = sectionArea5.offsetTop;

window.onscroll = scrollen;

function scrollen() {
    console.log("scroll1", topPos1);
    console.log("scroll2", topPos2);
    console.log("scroll3", topPos3);
    console.log("scroll4", topPos4);
    console.log("scroll5", topPos5);
    console.log(window.scrollY);

    if (topPos1 < 77) {
        document.getElementById('section1').id = 'section1.active';
    } else if (topPos2 > 77) {
        document.getElementById('section2').id = 'section2.active';
    } else if (topPos3 == 1861) {
        document.getElementById('section3').id = 'section3.active';
    } else if (topPos4 == 2753) {
        document.getElementById('section4').id = 'section4.active';
    } else {
        document.getElementById('section5').id = 'section5.active';
    }
}
