var spell1 = ["", "", "", "", "", "", ""];
//0- nazwa czaru
//1- liczba watkow
//2- trudnosc utkania
//3- zasieg czaru
//4- czas dzialania czaru
//5- efekt czaru
//6- trudnosc rzucenia
var spell2 = [];
var spell3 = [];
var spell4 = [];
var spell5 = [];
var spell6 = [];
var spell7 = [];
var spell8 = [];
var spell9 = [];
var spell10 = [];
var t1 = [];
//0- nazwa talentu
//1- stopien cechy
//2- dyscyplinarny
//3- karma
//4- wyczerpanie
//5- poziom talentu
//6- kostki akcji
var t2 = [];
var t3 = [];
var t4 = [];
var t5 = [];
var t6 = [];
var t7 = [];
const postac = []; //postac[0] = imie gracza
//postac[1] = imie postaci
//postac[2] = Dyscyplina
//postac[3] = Rasa
//postac[4] = SF
//postac[5] = ZR
//postac[6] = ZYW
//postac[7] = PER
//postac[8] = SW
//postac[9] = CHAR
//postac[10] = SF_stopien
//postac[11] = ZR_stopien
//postac[12] = ZYW_stopien
//postac[13] = PER_stopien
//postac[14] = SW_stopien
//postac[15] = CHAR_stopien
//postac[16] = obrona fizyczna
//postac[17] = obrona magiczna
//postac[18] = obrona spoleczna
//postac[19] = szybkosc
//postac[20] = szybkosc Wietrzniak na ziemi
//postac[21] = udzwig
//postac[22] = prog zycia
//postac[23] = prog ran
//postac[24] = prog przytomnosci
//postac[25] = testy zdrowienia
//postac[26] = pancerz duchowy
//postac[27] = kostka akcji Karma
//postac[28] = koszt Karmy w punktach legend
//postac[29] = poczatkowa Karma
//postac[30] = maksymalna Karma
//postac[31] = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Pancerz fiz
//postac[32] = nazwa umiejetnosci wiedzy
//postac[33] = wartosc umiejetnosci
//postac[34] = nazwa umiejetnosci wiedzy  !!! moze byc undefined
//postac[35] = wartosc umiejetnosci       !!! moze byc undefined
//postac[36] = nazwa umiejetnosci artystycznej
//postac[37] = wartos umiejetnosci artystycznej

function showDescription() {
  var radios = document.getElementsByName("dyscyplina");
  var value;
  var talent;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;

      talent = value + "_talent";

      fetch("dyscypliny.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(value).innerHTML;

          document.getElementById("Aside1").innerHTML = tekstZPliku;
        });
      fetch("dyscypliny.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(talent).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  }
}

function dyscyplinaSelected() {
  var radios = document.getElementsByName("dyscyplina");
  var value;
  var i1;
  var i2;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;
    }
  }
  i1 = document.getElementById("Imie_gracza").value;
  i2 = document.getElementById("Imie_postaci").value;
  postac[0] = i1;
  postac[1] = i2;
  postac[2] = value;

  // dodaj wartości do nowego formularza
  const form2 = document.createElement("form");
  form2.setAttribute("id", "form2");

  const heading = document.createElement("h3");
  heading.textContent = "Rasa";

  form2.appendChild(heading);

  const radio1 = document.createElement("input");
  radio1.setAttribute("type", "radio");
  radio1.setAttribute("name", "rasa");
  radio1.setAttribute("value", "Człowiek");
  radio1.setAttribute("id", "Człowiek_radio");
  radio1.onchange = function () {
    showRace();
  };
  form2.appendChild(radio1);

  const label1 = document.createElement("label");
  label1.setAttribute("for", "Człowiek");
  label1.textContent = "Człowiek";
  label1.style.marginLeft = "5px";

  form2.appendChild(label1);
  form2.appendChild(document.createElement("br"));

  const radio2 = document.createElement("input");
  radio2.setAttribute("type", "radio");
  radio2.setAttribute("name", "rasa");
  radio2.setAttribute("value", "Elf");
  radio2.setAttribute("id", "Elf_radio");
  radio2.onchange = function () {
    showRace();
  };
  form2.appendChild(radio2);

  const label2 = document.createElement("label");
  label2.setAttribute("for", "Elf");
  label2.textContent = "Elf";
  label2.style.marginLeft = "5px";
  form2.appendChild(label2);
  form2.appendChild(document.createElement("br"));

  const radio3 = document.createElement("input");
  radio3.setAttribute("type", "radio");
  radio3.setAttribute("name", "rasa");
  radio3.setAttribute("value", "Krasnolud");
  radio3.setAttribute("id", "Krasnolud_radio");
  radio3.onchange = function () {
    showRace();
  };
  form2.appendChild(radio3);

  const label3 = document.createElement("label");
  label3.setAttribute("for", "Krasnolud");
  label3.textContent = "Krasnolud";
  label3.style.marginLeft = "5px";
  form2.appendChild(label3);
  form2.appendChild(document.createElement("br"));

  const radio4 = document.createElement("input");
  radio4.setAttribute("type", "radio");
  radio4.setAttribute("name", "rasa");
  radio4.setAttribute("value", "Obsydianin");
  radio4.setAttribute("id", "Obsydianin_radio");
  radio4.onchange = function () {
    showRace();
  };
  form2.appendChild(radio4);

  const label4 = document.createElement("label");
  label4.setAttribute("for", "Obsydianin");
  label4.textContent = "Obsydianin";
  label4.style.marginLeft = "5px";
  form2.appendChild(label4);
  form2.appendChild(document.createElement("br"));

  const radio5 = document.createElement("input");
  radio5.setAttribute("type", "radio");
  radio5.setAttribute("name", "rasa");
  radio5.setAttribute("value", "Ork");
  radio5.setAttribute("id", "Ork_radio");
  radio5.onchange = function () {
    showRace();
  };
  form2.appendChild(radio5);

  const label5 = document.createElement("label");
  label5.setAttribute("for", "Ork");
  label5.textContent = "Ork";
  label5.style.marginLeft = "5px";
  form2.appendChild(label5);
  form2.appendChild(document.createElement("br"));

  const radio6 = document.createElement("input");
  radio6.setAttribute("type", "radio");
  radio6.setAttribute("name", "rasa");
  radio6.setAttribute("value", "Troll");
  radio6.setAttribute("id", "Troll_radio");
  radio6.onchange = function () {
    showRace();
  };
  form2.appendChild(radio6);

  const label6 = document.createElement("label");
  label6.setAttribute("for", "Troll");
  label6.textContent = "Troll";
  label6.style.marginLeft = "5px";
  form2.appendChild(label6);
  form2.appendChild(document.createElement("br"));

  const radio7 = document.createElement("input");
  radio7.setAttribute("type", "radio");
  radio7.setAttribute("name", "rasa");
  radio7.setAttribute("value", "T'skrang");
  radio7.setAttribute("id", "T'skrang_radio");
  radio7.onchange = function () {
    showRace();
  };
  form2.appendChild(radio7);

  const label7 = document.createElement("label");
  label7.setAttribute("for", "T'skrang");
  label7.textContent = "T'skrang";
  label7.style.marginLeft = "5px";
  form2.appendChild(label7);
  form2.appendChild(document.createElement("br"));

  const radio8 = document.createElement("input");
  radio8.setAttribute("type", "radio");
  radio8.setAttribute("name", "rasa");
  radio8.setAttribute("value", "Wietrzniak");
  radio8.setAttribute("id", "Wietrzniak_radio");
  radio8.onchange = function () {
    showRace();
  };
  form2.appendChild(radio8);

  const label8 = document.createElement("label");
  label8.setAttribute("for", "Wietrzniak");
  label8.textContent = "Wietrzniak";
  label8.style.marginLeft = "5px";
  form2.appendChild(label8);
  form2.appendChild(document.createElement("br"));

  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("id", "button");
  button.textContent = "Wybrano";
  button.style.marginTop = "5px";
  button.onclick = function () {
    wybranoRase();
  };

  form2.appendChild(button);

  // usuń stary formularz i dodaj nowy
  const main = document.querySelector("main");
  const oldForm = document.querySelector("#form1");
  main.removeChild(oldForm);
  main.appendChild(form2);
  form2.onload = race_limits();
  document.getElementById("Aside1").innerHTML = "";
  document.getElementById("Aside2").innerHTML = "";
}

function showRace() {
  var radios = document.getElementsByName("rasa");
  var value;
  var mod;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;
    }
  }

  fetch("rasy.html")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, "text/html");
      const tekstZPliku = htmlDocument.getElementById(value).innerHTML;

      document.getElementById("Aside1").innerHTML = tekstZPliku;
    });
  mod = value + "_mod";
  fetch("rasy.html")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, "text/html");
      const tekstZPliku = htmlDocument.getElementById(mod).innerHTML;

      document.getElementById("Aside2").innerHTML = tekstZPliku;
    });
}
function wybranoRase() {
  var radios = document.getElementsByName("rasa");
  var value;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;
    }
  }
  postac[3] = value;
  showForm3a();
}
function showForm3a() {
  const form3a = document.createElement("form");
  form3a.setAttribute("id", "form3a");
  const metoda_liczbowa_radio = document.createElement("input");
  metoda_liczbowa_radio.setAttribute("type", "radio");
  metoda_liczbowa_radio.setAttribute("id", "metoda_liczbowa_radio");
  metoda_liczbowa_radio.setAttribute("name", "metoda");
  metoda_liczbowa_radio.setAttribute("value", "metoda_liczbowa");

  form3a.appendChild(metoda_liczbowa_radio);

  const metoda_liczbowa_label = document.createElement("label");
  metoda_liczbowa_label.setAttribute("for", "metoda_liczbowa_radio");
  metoda_liczbowa_label.textContent = "Metoda liczbowa";
  form3a.appendChild(metoda_liczbowa_label);
  form3a.appendChild(document.createElement("br"));

  const metoda_losowa_radio = document.createElement("input");
  metoda_losowa_radio.setAttribute("type", "radio");
  metoda_losowa_radio.setAttribute("name", "metoda");
  metoda_losowa_radio.setAttribute("id", "metoda_losowa_radio");
  metoda_losowa_radio.setAttribute("value", "metoda_losowa");

  form3a.appendChild(metoda_losowa_radio);
  form3a.style.marginBottom = "10px";

  const metoda_losowa_label = document.createElement("label");
  metoda_losowa_label.setAttribute("for", "metoda_losowa_radio");
  metoda_losowa_label.textContent = "Metoda losowa";
  form3a.appendChild(metoda_losowa_label);
  form3a.appendChild(document.createElement("br"));

  const main = document.querySelector("main");
  const oldForm = document.querySelector("#form2");
  main.removeChild(oldForm);
  main.appendChild(form3a);

  document.getElementById("Aside1").innerHTML = "";
  document.getElementById("Aside2").innerHTML = "";
  const radios = document.getElementsByName("metoda");
  radios.forEach(function (radio) {
    radio.addEventListener("click", radio_Value);
  });
}

