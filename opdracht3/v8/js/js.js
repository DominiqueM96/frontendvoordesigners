/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var loaderElement = document.querySelector(".loader");
//console.log("loader", loaderElement);
var section = document.querySelector('section');
//        console.log("section", section);
//console.log("loadimagesmetXHR");

//data ophalen

var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('data is geladen', request);


request.onload = function () {
    var movies = request.response;
    showData(movies);

};

/*
    functie om de html elementen aan te maken en te vullen
    argument: json data van de xmlhttprequests
*/
function showData(jsonObject) {
    var movies = jsonObject;
    //    section.textContent = "loading data file"; //loading feedback tonen in section
    //door de objecten heen loopen van de array
    for (var i = 0; i < movies.length; i++) {
        //html elementen aanmaken
        var article = document.createElement('article');
        article.classList.add("donker");
        var img = document.createElement('img');
        img.src = movies[i].cover;
        img.classList.add("afbeelding");
        var button = document.createElement('button');
        button.classList.add("download");
        //        var button2 = document.createElement('button');
        //        button.classList.add("loader");
        var h2 = document.createElement('h2');
        var h3 = document.createElement('h3');
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        //onderdelen uit de data aanroepen en in de html elementen zetten
        img.textContent = movies[i].cover;
        h2.textContent = movies[i].title;
        h3.textContent = movies[i].genres;
        h4.textContent = movies[i].release_date;
        p.textContent = movies[i].simple_plot;
        //elementen in articles plaatsen
        article.appendChild(img);
        article.appendChild(button);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        //articles in html section plaatsen
        section.appendChild(article);
    } //end for loop
    downloaden();
    fotoVergroten();
    achtergrond();
    achtergrondKleur();
}

function downloaden() {
    var downloadBtn = document.getElementsByClassName('download');

    for (var i = 0; i < downloadBtn.length; i++) {
        console.log(downloadBtn[i]);
        downloadBtn[i].addEventListener("click", function () {
            this.classList.toggle("active");
            countLike();
        });
    }
}

/* 
    deze functie telt alle likes
*/
function countLike() {
    var likes = document.querySelectorAll(".download.active").length;
    //                insert lenght to html 
    document.querySelector(".counter")
        .innerHTML = likes;
}

/*
functie om de afbeelding te vergroten wanneer je er dubbel op klikt
*/

function fotoVergroten() {
    var foto = document.querySelector('section img');
    console.log(foto)
    foto.addEventListener('dblclick', function () {
        this.classList.toggle('groot');
    });
}

/*
functie om de achtergrond kleur te wijzigen wanneer je dubbelklikt op een film/artcile
*/

function fotoVergroten() {
    var foto = document.querySelector('section img');
    console.log(foto)
    foto.addEventListener('dblclick', function () {
        this.classList.toggle('groot');
    });
}
/*
functie om een loader te laten zien wanneer de pagina langzaam laadt
*/

//bron: http://jsfiddle.net/d9ngT/
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('div').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('div').style.visibility = "visible";
        }, 1000);
    }
}

//var zwart = document.querySelector('body');
//
//function achtergrond() {
//    console.log(zwart);
//    if (event.Keycode == '78') {
//        zwart.classList.toggle('nachtmode');
//    }
//}

var body = document.querySelector('body');

function achtergrond() {
    body.classList.toggle("nachtmode");
    article.classList.toggle("donker");
}

window.onkeyup = function achtergrondKleur() {
    if (event.keyCode == 78) {
        achtergrond();
    }
};
