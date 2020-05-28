<!-- Mikäli tekstikenttä aktiivisena painetaan ENTER:iä tehdään painonapin toiminta -->

var input = document.getElementById("kentta");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("nappi").click();
  }
});

<!-- Painonapin klikkauksesta tapahtuvat metodit tekstikenttään syötetyn tekstin perusteella. -->

function klik() {
  var syote = document.getElementById("kentta").value;
  document.getElementById("kentta").value = "";

<!-- Luodaan a-elementin, johon määritellän linkki ja lisätään se vasempaan kolumniin. -->

  if (syote == "google") {
    document.getElementById("oikea").innerHTML = "";
    var a = document.createElement('a');
    var link = document.createTextNode("Siirrytäänkö googleen");
    a.appendChild(link);
    a.href = "https://www.google.com";
    a.target = "_blank";
    document.getElementById("oikea").appendChild(a);
  }

  if (syote == "listaa") {
    document.getElementById("vasen").innerHTML = "Käytettävät komennot:<br><br>";
    var a = document.createElement('a');
    var google = document.createTextNode("google");
    a.appendChild(google);
    a.href = "javascript:muutaGoogleksi()";
    document.getElementById("vasen").appendChild(a);
    document.getElementById("vasen").innerHTML += " = linkki googleen<br><br>";

    var b = document.createElement('a');
    var listaa = document.createTextNode("listaa");
    b.appendChild(listaa);
    b.href = "javascript:muutaListaaksi()";
    document.getElementById("vasen").appendChild(b);
    document.getElementById("vasen").innerHTML += " = komennot<br><br>";

    var c = document.createElement('a');
    var teemu = document.createTextNode("teemu");
    c.appendChild(teemu);
    c.href = "javascript:muutaTeemuksi()";
    document.getElementById("vasen").appendChild(c);
    document.getElementById("vasen").innerHTML += " = näyttää kuvani<br><br>";

    var d = document.createElement('a');
    var numero = document.createTextNode("numero");
    d.appendChild(numero);
    d.href = "javascript:muutaNumeroksi()";
    document.getElementById("vasen").appendChild(d);
    document.getElementById("vasen").innerHTML += " = generoi tekstiä<br><br>";

    var e = document.createElement('a');
    var soita = document.createTextNode("soita");
    e.appendChild(soita);
    e.href = "javascript:muutaSoitaksi()";
    document.getElementById("vasen").appendChild(e);
    document.getElementById("vasen").innerHTML += " = soittaa äänitiedoston<br><br>";

    var f = document.createElement('a');
    var teepopup = document.createTextNode("tee popup");
    f.appendChild(teepopup);
    f.href = "javascript:muutaTeepopupiksi()";
    document.getElementById("vasen").appendChild(f);
    document.getElementById("vasen").innerHTML += " = lihavoitu teksti<br><br>";

    var g = document.createElement('a');
    var poliisi = document.createTextNode("poliisi");
    g.appendChild(poliisi);
    g.href = "javascript:muutaPoliisiksi()";
    document.getElementById("vasen").appendChild(g);
    document.getElementById("vasen").innerHTML += " = näytä hälytysvalot<br><br>";

    var g = document.createElement('a');
    var video = document.createTextNode("video");
    g.appendChild(video);
    g.href = "javascript:muutaVideoksi()";
    document.getElementById("vasen").appendChild(g);
    document.getElementById("vasen").innerHTML += " = näyttää videon<br><br>";
  }

  if (syote == "teemu") {
    document.getElementById("oikea").innerHTML = "";
    var img = document.createElement("img");
    img.src = "img/teemu.jpg";
    img.width = 230;
    var src = document.getElementById("oikea");
    src.appendChild(img);
  }

<!-- Kolumnin rajoitetusta korkeudesta johtuen hyväksyn maksimissaan 20 riviä generoitua tekstiä. -->

  if (syote == "numero") {
    document.getElementById("kentta").value = Math.floor(Math.random() * 20) + 1;
  }

<!-- Tarkistaa onko tekstikentässä numero ja generoi tekstiä mikäli numero on 1 - 20. -->

  var numeroko = parseInt(syote);
  if (Number.isInteger(numeroko)) {
    if (numeroko >= 1 && numeroko <= 20) {
      document.getElementById("oikea").innerHTML = "";
      for (var i = 1; i < numeroko + 1; i++) {
        document.getElementById("oikea").innerHTML += i + ". generoitua tekstiä<br>";
      }
    }
    else {
      alert("Anna numero väliltä 1 - 20.");
    }
  }

  var vedaVessa = document.getElementById("vessaAudio");

  if (syote == "soita") {
    vedaVessa.play();
  }

  if (syote == "tee popup") {
    document.getElementById("oikea").innerHTML = "";
    var div = document.createElement("div");
    div.innerHTML = "tässä <b>pyydetty</b> popup";
    div.id = "ilmestynyt";
    document.getElementById("oikea").appendChild(div);
  }

  if (syote == "poliisi") {
    Poliisi();
  }

  if (syote == "video") {
    document.getElementById("oikea").innerHTML = "";
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9Q22XlWf6aw';
    iframe.width = '240';
    var video = document.getElementById('oikea');
    video.appendChild(iframe);

    document.getElementById("oikea").innerHTML += "<br> Lisätietoja ";
    var a = document.createElement('a');
    var learn = document.createTextNode("täällä");
    a.appendChild(learn);
    a.href = "https://learndigital.withgoogle.com/digitalgarage/course/learn-programming-with-javascript";
    document.getElementById("oikea").appendChild(a);
    document.getElementById("oikea").innerHTML += ".";
  }
}

<!-- Olisin tehnyt seuraavat metodit yhdellä metodilla parametrin kautta, mutta se ei toiminut. -->

function muutaGoogleksi() {
    document.getElementById("kentta").value = "google";
}

function muutaListaaksi() {
    document.getElementById("kentta").value = "listaa";
}

function muutaTeemuksi() {
    document.getElementById("kentta").value = "teemu";
}

function muutaNumeroksi() {
    document.getElementById("kentta").value = Math.floor(Math.random() * 20) + 1;
}

function muutaSoitaksi() {
    document.getElementById("kentta").value = "soita";
}

function muutaTeepopup() {
    document.getElementById("kentta").value = "tee popup";
}

function muutaTeepopupiksi() {
    document.getElementById("kentta").value = "tee popup";
}

function muutaPoliisiksi() {
    document.getElementById("kentta").value = "poliisi";
}

<!-- JavaScriptistä puuttuu Pythonista tuttu sleep-funktio, mutta alla olevalla koodilla sain sen toimimaan. -->

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Poliisi() {
  document.getElementById("oikea").innerHTML = "";
  document.getElementById("vasen").innerHTML = "";
  var poliisiSireeni = document.getElementById("poliisiAudio");
  poliisiSireeni.currentTime = 0;
  poliisiSireeni.play();

  for (let i = 1; i < 14 ; i++) {
    await sleep(250);
    if (i % 2 === 1) {
      document.getElementById("vasen").style.backgroundColor = "red";
      document.getElementById("oikea").style.backgroundColor = "blue";
    }
    else {
      document.getElementById("vasen").style.backgroundColor = "blue";
      document.getElementById("oikea").style.backgroundColor = "red";
    }
  }
  document.getElementById("vasen").style.backgroundColor = "lightgrey";
  document.getElementById("oikea").style.backgroundColor = "lightgrey";
}

function muutaVideoksi() {
    document.getElementById("kentta").value = "video";
}