function radio_Value() {
  var radios = document.getElementsByName("metoda");
  var metoda;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      metoda = radios[i].value;
    }
  }

  const form3a = document.querySelector("#form3a");
  if (form3a) {
    form3a.remove();
  }
  const form3b = document.querySelector("#form3b");
  if (form3b) {
    form3b.remove();
  }

  if (metoda === "metoda_liczbowa") {
    fetch("metoda_form.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("main").innerHTML = data;
        max_I_min_Dla_cech_wedlug_Ras();
      });
    fetch("rasy.html")
      .then((response) => response.text())
      .then((data) => {
        var value;
        if (postac[3] === "Człowiek") {
          value = "Człowiek_mod";
        } else if (postac[3] === "Elf") {
          value = "Elf_mod";
        } else if (postac[3] === "Krasnolud") {
          value = "Krasnolud_mod";
        } else if (postac[3] === "Obsydianin") {
          value = "Obsydianin_mod";
        } else if (postac[3] === "Ork") {
          value = "Ork_mod";
        } else if (postac[3] === "T'skrang") {
          value = "T'skrang_mod";
        } else if (postac[3] === "Troll") {
          value = "Troll_mod";
        } else if (postac[3] === "Wietrzniak") {
          value = "Wietrzniak_mod";
        }
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const tekstZPliku = htmlDocument.getElementById(value).innerHTML;

        document.getElementById("Aside2").innerHTML = tekstZPliku;
      });
  } else if (metoda === "metoda_losowa") {
    fetch("metoda_losowa.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("main").innerHTML = data;
      });
    fetch("cechy.html")
      .then((response) => response.text())
      .then((data1) => {
        document.getElementById("Aside1").innerHTML = data1;
      });
    fetch("rasy.html")
      .then((response) => response.text())
      .then((data) => {
        var value;
        if (postac[3] === "Człowiek") {
          value = "Człowiek_mod";
        } else if (postac[3] === "Elf") {
          value = "Elf_mod";
        } else if (postac[3] === "Krasnolud") {
          value = "Krasnolud_mod";
        } else if (postac[3] === "Obsydianin") {
          value = "Obsydianin_mod";
        } else if (postac[3] === "Ork") {
          value = "Ork_mod";
        } else if (postac[3] === "T'skrang") {
          value = "T'skrang_mod";
        } else if (postac[3] === "Troll") {
          value = "Troll_mod";
        } else if (postac[3] === "Wietrzniak") {
          value = "Wietrzniak_mod";
        }
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const tekstZPliku = htmlDocument.getElementById(value).innerHTML;

        document.getElementById("Aside2").innerHTML = tekstZPliku;
      });
  }
}

function losowanie_Cechy() {
  var tablica = [0, 0, 0, 0];
  tablica[0] = Math.floor(Math.random() * 6) + 1;
  tablica[1] = Math.floor(Math.random() * 6) + 1;
  tablica[2] = Math.floor(Math.random() * 6) + 1;
  tablica[3] = Math.floor(Math.random() * 6) + 1;

  tablica.sort(function (a, b) {
    return a - b;
  });
  tablica[0] = tablica[1] + tablica[2] + tablica[3];
  return tablica[0];
}

function losowanie_Szesciu_cech() {
  var SF = losowanie_Cechy();
  var ZR = losowanie_Cechy();
  var ZYW = losowanie_Cechy();
  var PER = losowanie_Cechy();
  var SW = losowanie_Cechy();
  var CHAR = losowanie_Cechy();

  if (postac[3] == "Obsydianin") {
    do {
      var SF = losowanie_Cechy();
    } while (SF < 14);
    //minimalna SF=15
  } else if (postac[3] == "Troll") {
    do {
      var SF = losowanie_Cechy();
    } while (SF < 10);
    do {
      var ZYW = losowanie_Cechy();
    } while (ZYW < 10);
    //minimalna SF=11 i min ZYW=11
  } else if (postac[3] == "Wietrzniak") {
    do {
      var SF = losowanie_Cechy();
    } while (SF > 11);
    //minimalna SF=11 i max SF=11
  }

  document.getElementById("input_SF").value = SF;
  document.getElementById("input_ZR").value = ZR;
  document.getElementById("input_ZYW").value = ZYW;
  document.getElementById("input_PER").value = PER;
  document.getElementById("input_SW").value = SW;
  document.getElementById("input_CHAR").value = CHAR;
  stopien_I_kostki_Akcji_wg_Wartosci_cechy();
}

function race_limits() {
  if (postac[2] == "Fechmistrz") {
    document.getElementById("Obsydianin_radio").disabled = true;
  } else if (postac[2] == "Kawalerzysta") {
    document.getElementById("Obsydianin_radio").disabled = true;
  } else if (postac[2] == "Powietrzny Łupieżca") {
    document.getElementById("Obsydianin_radio").disabled = true;
    document.getElementById("Elf_radio").disabled = true;
    document.getElementById("Wietrzniak_radio").disabled = true;
  } else if (postac[2] == "Władca Zwierząt") {
    document.getElementById("Obsydianin_radio").disabled = true;
    document.getElementById("T'skrang_radio").disabled = true;
  } else if (postac[2] == "Ksenomanta") {
    document.getElementById("Wietrzniak_radio").disabled = true;
  } else if (postac[2] == "Łucznik") {
    document.getElementById("Obsydianin_radio").disabled = true;
  } else if (postac[2] == "Złodziej") {
    document.getElementById("Obsydianin_radio").disabled = true;
    document.getElementById("Troll_radio").disabled = true;
  }
}

function showForm(formId) {
  var formToShow = document.getElementById(formId);
  var otherForms = document.querySelectorAll(
    'form[id^="form-"]:not(#' + formId + ")"
  );

  // Ukryj pozostałe formularze
  for (var i = 0; i < otherForms.length; i++) {
    otherForms[i].style.display = "none";
  }

  // Wyświetl wybrany formularz
  formToShow.style.display = "block";
}
function mod_Wartosci_od_Rasy() {
  var x = postac[3];
  var ZR = 0,
    SF = 0,
    ZYW = 0,
    PER = 0,
    SW = 0,
    CHAR = 0;
  var A = 0,
    B = 0,
    C = 0,
    D = 0,
    E = 0,
    F = 0;
  if (x === "Elf") {
    ZR = 2;
    SF = 0;
    ZYW = -2;
    PER = 1;
    SW = 1;
    CHAR = 1;
  } else if (x === "Krasnolud") {
    ZR = 0;
    SF = 2;
    ZYW = 3;
    PER = 0;
    SW = 0;
    CHAR = -2;
  } else if (x === "Obsydianin") {
    ZR = -2;
    SF = 6;
    ZYW = 4;
    PER = -1;
    SW = 0;
    CHAR = -1;
  } else if (x === "Ork") {
    ZR = -1;
    SF = 3;
    ZYW = 1;
    PER = 0;
    SW = -2;
    CHAR = -1;
  } else if (x === "Troll") {
    ZR = 0;
    SF = 4;
    ZYW = 2;
    PER = -1;
    SW = 1;
    CHAR = 0;
  } else if (x === "T'skrang") {
    ZR = 1;
    SF = 0;
    ZYW = 1;
    PER = 0;
    SW = 0;
    CHAR = 1;
  } else if (x === "Wietrzniak") {
    ZR = 1;
    SF = -4;
    ZYW = -3;
    PER = 1;
    SW = 0;
    CHAR = 2;
  }
  A = parseInt(document.getElementById("input_ZR").value) + ZR;
  document.getElementById("input_ZR").value = A;
  B = parseInt(document.getElementById("input_SF").value) + SF;
  document.getElementById("input_SF").value = B;
  C = parseInt(document.getElementById("input_ZYW").value) + ZYW;
  document.getElementById("input_ZYW").value = C;
  D = parseInt(document.getElementById("input_PER").value) + PER;
  document.getElementById("input_PER").value = D;
  E = parseInt(document.getElementById("input_SW").value) + SW;
  document.getElementById("input_SW").value = E;
  F = parseInt(document.getElementById("input_CHAR").value) + CHAR;
  document.getElementById("input_CHAR").value = F;
  //wiem wiem, mozna to ladniej zapisac

  document.getElementById("modyfikator_rasowy").style.display = "none";
  postac[4] = document.getElementById("input_SF").value;
  postac[5] = document.getElementById("input_ZR").value;
  postac[6] = document.getElementById("input_ZYW").value;
  postac[7] = document.getElementById("input_PER").value;
  postac[8] = document.getElementById("input_SW").value;
  postac[9] = document.getElementById("input_CHAR").value;

  stopien_I_kostki_Akcji_wg_Wartosci_cechy();
  stopien_Cechy_przypisanie_Wartosci_w_Tablicy_globalnej();
  obrona();
  wywolanie_okna_talenty();
}

function zmiana_Wartosci() {
  suma_kosztow_wszystkich_cech();
  stopien_I_kostki_Akcji_wg_Wartosci_cechy();
  laduj_Opis_cechy_do_Aside1();
  stopien_Cechy_przypisanie_Wartosci_w_Tablicy_globalnej();
}

function suma_kosztow_wszystkich_cech() {
  var koszty_cech_w_tablicy = [0, 0, 0, 0, 0, 0];
  var wartosc_spiner;
  wartosc_spiner = document.getElementById("input_SF").value;
  koszty_cech_w_tablicy[0] = jaki_koszt(wartosc_spiner);
  wartosc_spiner = document.getElementById("input_ZR").value;
  koszty_cech_w_tablicy[1] = jaki_koszt(wartosc_spiner);
  wartosc_spiner = document.getElementById("input_ZYW").value;
  koszty_cech_w_tablicy[2] = jaki_koszt(wartosc_spiner);
  wartosc_spiner = document.getElementById("input_PER").value;
  koszty_cech_w_tablicy[3] = jaki_koszt(wartosc_spiner);
  wartosc_spiner = document.getElementById("input_SW").value;
  koszty_cech_w_tablicy[4] = jaki_koszt(wartosc_spiner);
  wartosc_spiner = document.getElementById("input_CHAR").value;
  koszty_cech_w_tablicy[5] = jaki_koszt(wartosc_spiner);

  wartosc_spiner =
    koszty_cech_w_tablicy[0] +
    koszty_cech_w_tablicy[1] +
    koszty_cech_w_tablicy[2] +
    koszty_cech_w_tablicy[3] +
    koszty_cech_w_tablicy[4] +
    koszty_cech_w_tablicy[5];

  var wartosc_punktow;
  wartosc_punktow = 66 - wartosc_spiner;
  document.getElementById("punkty_Do_rozdania").textContent = wartosc_punktow;

  if (wartosc_spiner === 66) {
    document.getElementById("modyfikator_rasowy").style.display = "block";
  }
}

