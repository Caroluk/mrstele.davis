var peticion = new XMLHttpRequest()

peticion.open("GET", "inicio.html", true);

peticion.onreadystatechange = function () {

    if (peticion.status == 200) {
        var main = document.querySelector("main");
        main.innerHTML = peticion.response
        }

    }

peticion.send ()

var irInfo = document.querySelector("#masinfo")

irInfo.addEventListener("click", function() {

    var peticionDos = new XMLHttpRequest()

    peticionDos.open("GET", "masinfo.html", true);

    peticionDos.onreadystatechange = function () {

        if (peticionDos.status == 200) {
            var mainDos = document.querySelectorAll("main");
            mainDos.innerHTML = peticionDos.response
        }

    }

    peticionDos.send ()
    
})