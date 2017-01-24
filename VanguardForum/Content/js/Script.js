function izbrisiKategoriju(idKategorije, imeKategorije) {
    if (confirm("Potvrdite brisanje kategorije " + imeKategorije + "?")) {
        window.location = "/control/izbrisiKategoriju?idKategorije=" + idKategorije;
    }

}
function izbrisiTemu(idTeme, imeTeme,idKategorije) {
    if (confirm("Potvrdite brisanje teme " + imeTeme + "?")) {
        window.location = "/control/izbrisiTemu?idTeme=" + idTeme+"&idKategorije="+idKategorije;
    }

}


function izbrisiKomentar(idKomentara) {
    if (confirm("Potvrdite brisanje komentara!")) {
        window.location = "/control/izbrisiKomentar?idKomentara="+idKomentara;
    }

}
function prikaziPoljeZaOdgovor(idKomentara) {
    var selector = "#odgovor_" + idKomentara;
    $(selector).toggle();
}

function prikaziPoljeZaIzmjenu(idKomentara) {
    var selector = "#izmjena_" + idKomentara;
    $(selector).toggle()
}


function glasaj(_idKomentara, _glas) {
    var glasajSelector = ".glasaj_" + _idKomentara;
    $(glasajSelector).attr("disabled", true);
    $.post("control/glasaj.cshtml",
   {
       idKomentara: _idKomentara,
       glas: _glas
   },
   function (data, status) {
       var selectror = "#popularnost_" + _idKomentara;
       $(selectror).html("Popularnost: " + data);
   });
}
function provjeriEmailINadimak() {
    var Email = $("#email")[0].value;
    var Nadimak = $("#nadimak")[0].value;
    $.post("control/provjeriEmaiINadimak.cshtml",
   {
       email: Email,
       nadimak: Nadimak
   },
   function (data, status) {
       if (data == "e"||data=="en") {
           $("#email_err").show();
       } else {
           $("#email_err").hide();
       }
       if (data == "n" || data == "en") {
           $("#nadimak_err").show();
       } else {
           $("#nadimak_err").hide();
       }

       if (data == "")
           $("#predaj").click();


   });
}

function provjeriform() {
    //provjeriEmailINadimak()
}