function jaki_koszt(wartosc_spiner) {
  const koszty = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 19, 21, 23];
  var koszt;
  if (wartosc_spiner == 2) {
    koszt = koszty[0];
  } else if (wartosc_spiner == 3) {
    koszt = koszty[1];
  } else if (wartosc_spiner == 4) {
    koszt = koszty[2];
  } else if (wartosc_spiner == 5) {
    koszt = koszty[3];
  } else if (wartosc_spiner == 6) {
    koszt = koszty[4];
  } else if (wartosc_spiner == 7) {
    koszt = koszty[5];
  } else if (wartosc_spiner == 8) {
    koszt = koszty[6];
  } else if (wartosc_spiner == 9) {
    koszt = koszty[7];
  } else if (wartosc_spiner == 10) {
    koszt = koszty[8];
  } else if (wartosc_spiner == 11) {
    koszt = koszty[9];
  } else if (wartosc_spiner == 12) {
    koszt = koszty[10];
  } else if (wartosc_spiner == 13) {
    koszt = koszty[11];
  } else if (wartosc_spiner == 14) {
    koszt = koszty[12];
  } else if (wartosc_spiner == 15) {
    koszt = koszty[13];
  } else if (wartosc_spiner == 16) {
    koszt = koszty[14];
  } else if (wartosc_spiner == 17) {
    koszt = koszty[15];
  } else if (wartosc_spiner == 18) {
    koszt = koszty[16];
  } else {
    koszt = 0;
  }
  return koszt;
}
function max_I_min_Dla_cech_wedlug_Ras(rasa) {
  rasa = postac[3];
  var inputNumber;
  if (rasa == "Obsydianin") {
    inputNumber = document.getElementById("input_SF");
    inputNumber.min = "15";
  } else if (rasa == "Troll") {
    inputNumber = document.getElementById("input_SF");
    inputNumber.min = "11";
    inputNumber = document.getElementById("input_ZYW");
    inputNumber.min = "11";
  } else if (rasa == "Wietrzniak") {
    inputNumber = document.getElementById("input_SF");
    inputNumber.max = "11";
  }
}

function stopien_I_kostki_Akcji_wg_Wartosci_cechy() {
  const inputs = document.querySelectorAll("input[type='number']");
  const stopnie = document.querySelectorAll("[id^='st_']");
  const kostki = document.querySelectorAll("[id^='k_']");

  for (let i = 0; i < inputs.length; i++) {
    const wartosc_cechy = parseFloat(inputs[i].value);
    let stopien, kostki_Akcji;

    if (wartosc_cechy >= 2 && wartosc_cechy < 4) {
      stopien = "2";
      kostki_Akcji = "1K4-1";
    } else if (wartosc_cechy >= 4 && wartosc_cechy < 7) {
      stopien = "3";
      kostki_Akcji = "1K4";
    } else if (wartosc_cechy >= 7 && wartosc_cechy < 10) {
      stopien = "4";
      kostki_Akcji = "1K6";
    } else if (wartosc_cechy >= 10 && wartosc_cechy < 13) {
      stopien = "5";
      kostki_Akcji = "1K8";
    } else if (wartosc_cechy >= 13 && wartosc_cechy < 16) {
      stopien = "6";
      kostki_Akcji = "1K10";
    } else if (wartosc_cechy >= 16 && wartosc_cechy < 19) {
      stopien = "7";
      kostki_Akcji = "1K12";
    } else if (wartosc_cechy >= 19 && wartosc_cechy < 22) {
      stopien = "8";
      kostki_Akcji = "2K6";
    } else if (wartosc_cechy >= 22 && wartosc_cechy < 25) {
      stopien = "9";
      kostki_Akcji = "1K8+1K6";
    } else if (wartosc_cechy >= 25 && wartosc_cechy < 28) {
      stopien = "10";
      kostki_Akcji = "1K10+1K6";
    } else if (wartosc_cechy >= 28 && wartosc_cechy < 30) {
      stopien = "11";
      kostki_Akcji = "1K10+1K8";
    } else {
      stopien = "";
      kostki_Akcji = "";
    }

    stopnie[i].textContent = stopien;
    kostki[i].textContent = kostki_Akcji;
  }
}

function laduj_Opis_cechy_do_Aside1() {
  const inputs = document.querySelectorAll("input[type='number']");
  var nazwa_kliknietego_inputa;
  var text_nazwa;
  //let nazwa_kliknietego_inputa;
  inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
      nazwa_kliknietego_inputa = event.target.id;

      if (nazwa_kliknietego_inputa === "input_SF") {
        text_nazwa = "SF";
      } else if (nazwa_kliknietego_inputa === "input_ZR") {
        text_nazwa = "ZR";
      } else if (nazwa_kliknietego_inputa === "input_ZYW") {
        text_nazwa = "ZYW";
      } else if (nazwa_kliknietego_inputa === "input_PER") {
        text_nazwa = "PER";
      } else if (nazwa_kliknietego_inputa === "input_SW") {
        text_nazwa = "SW";
      } else if (nazwa_kliknietego_inputa === "input_CHAR") {
        text_nazwa = "CHAR";
      }

      fetch("cechy.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(text_nazwa).innerHTML;

          document.getElementById("Aside1").innerHTML = tekstZPliku;
        });
    });
  });
}

function stopien_Cechy_przypisanie_Wartosci_w_Tablicy_globalnej() {
  postac[10] = document.getElementById("st_SF").textContent;
  postac[11] = document.getElementById("st_ZR").textContent;
  postac[12] = document.getElementById("st_ZYW").textContent;
  postac[13] = document.getElementById("st_PER").textContent;
  postac[14] = document.getElementById("st_SW").textContent;
  postac[15] = document.getElementById("st_CHAR").textContent;
}

function obliczObrone(wartosc_cechy) {
  var obrona;
  if (wartosc_cechy == 1) {
    obrona = 2;
  } else if (wartosc_cechy == 2 || wartosc_cechy == 3) {
    obrona = 3;
  } else if (wartosc_cechy == 4 || wartosc_cechy == 5 || wartosc_cechy == 6) {
    obrona = 4;
  } else if (wartosc_cechy == 7 || wartosc_cechy == 8) {
    obrona = 5;
  } else if (wartosc_cechy == 9 || wartosc_cechy == 10) {
    obrona = 6;
  } else if (
    wartosc_cechy == 11 ||
    wartosc_cechy == 12 ||
    wartosc_cechy == 13
  ) {
    obrona = 7;
  } else if (wartosc_cechy == 14 || wartosc_cechy == 15) {
    obrona = 8;
  } else if (wartosc_cechy == 16 || wartosc_cechy == 17) {
    obrona = 9;
  } else if (
    wartosc_cechy == 18 ||
    wartosc_cechy == 19 ||
    wartosc_cechy == 20
  ) {
    obrona = 10;
  } else if (wartosc_cechy == 21 || wartosc_cechy == 22) {
    obrona = 11;
  } else if (wartosc_cechy == 23 || wartosc_cechy == 24) {
    obrona = 12;
  } else if (
    wartosc_cechy == 25 ||
    wartosc_cechy == 26 ||
    wartosc_cechy == 27
  ) {
    obrona = 13;
  } else if (wartosc_cechy == 28 || wartosc_cechy == 29) {
    obrona = 14;
  } else if (wartosc_cechy == 30) {
    obrona = 15;
  }
  if (postac[3] == "Wietrzniak" && wartosc_cechy == postac[5]) {
    // mozliwy blad bo wartosc_cechy moze
    obrona = obrona + 2; // rownac sie innej cesze niz ZR
  }
  return obrona;
}

function szybkosc() {
  var wartosc_cechy = postac[5];
  var wartosc_cechy_w = postac[5];
  var szybkosc;
  if (postac[3] == "Elf") {
    wartosc_cechy = wartosc_cechy + 1;
  } else if (postac[3] == "Krasnolud") {
    wartosc_cechy = wartosc_cechy - 2;
  } else if (postac[3] == "Obsydianin") {
    wartosc_cechy = wartosc_cechy - 3;
  } else if (postac[3] == "Ork") {
    wartosc_cechy = wartosc_cechy + 2;
  } else if (postac[3] == "Wietrzniak") {
    wartosc_cechy = wartosc_cechy + 2;
    wartosc_cechy_w = wartosc_cechy_w - 8;
  }

  if (wartosc_cechy == 1) {
    szybkosc = "25/13";
  } else if (wartosc_cechy == 2) {
    szybkosc = "28/14";
  } else if (wartosc_cechy == 3) {
    szybkosc = "30/15";
  } else if (wartosc_cechy == 4) {
    szybkosc = "32/16";
  } else if (wartosc_cechy == 5) {
    szybkosc = "35/18";
  } else if (wartosc_cechy == 6) {
    szybkosc = "38/19";
  } else if (wartosc_cechy == 7) {
    szybkosc = "40/20";
  } else if (wartosc_cechy == 8) {
    szybkosc = "43/22";
  } else if (wartosc_cechy == 9) {
    szybkosc = "48/24";
  } else if (wartosc_cechy == 10) {
    szybkosc = "50/25";
  } else if (wartosc_cechy == 11) {
    szybkosc = "54/27";
  } else if (wartosc_cechy == 12) {
    szybkosc = "57/29";
  } else if (wartosc_cechy == 13) {
    szybkosc = "60/30";
  } else if (wartosc_cechy == 14) {
    szybkosc = "65/33";
  } else if (wartosc_cechy == 15) {
    szybkosc = "70/35";
  } else if (wartosc_cechy == 16) {
    szybkosc = "75/38";
  } else if (wartosc_cechy == 17) {
    szybkosc = "80/40";
  } else if (wartosc_cechy == 18) {
    szybkosc = "85/42";
  } else if (wartosc_cechy == 19) {
    szybkosc = "90/45";
  } else if (wartosc_cechy == 20) {
    szybkosc = "100/50";
  } else if (wartosc_cechy == 21) {
    szybkosc = "110/55";
  } else if (wartosc_cechy == 22) {
    szybkosc = "120/60";
  } else if (wartosc_cechy == 23) {
    szybkosc = "130/65";
  } else if (wartosc_cechy == 24) {
    szybkosc = "140/70";
  } else if (wartosc_cechy == 25) {
    szybkosc = "150/75";
  } else if (wartosc_cechy == 26) {
    szybkosc = "160/80";
  } else if (wartosc_cechy == 27) {
    szybkosc = "170/85";
  } else if (wartosc_cechy == 28) {
    szybkosc = "180/90";
  } else if (wartosc_cechy == 29) {
    szybkosc = "200/100";
  } else if (wartosc_cechy == 30) {
    szybkosc = "220/110";
  }

  if (wartosc_cechy_w == 1) {
    szybkosc_w = "25/13";
  } else if (wartosc_cechy_w == 2) {
    szybkosc_w = "28/14";
  } else if (wartosc_cechy_w == 3) {
    szybkosc_w = "30/15";
  } else if (wartosc_cechy_w == 4) {
    szybkosc_w = "32/16";
  } else if (wartosc_cechy_w == 5) {
    szybkosc_w = "35/18";
  } else if (wartosc_cechy_w == 6) {
    szybkosc_w = "38/19";
  } else if (wartosc_cechy_w == 7) {
    szybkosc_w = "40/20";
  } else if (wartosc_cechy_w == 8) {
    szybkosc_w = "43/22";
  } else if (wartosc_cechy_w == 9) {
    szybkosc_w = "48/24";
  } else if (wartosc_cechy_w == 10) {
    szybkosc_w = "50/25";
  } else if (wartosc_cechy_w == 11) {
    szybkosc_w = "54/27";
  } else if (wartosc_cechy_w == 12) {
    szybkosc_w = "57/29";
  } else if (wartosc_cechy_w == 13) {
    szybkosc_w = "60/30";
  } else if (wartosc_cechy_w == 14) {
    szybkosc_w = "65/33";
  } else if (wartosc_cechy_w == 15) {
    szybkosc_w = "70/35";
  } else if (wartosc_cechy_w == 16) {
    szybkosc_w = "75/38";
  } else if (wartosc_cechy_w == 17) {
    szybkosc_w = "80/40";
  } else if (wartosc_cechy_w == 18) {
    szybkosc_w = "85/42";
  } else if (wartosc_cechy_w == 19) {
    szybkosc_w = "90/45";
  } else if (wartosc_cechy_w == 20) {
    szybkosc_w = "100/50";
  } else if (wartosc_cechy_w == 21) {
    szybkosc_w = "110/55";
  } else if (wartosc_cechy_w == 22) {
    szybkosc_w = "120/60";
  } else if (wartosc_cechy_w == 23) {
    szybkosc_w = "130/65";
  } else if (wartosc_cechy_w == 24) {
    szybkosc_w = "140/70";
  } else if (wartosc_cechy_w == 25) {
    szybkosc_w = "150/75";
  } else if (wartosc_cechy_w == 26) {
    szybkosc_w = "160/80";
  } else if (wartosc_cechy_w == 27) {
    szybkosc_w = "170/85";
  } else if (wartosc_cechy_w == 28) {
    szybkosc_w = "180/90";
  } else if (wartosc_cechy_w == 29) {
    szybkosc_w = "200/100";
  } else if (wartosc_cechy_w == 30) {
    szybkosc_w = "220/110";
  }

  szybkosc = postac[19];
  szybkosc_w = postac[20];
}
function udzwig() {
  var wartosc_cechy = postac[4];
  var udzwig;

  if (wartosc_cechy == 1) {
    udzwig = "5/10";
  } else if (wartosc_cechy == 2) {
    udzwig = "8/15";
  } else if (wartosc_cechy == 3) {
    udzwig = "10/20";
  } else if (wartosc_cechy == 4) {
    udzwig = "12/25";
  } else if (wartosc_cechy == 5) {
    udzwig = "15/30";
  } else if (wartosc_cechy == 6) {
    udzwig = "18/36";
  } else if (wartosc_cechy == 7) {
    udzwig = "20/40";
  } else if (wartosc_cechy == 8) {
    udzwig = "25/50";
  } else if (wartosc_cechy == 9) {
    udzwig = "30/60";
  } else if (wartosc_cechy == 10) {
    udzwig = "35/70";
  } else if (wartosc_cechy == 11) {
    udzwig = "40/80";
  } else if (wartosc_cechy == 12) {
    udzwig = "45/90";
  } else if (wartosc_cechy == 13) {
    udzwig = "50/100";
  } else if (wartosc_cechy == 14) {
    udzwig = "60/120";
  } else if (wartosc_cechy == 15) {
    udzwig = "70/140";
  } else if (wartosc_cechy == 16) {
    udzwig = "80/160";
  } else if (wartosc_cechy == 17) {
    udzwig = "100/200";
  } else if (wartosc_cechy == 18) {
    udzwig = "115/230";
  } else if (wartosc_cechy == 19) {
    udzwig = "135/270";
  } else if (wartosc_cechy == 20) {
    udzwig = "155/310";
  } else if (wartosc_cechy == 21) {
    udzwig = "180/360";
  } else if (wartosc_cechy == 22) {
    udzwig = "215/430";
  } else if (wartosc_cechy == 23) {
    udzwig = "250/500";
  } else if (wartosc_cechy == 24) {
    udzwig = "290/580";
  } else if (wartosc_cechy == 25) {
    udzwig = "335/670";
  } else if (wartosc_cechy == 26) {
    udzwig = "390/780";
  } else if (wartosc_cechy == 27) {
    udzwig = "460/920";
  } else if (wartosc_cechy == 28) {
    udzwig = "535/1070";
  } else if (wartosc_cechy == 29) {
    udzwig = "600/1200";
  } else if (wartosc_cechy == 30) {
    udzwig = "725/1450";
  }
  postac[21] = udzwig;
}

