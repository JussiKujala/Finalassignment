//globaalit muuttujat joihin tallennetaan kaupungin sää tiedot
var reykinfo = "";
var helinfo = "";
var osloinfo = "";
var stockinfo = "";
var copeninfo = "";


getweatherinfo();

function getweatherinfo(x) {
    //Reykjavikin sää tiedot
    if (reykinfo == "") {
        var reykjavik = new XMLHttpRequest();
        reykjavik.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Reykjavík&units=metric&&lang=fi&appid=10866d9b8ea88da8e3b4408feebaf13f", true);
        reykjavik.send();
        reykjavik.onreadystatechange = function () {
            if (reykjavik.readyState === 4 && reykjavik.status === 200) {
                reykinfo = JSON.parse(this.response);
                document.getElementById("weather").innerHTML = "Lämpötila";
                document.getElementById("reyk").innerHTML = Math.floor(reykinfo.main.temp * 10) / 10 + "°C";
            }
        }
    }
    if (x == 1) {
        document.getElementById("weather").innerHTML = "Lämpötila";
        document.getElementById("reyk").innerHTML = Math.floor(reykinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 2) {
        document.getElementById("weather").innerHTML = "Tuuli";
        document.getElementById("reyk").innerHTML = Math.floor(reykinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 3) {
        document.getElementById("weather").innerHTML = "Pilvet";
        document.getElementById("reyk").innerHTML = Math.floor(reykinfo.main.temp * 10) / 10 + "°C";
    }

    //helsingin sää tiedot
    if (helinfo == "") {
        var helsinki = new XMLHttpRequest();
        helsinki.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&&lang=fi&appid=10866d9b8ea88da8e3b4408feebaf13f", true);
        helsinki.send();
        helsinki.onreadystatechange = function () {
            if (helsinki.readyState === 4 && helsinki.status === 200) {
                helinfo = JSON.parse(this.response);
                document.getElementById("weather").innerHTML = "Lämpötila";
                document.getElementById("hel").innerHTML = Math.floor(helinfo.main.temp * 10) / 10 + "°C";
            }
        }
    }
    if (x == 1) {
        document.getElementById("hel").innerHTML = Math.floor(helinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 2) {
        document.getElementById("hel").innerHTML = Math.floor(helinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 3) {
        document.getElementById("hel").innerHTML = Math.floor(helinfo.main.temp * 10) / 10 + "°C";

    }

    //oslon sää tiedot
    if (osloinfo == "") {
        var oslo = new XMLHttpRequest();
        oslo.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&lang=fi&appid=10866d9b8ea88da8e3b4408feebaf13f", true);
        oslo.send();
        oslo.onreadystatechange = function () {
            if (oslo.readyState === 4 && oslo.status === 200) {
                osloinfo = JSON.parse(this.response);
                document.getElementById("weather").innerHTML = "Lämpötila";
                document.getElementById("oslo").innerHTML = Math.floor(osloinfo.main.temp * 10) / 10 + "°C";
            }
        }
    }
    if (x == 1) {
        document.getElementById("oslo").innerHTML = Math.floor(osloinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 2) {
        document.getElementById("oslo").innerHTML = Math.floor(osloinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 3) {
        document.getElementById("oslo").innerHTML = Math.floor(osloinfo.main.temp * 10) / 10 + "°C";
    }

    //tukholman sää tiedot
    if (stockinfo == "") {
        var stockholm = new XMLHttpRequest();
        stockholm.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&lang=fi&appid=10866d9b8ea88da8e3b4408feebaf13f", true);
        stockholm.send();
        stockholm.onreadystatechange = function () {
            if (stockholm.readyState === 4 && stockholm.status === 200) {
                stockinfo = JSON.parse(this.response);
                document.getElementById("weather").innerHTML = "Lämpötila";
                document.getElementById("stock").innerHTML = Math.floor(stockinfo.main.temp * 10) / 10 + "°C";
            }
        }
    }
    if (x == 1) {
        document.getElementById("stock").innerHTML = Math.floor(stockinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 2) {
        document.getElementById("stock").innerHTML = Math.floor(stockinfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 3) {
        document.getElementById("stock").innerHTML = Math.floor(stockinfo.main.temp * 10) / 10 + "°C";
    }

    //kööpenhaminan sää tiedot
    if (copeninfo == "") {
        var copenhangen = new XMLHttpRequest();
        copenhangen.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&lang=fi&appid=10866d9b8ea88da8e3b4408feebaf13f", true);
        copenhangen.send();
        copenhangen.onreadystatechange = function () {
            if (copenhangen.readyState === 4 && copenhangen.status === 200) {
                copeninfo = JSON.parse(this.response);
                document.getElementById("weather").innerHTML = "Lämpötila";
                document.getElementById("copen").innerHTML = Math.floor(copeninfo.main.temp * 10) / 10 + "°C";
            }
        }
    }
    if (x == 1) {
        document.getElementById("copen").innerHTML = Math.floor(copeninfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 2) {
        document.getElementById("copen").innerHTML = Math.floor(copeninfo.main.temp * 10) / 10 + "°C";
    }
    if (x == 3) {
        document.getElementById("copen").innerHTML = Math.floor(copeninfo.main.temp * 10) / 10 + "°C";
    }
}









