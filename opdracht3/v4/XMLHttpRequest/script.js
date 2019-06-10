function loadimagesmetXHR() {
    var request = new XMLHttpRequest();
    request.open('get', requestURL);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        console.log("request is geladen: ", request.response);
        //als de data geladen is, mag de loader weg:
        loaderElement.classList.add('hide');
        //functie aanroepen om van de data html te maken
        showData(request.response);
    });
    //  request.onload = function() {
    //      console.log("request.onload: ",request.response);
    //    }
    request.timeout = 10000; // time in milliseconds
    request.ontimeout = function (e) {
        // XMLHttpRequest timed out. Do something here.
        console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
    };
    request.onerror = function () {
        console.log('Fetch Error', request.status);
    };
} //end: function loadimagesmetXHR();

//loader feedback eerst onzichtbaar maken
loaderElement.classList.add('hide');
//actie
button.onclick = function () {
    loaderElement.classList.remove('hide'); //loader wordt zichtbaar
    this.classList.add('hide'); //button mag weg
    section.innerHTML = ""; //main leeghalen. just in case
    loadimagesmetXHR();
}; //end: button.onclick