function zdrowie() {
  if (postac[3] == "Obsydianin") {
    postac[31] = 3;
  }
  var wartosc_cechy = postac[6];
  var prog_zycia;
  var prog_ran;
  var prog_przytomnosci;
  var testy_zdrowienia;

  if (wartosc_cechy == 1) {
    prog_zycia = 19;
    prog_ran = 3;
    prog_przytomnosci = 10;
    testy_zdrowienia = "1/2";
  } else if (wartosc_cechy == 2) {
    prog_zycia = 20;
    prog_ran = 4;
    prog_przytomnosci = 11;
    testy_zdrowienia = "1/2";
  } else if (wartosc_cechy == 3) {
    prog_zycia = 22;
    prog_ran = 4;
    prog_przytomnosci = 13;
    testy_zdrowienia = "1";
  } else if (wartosc_cechy == 4) {
    prog_zycia = 23;
    prog_ran = 5;
    prog_przytomnosci = 14;
    testy_zdrowienia = "1";
  } else if (wartosc_cechy == 5) {
    prog_zycia = 24;
    prog_ran = 5;
    prog_przytomnosci = 15;
    testy_zdrowienia = "1";
  } else if (wartosc_cechy == 6) {
    prog_zycia = 26;
    prog_ran = 6;
    prog_przytomnosci = 17;
    testy_zdrowienia = "1";
  } else if (wartosc_cechy == 7) {
    prog_zycia = 27;
    prog_ran = 6;
    prog_przytomnosci = 18;
    testy_zdrowienia = "1";
  } else if (wartosc_cechy == 8) {
    prog_zycia = 28;
    prog_ran = 7;
    prog_przytomnosci = 19;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 9) {
    prog_zycia = 30;
    prog_ran = 7;
    prog_przytomnosci = 21;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 10) {
    (prog_zycia = 31), (prog_ran = 8);
    prog_przytomnosci = 22;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 11) {
    prog_zycia = 32;
    prog_ran = 8;
    prog_przytomnosci = 24;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 12) {
    prog_zycia = 34;
    prog_ran = 9;
    prog_przytomnosci = 26;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 13) {
    prog_zycia = 35;
    prog_ran = 9;
    prog_przytomnosci = 27;
    testy_zdrowienia = "2";
  } else if (wartosc_cechy == 14) {
    prog_zycia = 36;
    prog_ran = 10;
    prog_przytomnosci = 28;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 15) {
    prog_zycia = 38;
    prog_ran = 10;
    prog_przytomnosci = 29;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 16) {
    prog_zycia = 39;
    prog_ran = 11;
    prog_przytomnosci = 31;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 17) {
    prog_zycia = 40;
    prog_ran = 11;
    prog_przytomnosci = 32;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 18) {
    prog_zycia = 42;
    prog_ran = 12;
    prog_przytomnosci = 34;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 19) {
    prog_zycia = 43;
    prog_ran = 12;
    prog_przytomnosci = 35;
    testy_zdrowienia = "3";
  } else if (wartosc_cechy == 20) {
    prog_zycia = 44;
    prog_ran = 13;
    prog_przytomnosci = 36;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 21) {
    prog_zycia = 46;
    prog_ran = 13;
    prog_przytomnosci = 39;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 22) {
    prog_zycia = 47;
    prog_ran = 13;
    prog_przytomnosci = 40;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 23) {
    prog_zycia = 48;
    prog_ran = 14;
    prog_przytomnosci = 43;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 24) {
    prog_zycia = 50;
    prog_ran = 14;
    prog_przytomnosci = 43;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 25) {
    prog_zycia = 51;
    prog_ran = 15;
    prog_przytomnosci = 44;
    testy_zdrowienia = "4";
  } else if (wartosc_cechy == 26) {
    prog_zycia = 52;
    prog_ran = 15;
    prog_przytomnosci = 45;
    testy_zdrowienia = "5";
  } else if (wartosc_cechy == 27) {
    prog_zycia = 54;
    prog_ran = 15;
    prog_przytomnosci = 47;
    testy_zdrowienia = "5";
  } else if (wartosc_cechy == 28) {
    prog_zycia = 55;
    prog_ran = 16;
    prog_przytomnosci = 48;
    testy_zdrowienia = "5";
  } else if (wartosc_cechy == 29) {
    prog_zycia = 56;
    prog_ran = 16;
    prog_przytomnosci = 49;
    testy_zdrowienia = "5";
  } else if (wartosc_cechy == 30) {
    prog_zycia = 58;
    prog_ran = 17;
    prog_przytomnosci = 51;
    testy_zdrowienia = "5";
  }
  if (postac[3 == "Obsydianin"]) {
    prog_ran = prog_ran + 3;
  }
  postac[22] = prog_zycia;
  postac[23] = prog_ran;
  postac[24] = prog_przytomnosci;
  postac[25] = testy_zdrowienia;
}

function pancerz_duchowy() {
  var wartosc_cechy = postac[8];
  var pancerz_duchowy;
  if (wartosc_cechy > 0 && wartosc_cechy < 11) {
    pancerz_duchowy = 0;
  } else if (wartosc_cechy > 10 && wartosc_cechy < 14) {
    pancerz_duchowy = 1;
  } else if (wartosc_cechy > 13 && wartosc_cechy < 17) {
    pancerz_duchowy = 2;
  } else if (wartosc_cechy > 16 && wartosc_cechy < 20) {
    pancerz_duchowy = 3;
  } else if (wartosc_cechy > 19 && wartosc_cechy < 23) {
    pancerz_duchowy = 4;
  } else if (wartosc_cechy > 22 && wartosc_cechy < 26) {
    pancerz_duchowy = 5;
  } else if (wartosc_cechy > 25 && wartosc_cechy < 28) {
    pancerz_duchowy = 6;
  } else if (wartosc_cechy > 27 && wartosc_cechy < 31) {
    pancerz_duchowy = 7;
  }
  postac[26] = pancerz_duchowy;
}

function obrona() {
  postac[16] = obliczObrone(postac[5]);
  postac[17] = obliczObrone(postac[7]);
  postac[18] = obliczObrone(postac[9]);
  szybkosc();
  udzwig();
  zdrowie();
  pancerz_duchowy();
  karma();
  wypelnij_tablice_talentow();
  wywolanie_okna_talenty();
}
function karma() {
  var kostki_akcji;
  var koszt_Punktow_Punktach_legend;
  var karma_poczatkowa;
  var Karma_maksymalna;

  if (postac[3] == "Człowiek") {
    kostki_akcji = "k8";
    koszt_Punktow_Punktach_legend = 6;
    karma_poczatkowa = 10;
    Karma_maksymalna = 40;
  } else if (postac[3] == "Elf") {
    kostki_akcji = "k6";
    koszt_Punktow_Punktach_legend = 10;
    karma_poczatkowa = 5;
    Karma_maksymalna = 25;
  } else if (postac[3] == "Krasnolud") {
    kostki_akcji = "k6";
    koszt_Punktow_Punktach_legend = 10;
    karma_poczatkowa = 6;
    Karma_maksymalna = 25;
  } else if (postac[3] == "Obsydianin") {
    kostki_akcji = "k4";
    koszt_Punktow_Punktach_legend = 10;
    karma_poczatkowa = 5;
    Karma_maksymalna = 20;
  } else if (postac[3] == "Ork") {
    kostki_akcji = "k8";
    koszt_Punktow_Punktach_legend = 7;
    karma_poczatkowa = 10;
    Karma_maksymalna = 40;
  } else if (postac[3] == "T'skrang") {
    kostki_akcji = "k6";
    koszt_Punktow_Punktach_legend = 8;
    karma_poczatkowa = 5;
    Karma_maksymalna = 25;
  } else if (postac[3] == "Troll") {
    kostki_akcji = "k4";
    koszt_Punktow_Punktach_legend = 10;
    karma_poczatkowa = 6;
    Karma_maksymalna = 20;
  } else if (postac[3] == "Wietrzniak") {
    kostki_akcji = "k10";
    koszt_Punktow_Punktach_legend = 5;
    karma_poczatkowa = 15;
    Karma_maksymalna = 60;
  }
  postac[27] = kostki_akcji;
  postac[28] = koszt_Punktow_Punktach_legend;
  postac[29] = karma_poczatkowa;
  postac[30] = Karma_maksymalna;
}

function wywolanie_okna_talenty() {
  fetch("tabela_talenty.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#Aside1").innerHTML = data;

      // tutaj odbywa sie wypelnianie tablki
      wypelnij_Tabelke();
      if (t6[0] == " ") {
        document.getElementById("t6").style.display = "none";
        document.getElementById("t7").style.display = "none";
      } else if (t7[0] == " ") {
        document.getElementById("t7").style.display = "none";
      }
    });

  document.querySelector("main").innerHTML =
    '<b>Poziom 1 - Koszt: 1 punkt<br>Poziom 2 - Koszt: 2 punkty<br>Poziom 3 - Koszt: 3 punkty </br></br>Masz do dyspozycji:<br> <label id="punkty_Na_talenty"> 8 </label>punktów.</br></br><button id="idziemy_Do_umiejetnosci" onClick="idziemy_Do_umiejetnosci()" style="display:none;">Dalej</button></b>';

  document.querySelector("#Aside2").innerHTML = "";
}
function wypelnij_tablice_talentow() {
  if (postac[2] == "Czarodziej") {
    t1[0] = "Czytanie/pisanie";
    t1[1] = postac[13];
    t1[2] = "T";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Czyt./pis. znak. mag.";
    t2[1] = postac[13];
    t2[2] = "T";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Matryca";
    t3[1] = "-";
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Matryca";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Rzucanie czarów";
    t6[1] = postac[13];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
    t7[0] = "Tkanie wątków";
    t7[1] = postac[13];
    t7[2] = "N";
    t7[3] = "N";
    t7[4] = "N";
  } else if (postac[2] == "Fechmistrz") {
    t1[0] = "Broń biała";
    t1[1] = postac[11];
    t1[2] = "T";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Manewr";
    t2[1] = postac[13];
    t2[2] = "T";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Prowokacja";
    t3[1] = postac[15];
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Rytuał karmiczny";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Unik";
    t5[1] = postac[11];
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Zachowanie równowagi";
    t6[1] = postac[10];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
  } else if (postac[2] == "Iluzjonista") {
    t1[0] = "Czytanie/pisanie";
    t1[1] = postac[13];
    t1[2] = "N";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Czyt./pis. znak. mag.";
    t2[1] = postac[13];
    t2[2] = "N";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Matryca";
    t3[1] = "-";
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Matryca";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Rzucanie czarów";
    t6[1] = postac[13];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
    t7[0] = "Tkanie wątków";
    t7[1] = postac[13];
    t7[2] = "N";
    t7[3] = "N";
    t7[4] = "N";
  } else if (postac[2] == "Kawalerzysta") {
    t1[0] = "Broń biała";
    t1[1] = postac[11];
    t1[2] = "T";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Rytuał karmiczny";
    t2[1] = "-";
    t2[2] = "N";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Szarża";
    t3[1] = postac[10];
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Więź ze zwierzęciem";
    t4[1] = postac[15];
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Woltyżerka";
    t5[1] = postac[11];
    t5[2] = "T";
    t5[3] = "N";
    t5[4] = "N";
  } else if (postac[2] == "Powietrzny Łupieżca") {
    t1[0] = "Broń biała";
    t1[1] = postac[11];
    t1[2] = "T";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Ognista krew";
    t2[1] = postac[12];
    t2[2] = "T";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Okrzyk bojowy";
    t3[1] = postac[15];
    t3[2] = "T";
    t3[3] = "N";
    t3[4] = 1;
    t4[0] = "Rytuał karmiczny";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Unik";
    t5[1] = postac[11];
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = 1;
    t6[0] = "Żeglarstwo powietrzne";
    t6[1] = postac[14];
    t6[2] = "T";
    t6[3] = "N";
    t6[4] = "N";
  } else if (postac[2] == "Trubadur") {
    t1[0] = "Broń biała";
    t1[1] = postac[11];
    t1[2] = "N";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Naśladowanie głosu";
    t2[1] = postac[13];
    t2[2] = "T";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Pierwsze wrażenie";
    t3[1] = postac[15];
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Pieśń uczuć";
    t4[1] = postac[15];
    t4[2] = "T";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Przebranie";
    t5[1] = postac[13];
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = 1;
    t6[0] = "Rytuał karmiczny";
    t6[1] = "-";
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
  } else if (postac[2] == "Władca Zwierząt") {
    t1[0] = "Pazury";
    t1[1] = parseInt(postac[10]) + 3;
    t1[2] = "T";
    t1[3] = "T";
    t1[4] = "N";
    t2[0] = "Rytuał karmiczny";
    t2[1] = "-";
    t2[2] = "N";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Tropienie";
    t3[1] = postac[13];
    t3[2] = "T";
    t3[3] = "N";
    t3[4] = 1;
    t4[0] = "Walka wręcz";
    t4[1] = postac[10];
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Więź ze zwierzęciem";
    t5[1] = postac[15];
    t5[2] = "T";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Zapanowanie na zwierzęciem";
    t6[1] = postac[15];
    t6[2] = "T";
    t6[3] = "N";
    t6[4] = 1;
  } else if (postac[2] == "Wojownik") {
    t1[0] = "Akrobatyczny atak";
    t1[1] = postac[11];
    t1[2] = "N";
    t1[3] = "T";
    t1[4] = "N";
    t2[0] = "Broń biała";
    t2[1] = postac[11];
    t2[2] = "T";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Drewniana skóra";
    t3[1] = postac[12];
    t3[2] = "T";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Powietrzny taniec";
    t4[1] = postac[11];
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = 1;
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Walka wręcz";
    t6[1] = postac[11];
    t6[2] = "T";
    t6[3] = "N";
    t6[4] = "N";
  } else if (postac[2] == "Ksenomanta") {
    t1[0] = "Czytanie/pisanie";
    t1[1] = postac[13];
    t1[2] = "N";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Czyt./pis. znak. mag.";
    t2[1] = postac[13];
    t2[2] = "N";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Matryca";
    t3[1] = "-";
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Matryca";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Rzucanie czarów";
    t6[1] = postac[13];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
    t7[0] = "Tkanie wątków";
    t7[1] = postac[13];
    t7[2] = "N";
    t7[3] = "N";
    t7[4] = "N";
  } else if (postac[2] == "Łucznik") {
    t1[0] = "Broń strzelecka";
    t1[1] = postac[11];
    t1[2] = "T";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Celny strzał";
    t2[1] = postac[11];
    t2[2] = "N";
    t2[3] = "T";
    t2[4] = "N";
    t3[0] = "Mistyczny znak";
    t3[1] = postac[13];
    t3[2] = "T";
    t3[3] = "N";
    t3[4] = 1;
    t4[0] = "Rytuał karmiczny";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Strzała kierunku";
    t5[1] = postac[13];
    t5[2] = "T";
    t5[3] = "N";
    t5[4] = 4;
    t6[0] = "Unik";
    t6[1] = postac[11];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = 1;
  } else if (postac[2] == "Mistrz Żywiołów") {
    t1[0] = "Czytanie/pisanie";
    t1[1] = postac[13];
    t1[2] = "N";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Czyt./pis. znak. mag.";
    t2[1] = postac[13];
    t2[2] = "N";
    t2[3] = "N";
    t2[4] = "N";
    t3[0] = "Matryca";
    t3[1] = "-";
    t3[2] = "N";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Matryca";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Rzucanie czarów";
    t6[1] = postac[13];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = "N";
    t7[0] = "Tkanie wątków";
    t7[1] = postac[13];
    t7[2] = "N";
    t7[3] = "N";
    t7[4] = "N";
  } else if (postac[2] == "Zbrojmistrz") {
    t1[0] = "Broń biała";
    t1[1] = postac[11];
    t1[2] = "N";
    t1[3] = "N";
    t1[4] = "N";
    t2[0] = "Historia broni";
    t2[1] = postac[13];
    t2[2] = "T";
    t2[3] = "T";
    t2[4] = "N";
    t3[0] = "Przekucie ostrza";
    t3[1] = postac[13];
    t3[2] = "NT";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Rytuał karmiczny";
    t4[1] = "-";
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Umysł ze stali";
    t5[1] = postac[14];
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = 1;
    t6[0] = "Unik";
    t6[1] = postac[11];
    t6[2] = "N";
    t6[3] = "N";
    t6[4] = 1;
  } else if (postac[2] == "Złodziej") {
    t1[0] = "Atak z zaskoczenia";
    t1[1] = postac[11];
    t1[2] = "T";
    t1[3] = "T";
    t1[4] = "N";
    t2[0] = "Broń biała";
    t2[1] = postac[11];
    t2[2] = "N";
    t2[3] = "T";
    t2[4] = "N";
    t3[0] = "Kradzież kieszonkowa";
    t3[1] = postac[11];
    t3[2] = "T";
    t3[3] = "N";
    t3[4] = "N";
    t4[0] = "Magiczny wytrych";
    t4[1] = postac[11];
    t4[2] = "N";
    t4[3] = "N";
    t4[4] = "N";
    t5[0] = "Rytuał karmiczny";
    t5[1] = "-";
    t5[2] = "N";
    t5[3] = "N";
    t5[4] = "N";
    t6[0] = "Skradanie się";
    t6[1] = postac[11];
    t6[2] = "T";
    t6[3] = "N";
    t6[4] = "N";
    t7[0] = "Wspinaczka";
    t7[1] = postac[11];
    t7[2] = "N";
    t7[3] = "N";
    t7[4] = "N";
  }
}
function wypelnij_Tabelke() {
  if (t6[0] === undefined) {
    t6[0] = " ";
    t6[1] = " ";
    t6[2] = " ";
    t6[3] = " ";
    t6[4] = " ";
    t7[0] = " ";
    t7[1] = " ";
    t7[2] = " ";
    t7[3] = " ";
    t7[4] = " ";
  } else if (t7[0] === undefined) {
    t7[0] = " ";
    t7[1] = " ";
    t7[2] = " ";
    t7[3] = " ";
    t7[4] = " ";
  }
  document.getElementById("nazwa_Talent_1").innerHTML = t1[0];
  document.getElementById("nazwa_Talent_2").innerHTML = t2[0];
  document.getElementById("nazwa_Talent_3").innerHTML = t3[0];
  document.getElementById("nazwa_Talent_4").innerHTML = t4[0];
  document.getElementById("nazwa_Talent_5").innerHTML = t5[0];
  document.getElementById("nazwa_Talent_6").innerHTML = t6[0];
  document.getElementById("nazwa_Talent_7").innerHTML = t7[0];

  document.getElementById("cecha_Talent_1").innerHTML = t1[1];
  document.getElementById("cecha_Talent_2").innerHTML = t2[1];
  document.getElementById("cecha_Talent_3").innerHTML = t3[1];
  document.getElementById("cecha_Talent_4").innerHTML = t4[1];
  document.getElementById("cecha_Talent_5").innerHTML = t5[1];
  document.getElementById("cecha_Talent_6").innerHTML = t6[1];
  document.getElementById("cecha_Talent_7").innerHTML = t7[1];

  document.getElementById("suma_Talent_1").innerHTML = t1[1];
  document.getElementById("suma_Talent_2").innerHTML = t2[1];
  document.getElementById("suma_Talent_3").innerHTML = t3[1];
  document.getElementById("suma_Talent_4").innerHTML = t4[1];
  document.getElementById("suma_Talent_5").innerHTML = t5[1];
  document.getElementById("suma_Talent_6").innerHTML = t6[1];
  document.getElementById("suma_Talent_7").innerHTML = t7[1];

  document.getElementById("kostki_Talent_1").innerHTML = "K0";
  document.getElementById("kostki_Talent_2").innerHTML = "K0";
  document.getElementById("kostki_Talent_3").innerHTML = "K0";
  document.getElementById("kostki_Talent_4").innerHTML = "K0";
  document.getElementById("kostki_Talent_5").innerHTML = "K0";
  document.getElementById("kostki_Talent_6").innerHTML = "K0";
  document.getElementById("kostki_Talent_7").innerHTML = "K0";

  document.getElementById("dysc_Talent_1").innerHTML = t1[2];
  document.getElementById("dysc_Talent_2").innerHTML = t2[2];
  document.getElementById("dysc_Talent_3").innerHTML = t3[2];
  document.getElementById("dysc_Talent_4").innerHTML = t4[2];
  document.getElementById("dysc_Talent_5").innerHTML = t5[2];
  document.getElementById("dysc_Talent_6").innerHTML = t6[2];
  document.getElementById("dysc_Talent_7").innerHTML = t7[2];

  document.getElementById("karma_Talent_1").innerHTML = t1[3];
  document.getElementById("karma_Talent_2").innerHTML = t2[3];
  document.getElementById("karma_Talent_3").innerHTML = t3[3];
  document.getElementById("karma_Talent_4").innerHTML = t4[3];
  document.getElementById("karma_Talent_5").innerHTML = t5[3];
  document.getElementById("karma_Talent_6").innerHTML = t6[3];
  document.getElementById("karma_Talent_7").innerHTML = t7[3];

  document.getElementById("wyczerpanie_Talent_1").innerHTML = t1[4];
  document.getElementById("wyczerpanie_Talent_2").innerHTML = t2[4];
  document.getElementById("wyczerpanie_Talent_3").innerHTML = t3[4];
  document.getElementById("wyczerpanie_Talent_4").innerHTML = t4[4];
  document.getElementById("wyczerpanie_Talent_5").innerHTML = t5[4];
  document.getElementById("wyczerpanie_Talent_6").innerHTML = t6[4];
  document.getElementById("wyczerpanie_Talent_7").innerHTML = t7[4];
  if (t6[0] == " ") {
    document.getElementById("kostki_Talent_6").innerHTML = " ";
    document.getElementById("kostki_Talent_7").innerHTML = " ";
  }
  if (t7[0] == " ") {
    document.getElementById("kostki_Talent_7").innerHTML = " ";
  }
  ktory_Select_zostal_klikniety();
}
function kostki_Akcji_od_Stopnia(stopien) {
  var kostki;
  if (stopien == 1) {
    kostki = "1k4-2";
  } else if (stopien == 2) {
    kostki = "1k4-1";
  } else if (stopien == 3) {
    kostki = "1k4";
  } else if (stopien == 4) {
    kostki = "1k6";
  } else if (stopien == 5) {
    kostki = "1k8";
  } else if (stopien == 6) {
    kostki = "1k10";
  } else if (stopien == 7) {
    kostki = "1k12";
  } else if (stopien == 8) {
    kostki = "2K6";
  } else if (stopien == 9) {
    kostki = "1k8+K6";
  } else if (stopien == 10) {
    kostki = "1k10+K6";
  } else if (stopien == 11) {
    kostki = "1k10+K8";
  } else if (stopien == 12) {
    kostki = "2K10";
  } else if (stopien == 13) {
    kostki = "1K12+1K10";
  } else if (stopien == 14) {
    kostki = "K20+K4";
  } else if (stopien == 15) {
    kostki = "K20+K6";
  } else if (stopien == 0) {
    kostki = "K0";
  }
  return kostki;
}

function stopien_Talentu() {
  const a = "kostki_Talent_";
  const e = "suma_Talent_";
  const h = "t";
  const k = "cecha_Talent_";
  var b;
  var c;
  var d;
  var f;
  var g;
  var j;
  var l;
  var m;
  if (t6 === " " || t6[0] === " ") {
    b = 5; // b- ile talentow jest w tabeli
  } else if (t7 === " " || t7[0] === " ") {
    b = 6;
  } else {
    b = 7;
  }
  for (var i = 1; i <= b; i++) {
    c = a + i; //nazwa id dla kostek
    d = e + i; //nazwa id dla stopnia cechy
    g = h + i; //nazwa elementu select
    l = k + i; //nazwa sumy
    g = parseInt(document.getElementById(g).value); //wartosc elementu select
    // m = parseInt(document.getElementById(l).textContent); //wartosc cechy
    m = document.getElementById(l).textContent;
    if (m === "-") {
      m = 0;
    } else {
      m = parseInt(m);
    }

    j = parseInt(m + g); //suma poziom z select tx + wartosc cechy
    document.getElementById(d).innerHTML = j; //wyswietl wartosc dla sumy

    f = document.getElementById(d).textContent; //wartosc dla stopnia cechy wg.id

    document.getElementById(c).innerHTML = kostki_Akcji_od_Stopnia(f);
    if (i == 1) {
      t1[5] = j;
      t1[6] = document.getElementById(c).textContent;
    } else if (i == 2) {
      t2[5] = j;
      t2[6] = document.getElementById(c).textContent;
    } else if (i == 3) {
      t3[5] = j;
      t3[6] = document.getElementById(c).textContent;
    } else if (i == 4) {
      t4[5] = j;
      t4[6] = document.getElementById(c).textContent;
    } else if (i == 5) {
      t5[5] = j;
      t5[6] = document.getElementById(c).textContent;
    } else if (i == 6) {
      t6[5] = j;
      t6[6] = document.getElementById(c).textContent;
    } else if (i == 7) {
      t7[5] = j;
      t7[6] = document.getElementById(c).textContent;
    }
  }
}

function oblicz_punkty() {
  var punkty = document.getElementById("punkty_Na_talenty").innerHTML;
  var liczba_Talentow;
  const nazwa_Select_bez_Index = "t";
  var nazwa_Select;
  var wartosc_Select;
  var suma_Wartosci_select = 0;
  if (t6[0] === " ") {
    liczba_Talentow = 5; // b- ile talentow jest w tabeli
  } else if (t7[0] === " ") {
    liczba_Talentow = 6;
  } else {
    liczba_Talentow = 7;
  }
  for (var i = 1; i <= liczba_Talentow; i++) {
    nazwa_Select = nazwa_Select_bez_Index + i;
    wartosc_Select = parseInt(document.getElementById(nazwa_Select).value);
    suma_Wartosci_select = suma_Wartosci_select + wartosc_Select;
  }
  document.getElementById("punkty_Na_talenty").innerHTML =
    8 - suma_Wartosci_select;
  if (document.getElementById("punkty_Na_talenty").textContent === "0") {
    document.getElementById("idziemy_Do_umiejetnosci").style.display = "block";
  } else {
    document.getElementById("idziemy_Do_umiejetnosci").style.display = "none";
  }
  // tutaj liczyc
  stopien_Talentu();
}

function ktory_Select_zostal_klikniety() {
  const selects = document.querySelectorAll("select");
  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      const selectedId = event.target.id;

      laduj_Opis_talentu_Do_Aside2(selectedId); // call the function with the selected ID
    });
  });
}

function laduj_Opis_talentu_Do_Aside2(id_select) {
  var dyscyplina = postac[2];
  var a, b, c, d, e, f, g;

  if (
    dyscyplina === "Czarodziej" ||
    dyscyplina === "Iluzjonista" ||
    dyscyplina === "Ksenomanta" ||
    dyscyplina === "Mistrz Żywiołów"
  ) {
    // ladowanie danych z pliku
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("czyt-pis").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("czyt-pis-znak-mag").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("matryca").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("matryca").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rzucanie-czarow").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t7") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("tkanie-watkow").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Fechmistrz") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("manewr").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("prowokacja").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("unik").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "zachowanie-równowagi"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Kawalerzysta") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("szarża").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "więź-ze-zwierzęciem"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("woltyżerka").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Powietrzny Łupieżca") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("ognista-krew").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("okrzyk-bojowy").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("unik").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "Żeglarstwo-powietrzne"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Trubadur") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("naśladowanie-głosu").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("pierwsze-wrażenie").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("pieśń-uczuć").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("przebranie").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Władca Zwierząt") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("pazury").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("tropienie").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("walka-wręcz").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "więź-ze-zwierzęciem"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "zapanowanie-nad-zwierzęciem"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Wojownik") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("akrobatyczny-atak").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("drewniana-skóra").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("powietrzny taniec").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("walka-wręcz").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Łucznik") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-strzelecka").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("celny-strzał").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("mistyczny-znak").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("strzała-kierunku").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("unik").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Zbrojmistrz") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("historia-broni").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("przekucie-ostrza").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("umysł-ze-stali").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById("unik").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  } else if (dyscyplina === "Złodziej") {
    if (id_select == "t1") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("atak-z-zaskoczenia").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t2") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("broń-biała").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t3") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(
            "kradzież-kieszonkowa"
          ).innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t4") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("magiczny-wytrych").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t5") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("rytual-karmiczny").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t6") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("skradanie-się").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    } else if (id_select == "t7") {
      fetch("opis_talentow.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku =
            htmlDocument.getElementById("wspinaczka").innerHTML;

          document.getElementById("Aside2").innerHTML = tekstZPliku;
        });
    }
  }
}

function idziemy_Do_umiejetnosci() {
  fetch("umiejetnosci.html")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, "text/html");
      const tekstZPliku = htmlDocument.getElementById(
        "umiejetnosci_Poczatkowe"
      ).innerHTML;
      const tekstZPliku2 = htmlDocument.getElementById(
        "umiejetnosci_Wiedza"
      ).innerHTML;
      const tekstZPliku3 = htmlDocument.getElementById(
        "umiejetnosci_Artystyczne"
      ).innerHTML;
      const tekstZPliku4 = htmlDocument.getElementById("punkty").innerHTML;

      document.getElementById("Aside1").style.marginLeft = "40px";
      document.getElementById("main").innerHTML = tekstZPliku;

      document.getElementById("Aside1").innerHTML = tekstZPliku2 + tekstZPliku3;
      document.getElementById("Aside2").innerHTML = tekstZPliku4;
    });
}

function oblicz_punkty_umiejetnosci() {
  var punkty_wiedzy = 0;
  var punkty_artystyczne = 0;
  var nazwa_punktow_uw;
  var nazwa_punktow_ua;
  const nazwa_uw = "uw";
  const nazwa_ua = "ua";
  for (var i = 1; i <= 15; i++) {
    nazwa_punktow_uw = nazwa_uw + i;
    punkty_wiedzy += parseInt(document.getElementById(nazwa_punktow_uw).value);
  }

  punkty_wiedzy = 2 - punkty_wiedzy;
  document.getElementById("punkty_wiedza").textContent = punkty_wiedzy;

  for (var i = 1; i <= 9; i++) {
    nazwa_punktow_ua = nazwa_ua + i;
    punkty_artystyczne += parseInt(
      document.getElementById(nazwa_punktow_ua).value
    );
  }
  punkty_artystyczne = 1 - punkty_artystyczne;
  document.getElementById("punkty_artystyczne").textContent =
    punkty_artystyczne;
  if (punkty_wiedzy == 0 && punkty_artystyczne == 0) {
    document.getElementById("umiejetnosci_Gotowe").style.display = "block";
  } else {
    document.getElementById("umiejetnosci_Gotowe").style.display = "none";
  }
}

function dalej_Umiejetnosci_gotowe() {
  zapis_Umiejetnosci_do_Tablicy();
  if (
    postac[2] === "Czarodziej" ||
    postac[2] === "Iluzjonista" ||
    postac[2] === "Ksenomanta" ||
    postac[2] === "Mistrz Żywiołów"
  ) {
    laduj_liste_Czarow();
  } else {
    dalej_Do_sklepu();
  }
}

function laduj_liste_Czarow() {
  var nazwa_Pliku_czarow;
  if (postac[2] == "Czarodziej") {
    nazwa_Pliku_czarow = "czary_czarodziej.html";
  } else if (postac[2] == "Iluzjonista") {
    nazwa_Pliku_czarow = "czary_iluzjonista.html";
  } else if (postac[2] == "Ksenomanta") {
    nazwa_Pliku_czarow = "czary_ksenomanty.html";
  } else if (postac[2] == "Mistrz Żywiołów") {
    nazwa_Pliku_czarow = "czary_mistrza_zywiolow.html";
  }

  document.getElementById("main").innerHTML =
    "<b>Masz do wybrania: <lable id='ilosc_czarow' ></label> czarów</b><br/>";
  document.getElementById("ilosc_czarow").innerHTML =
    postac[13] + "<b> czarów</b><br/>";
  document.getElementById("main").innerHTML += "<b>Oto ich lista:</b><br/> ";
  document.getElementById("main").innerHTML += "<br/>";
  fetch(nazwa_Pliku_czarow)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, "text/html");
      const tekstZPliku = htmlDocument.getElementById("lista_czarow").innerHTML;

      document.getElementById("main").innerHTML += tekstZPliku;
    });
  document.getElementById("Aside1").innerHTML = "";
  document.getElementById("Aside2").innerHTML = "";
  document.getElementById("Aside2").innerHTML =
    "<button id='dalej_Do_sklepu' onclick='dalej_Do_sklepu()' style='display:none;'>Dalej</button>";
}

function laduj_Opis_czaru() {
  var nazwa_Checkboxa;
  var c;
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const selectedId = event.target.id;

      nazwa_Checkboxa = selectedId;

      if (postac[2] == "Czarodziej") {
        if (nazwa_Checkboxa == "czar1") {
          c = "c1";
        } else if (nazwa_Checkboxa == "czar2") {
          c = "c2";
        } else if (nazwa_Checkboxa == "czar3") {
          c = "c3";
        } else if (nazwa_Checkboxa == "czar4") {
          c = "c4";
        } else if (nazwa_Checkboxa == "czar5") {
          c = "c5";
        } else if (nazwa_Checkboxa == "czar6") {
          c = "c6";
        } else if (nazwa_Checkboxa == "czar7") {
          c = "c7";
        } else if (nazwa_Checkboxa == "czar8") {
          c = "c8";
        } else if (nazwa_Checkboxa == "czar9") {
          c = "c9";
        }
      } else if (postac[2] == "Iluzjonista") {
        if (nazwa_Checkboxa == "czar1") {
          c = "c1";
        } else if (nazwa_Checkboxa == "czar2") {
          c = "c2";
        } else if (nazwa_Checkboxa == "czar3") {
          c = "c3";
        } else if (nazwa_Checkboxa == "czar4") {
          c = "c4";
        } else if (nazwa_Checkboxa == "czar5") {
          c = "c5";
        } else if (nazwa_Checkboxa == "czar6") {
          c = "c6";
        } else if (nazwa_Checkboxa == "czar7") {
          c = "c7";
        } else if (nazwa_Checkboxa == "czar8") {
          c = "c8";
        }
      } else if (postac[2] == "Ksenomanta") {
        if (nazwa_Checkboxa == "czar1") {
          c = "c1";
        } else if (nazwa_Checkboxa == "czar2") {
          c = "c2";
        } else if (nazwa_Checkboxa == "czar3") {
          c = "c3";
        } else if (nazwa_Checkboxa == "czar4") {
          c = "c4";
        } else if (nazwa_Checkboxa == "czar5") {
          c = "c5";
        } else if (nazwa_Checkboxa == "czar6") {
          c = "c6";
        } else if (nazwa_Checkboxa == "czar7") {
          c = "c7";
        } else if (nazwa_Checkboxa == "czar8") {
          c = "c8";
        } else if (nazwa_Checkboxa == "czar9") {
          c = "c9";
        } else if (nazwa_Checkboxa == "czar10") {
          c = "c10";
        }
      } else if (postac[2] == "Mistrz Żywiołów") {
        if (nazwa_Checkboxa == "czar1") {
          c = "c1";
        } else if (nazwa_Checkboxa == "czar2") {
          c = "c2";
        } else if (nazwa_Checkboxa == "czar3") {
          c = "c3";
        } else if (nazwa_Checkboxa == "czar4") {
          c = "c4";
        } else if (nazwa_Checkboxa == "czar5") {
          c = "c5";
        } else if (nazwa_Checkboxa == "czar6") {
          c = "c6";
        } else if (nazwa_Checkboxa == "czar7") {
          c = "c7";
        } else if (nazwa_Checkboxa == "czar8") {
          c = "c8";
        } else if (nazwa_Checkboxa == "czar9") {
          c = "c9";
        }
      }

      var nazwa_Pliku_czarow;
      if (postac[2] == "Czarodziej") {
        nazwa_Pliku_czarow = "czary_czarodziej.html";
      } else if (postac[2] == "Iluzjonista") {
        nazwa_Pliku_czarow = "czary_iluzjonista.html";
      } else if (postac[2] == "Ksenomanta") {
        nazwa_Pliku_czarow = "czary_ksenomanty.html";
      } else if (postac[2] == "Mistrz Żywiołów") {
        nazwa_Pliku_czarow = "czary_mistrza_zywiolow.html";
      }
      var dane;
      fetch(nazwa_Pliku_czarow)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(c).innerHTML;

          dane = tekstZPliku;
          document.getElementById("Aside1").innerHTML = dane;
        });
    });
  });
  oblicz_Liczbe_czarow();
}
function oblicz_Liczbe_czarow() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });
  document.getElementById("ilosc_czarow").innerHTML = parseInt(
    postac[13] - checkedCount
  );
  if (checkedCount == postac[13]) {
    document.getElementById("dalej_Do_sklepu").style.display = "block";
  } else {
    document.getElementById("dalej_Do_sklepu").style.display = "none";
  }
}

function zapis_Czarow_do_tablicy() {
  if (postac[2] == "Czarodziej") {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var ids = [];

    for (var i = 0; i < checkboxes.length; i++) {
      var id = checkboxes[i].id;
      if (id === "czar1") {
        spell1[0] = "Badanie aury";
        spell1[1] = "1";
        spell1[2] = "6/14";
        spell1[3] = " 25 metrów";
        spell1[4] = " 5 + poziom minut";
        spell1[5] = "moc woli +5";
        spell1[6] = "obrona magiczna ofiary";
      } else if (id === "czar2") {
        spell2[0] = "Chodzenie po ścianach";
        spell2[1] = "1";
        spell2[2] = "6/14";
        spell2[3] = " dotyk";
        spell2[4] = " 10 + poziom rund";
        spell2[5] = " moc woli +5";
        spell2[6] = "obrona magiczna ofiary";
      } else if (id === "czar3") {
        spell3[0] = "Miażdżąca wola";
        spell3[1] = "1";
        spell3[2] = "6/16";
        spell3[3] = "120 m";
        spell3[4] = "1 runda";
        spell3[5] = "moc woli +5";
        spell3[6] = "obrona magiczna ofiary";
      } else if (id === "czar4") {
        spell4[0] = "Ognisty atak";
        spell4[1] = "1";
        spell4[2] = "7/15";
        spell4[3] = "25m";
        spell4[4] = "1 runda";
        spell4[5] = "moc woli +4";
        spell4[6] = "obrona magiczna ofiary";
      } else if (id === "czar5") {
        spell5[0] = "Rozniecenie ognia";
        spell5[1] = "brak";
        spell5[2] = "-/11";
        spell5[3] = "5 m";
        spell5[4] = "1 runda";
        spell5[5] = "rozpalenie łatwo palnych przedmiotów ";
        spell5[6] = "obrona magiczna ofiary";
      } else if (id === "czar6") {
        spell6[0] = "Rozproszenie magii";
        spell6[1] = "1";
        spell6[2] = "6/13";
        spell6[3] = "60 m";
        spell6[4] = "1 runda";
        spell6[5] = "moc woli";
        spell6[6] = "2";
      } else if (id === "czar7") {
        spell7[0] = "Umysłowy sztylet";
        spell7[1] = "brak";
        spell7[2] = "-/7";
        spell7[3] = "40 m";
        spell7[4] = "1 runda";
        spell7[5] = "moc woli +2";
        spell7[6] = " obrona magiczna ofiary";
      } else if (id === "czar8") {
        spell8[0] = "Zmysł astralny";
        spell8[1] = "2";
        spell8[2] = "5/15";
        spell8[3] = "60 m";
        spell8[4] = " 10 + poziom minut";
        spell8[5] = "moc woli + 3";
        spell8[6] = "6 (patrz opis)";
      } else if (id === "czar9") {
        spell9[0] = "Żelazna dłoń";
        spell9[1] = "1";
        spell9[2] = "5/13";
        spell9[3] = "dotyk";
        spell9[4] = "10 + poziom rund";
        spell9[5] = " zwiększenie o +3 stopnie obrażeń zadawanych bronią białą";
        spell9[6] = "obrona magiczna ofiary ";
      }
    }
  } else if (postac[2] == "Iluzjonista") {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var ids = [];

    for (var i = 0; i < checkboxes.length; i++) {
      var id = checkboxes[i].id;
      if (id === "czar1") {
        spell1[0] = "Dobra mina";
        spell1[1] = "2";
        spell1[2] = "5/14";
        spell1[3] = "dotyk";
        spell1[4] = "8 + poziom minut ";
        spell1[5] = "+5 stopni do Charyzmy ";
        spell1[6] = "obrona ma- giczna ofiary";
      } else if (id === "czar2") {
        spell2[0] = "Kontrola nad liną";
        spell2[1] = "brak";
        spell2[2] = "-/7";
        spell2[3] = "25 metrów";
        spell2[4] = " 3 + poziom minut";
        spell2[5] = "moc woli +4";
        spell2[6] = "obrona magiczna ofiary (patrz opis)";
      } else if (id === "czar3") {
        spell3[0] = "Lustrzane odbicie";
        spell3[1] = "1";
        spell3[2] = "7/15";
        spell3[3] = "dotyk";
        spell3[4] = "7 + poziom minut ";
        spell3[5] = "stworzenie podobizny w odległości 3 metrów";
        spell3[6] = " obrona magiczna ofiary";
      } else if (id === "czar4") {
        spell4[0] = "Przemiana metalu";
        spell4[1] = "1";
        spell4[2] = "7/14";
        spell4[3] = "dotyk";
        spell4[4] = "wynik testu mocy woli + 7 minut ";
        spell4[5] = "zmiana wyglądu metalu";
        spell4[6] = "obrona magiczna ofiary ";
      } else if (id === "czar5") {
        spell5[0] = "Sakiewka biedaka";
        spell5[1] = "brak";
        spell5[2] = "-/7";
        spell5[3] = " dotyk";
        spell5[4] = "1 + poziom minut";
        spell5[5] = "moc woli +4 ";
        spell5[6] = "obrona magiczna ofiary ";
      } else if (id === "czar6") {
        spell6[0] = "Światło";
        spell6[1] = "1";
        spell6[2] = "6/14";
        spell6[3] = "10 metrów";
        spell6[4] = "wynik testu mocy woli + 5 minut";
        spell6[5] = "powołanie do istnienia światła ";
        spell6[6] = "2 (patrz opis)";
      } else if (id === "czar7") {
        spell7[0] = "Tajemnicze głosy";
        spell7[1] = "brak";
        spell7[2] = "-/7";
        spell7[3] = "40 metrów ";
        spell7[4] = "15 + poziom rund";
        spell7[5] =
          " Stworzenie tylu iluzyjnych głosów, ile wynosi poziom rzucania czarów Iluzjonisty ";
        spell7[6] = " obrona magiczna ofiary";
      } else if (id === "czar8") {
        spell8[0] = "Uspokajający dotyk";
        spell8[1] = "brak";
        spell8[2] = "-/7 ";
        spell8[3] = "dotyk";
        spell8[4] = "12 + poziom rund";
        spell8[5] = "+3 stopnie przy obronie przed strachem";
        spell8[6] = "obrona magiczna ofiary ";
      }
    }
  } else if (postac[2] == "Ksenomanta") {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var ids = [];

    for (var i = 0; i < checkboxes.length; i++) {
      var id = checkboxes[i].id;
      if (id === "czar1") {
        spell1[0] = "Doświadczenie śmierci";
        spell1[1] = "1";
        spell1[2] = "6/12";
        spell1[3] = "20 m";
        spell1[4] = "3 + poziom rund ";
        spell1[5] = "moc woli +5";
        spell1[6] = "obrona magiczna ofiary";
      } else if (id === "czar2") {
        spell2[0] = "Gnicie";
        spell2[1] = "brak";
        spell2[2] = "-/9";
        spell2[3] = "25 metrów";
        spell2[4] = "1 runda";
        spell2[5] = "pożywienie zaczyna gnić ";
        spell2[6] = "2 (patrz opis)";
      } else if (id === "czar3") {
        spell3[0] = "Krąg zimna";
        spell3[1] = "2";
        spell3[2] = "6/15";
        spell3[3] = "dotyk ";
        spell3[4] = "6 + poziom minut";
        spell3[5] = "k6 obrażeń dla wszystkich w kręgu";
        spell3[6] = "obrona magiczna ofiary";
      } else if (id === "czar4") {
        spell4[0] = "Odstraszanie owadów";
        spell4[1] = "1";
        spell4[2] = "6/7";
        spell4[3] = "dotyk ";
        spell4[4] = " 3 + poziom minut";
        spell4[5] = "moc woli +5";
        spell4[6] = "2";
      } else if (id === "czar5") {
        spell5[0] = "Pojedynek woli";
        spell5[1] = " brak";
        spell5[2] = " -/7 ";
        spell5[3] = "10 metrów";
        spell5[4] = "3 + poziom minut ";
        spell5[5] = " moc woli +4 ";
        spell5[6] = "obrona magiczna ofiary ";
      } else if (id === "czar6") {
        spell6[0] = "Rozkazywanie zwierzętom nocy";
        spell6[1] = "1";
        spell6[2] = " 5/13";
        spell6[3] = " 120 metrów";
        spell6[4] = "3 + poziom minut";
        spell6[5] = "moc woli +2";
        spell6[6] = "obrona magiczna ofiar";
      } else if (id === "czar7") {
        spell7[0] = "Sucho lub mokro";
        spell7[1] = "1";
        spell7[2] = "7/8";
        spell7[3] = " 15 metrów";
        spell7[4] = "1 runda";
        spell7[5] = "moc woli +4 ";
        spell7[6] = "obrona magiczna ofiary ";
      } else if (id === "czar8") {
        spell8[0] = "Taniec kości";
        spell8[1] = "1";
        spell8[2] = "7/15 ";
        spell8[3] = "25 metrów";
        spell8[4] = "3 + poziom rund";
        spell8[5] = "moc woli +4";
        spell8[6] = " obrona magiczna ofiary ";
      } else if (id === "czar9") {
        spell9[0] = "Upiorny dotyk";
        spell9[1] = "brak";
        spell9[2] = " -/7";
        spell9[3] = "dotyk";
        spell9[4] = "1 runda";
        spell9[5] = "moc woli +6";
        spell9[6] = "  obrona magiczna ofiary";
      } else if (id === "czar10") {
        spell10[0] = "Wykrycie ożywieńców";
        spell10[1] = "brak";
        spell10[2] = "-/7";
        spell10[3] = " 25 metrów";
        spell10[4] = "3 + poziom minut";
        spell10[5] = "moc woli +5";
        spell10[6] = "obrona magiczna ofiary ";
      }
    }
  } else if (postac[2] == "Mistrz Żywiołów") {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var ids = [];

    for (var i = 0; i < checkboxes.length; i++) {
      var id = checkboxes[i].id;
      if (id === "czar1") {
        spell1[0] = "Kryształowe pociski";
        spell1[1] = "1";
        spell1[2] = "5/12";
        spell1[3] = "30 metrów";
        spell1[4] = "1 runda";
        spell1[5] = "moc woli +6";
        spell1[6] = " obrona magiczna ofiary";
      } else if (id === "czar2") {
        spell2[0] = "Maskowanie";
        spell2[1] = "brak";
        spell2[2] = "-/7";
        spell2[3] = "dotyk";
        spell2[4] = "5 + poziom minut";
        spell2[5] = "moc woli +7";
        spell2[6] = "obrona magiczna ofiary";
      } else if (id === "czar3") {
        spell3[0] = "Mowa roślin";
        spell3[1] = "brak";
        spell3[2] = "-/7";
        spell3[3] = "osobisty ";
        spell3[4] = "10+ poziom minut";
        spell3[5] = "rozmowa z duchami roślin ";
        spell3[6] = " 2";
      } else if (id === "czar4") {
        spell4[0] = "Oczyszczenie wody";
        spell4[1] = "1";
        spell4[2] = "5/13";
        spell4[3] = "dotyk ";
        spell4[4] = "1 runda ";
        spell4[5] = "1/2 moc woli +4 litry";
        spell4[6] = "2 lub więcej (patrz opis) ";
      } else if (id === "czar5") {
        spell5[0] = "Odporność na ogień";
        spell5[1] = "brak";
        spell5[2] = "-/7";
        spell5[3] = "dotyk";
        spell5[4] = "6 + poziom minut ";
        spell5[5] = "+3 do pancerza chroniącego przed ogniem";
        spell5[6] = "obrona magiczna ofiary ";
      } else if (id === "czar6") {
        spell6[0] = "Odporność na zimno";
        spell6[1] = "brak";
        spell6[2] = "-/7";
        spell6[3] = "dotyk ";
        spell6[4] = "6 + poziom minut";
        spell6[5] = "+3 do pancerza chroniącego przed zimnem";
        spell6[6] = "obrona magiczna ofiary";
      } else if (id === "czar7") {
        spell7[0] = "Płomienne ostrze";
        spell7[1] = "2";
        spell7[2] = "5/14";
        spell7[3] = "10 metrów";
        spell7[4] = "10 + poziom rund";
        spell7[5] = "+1k4 do zadawanych przez broń obrażeń ";
        spell7[6] = " obrona magiczna broni ofiary";
      } else if (id === "czar8") {
        spell8[0] = "Podgrzanie pożywienia";
        spell8[1] = "1";
        spell8[2] = "5/7 ";
        spell8[3] = "dotyk";
        spell8[4] = "10 + poziom minut ";
        spell8[5] = "podgrzewa odżywcze pożywieni";
        spell8[6] = " 2";
      } else if (id === "czar9") {
        spell9[0] = "Wspinaczka";
        spell9[1] = "1";
        spell9[2] = "6/14";
        spell9[3] = "dotyk";
        spell9[4] = "5 + poziom minut";
        spell9[5] = "+3 do wspinania";
        spell9[6] = "obrona magiczna broni ofiary";
      }
    }
  }
}

function dalej_Do_sklepu() {
  zapis_Czarow_do_tablicy();
  document.getElementById("main").innerHTML = "";
  document.getElementById("Aside1").innerHTML = "";
  document.getElementById("Aside2").innerHTML = "";
}

function zapis_Umiejetnosci_do_Tablicy() {
  const u_a = "u_a";
  const u_w = "u_w";
  const uw = "uw";
  const ua = "ua";
  var nazwa_u_a;
  var nazwa_u_w;
  var nazwa_uw;
  var nazwa_ua;
  var w_val;
  var w_val2;

  for (var i = 1; i <= 15; i++) {
    nazwa_u_w = u_w + i;
    nazwa_uw = uw + i;
    w_val = document.getElementById(nazwa_uw).value;
    if (w_val != 0 && postac[32] == undefined) {
      postac[32] = document.getElementById(nazwa_u_w).textContent;
      postac[33] = document.getElementById(nazwa_uw).value;
    } else if (w_val != 0 && postac[34] == undefined) {
      postac[34] = document.getElementById(nazwa_u_w).textContent;
      postac[35] = document.getElementById(nazwa_uw).value;
    }
  }
  for (var j = 1; j <= 9; j++) {
    nazwa_u_a = u_a + j;
    nazwa_ua = ua + j;
    w_val2 = document.getElementById(nazwa_ua).value;
    if (w_val2 != 0) {
      postac[36] = document.getElementById(nazwa_u_a).textContent;
      postac[37] = document.getElementById(nazwa_ua).value;
    }
  }
}
