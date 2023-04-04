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

var punkty_cechy = 66;
function showDescription() {
  var radios = document.getElementsByName("dyscyplina");
  var value;
  var talent;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;
      console.log("Selected value: " + value);
      talent = value + "_talent";

      fetch("dyscypliny.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(value).innerHTML;
          console.log("Description text: " + tekstZPliku);

          document.getElementById("Aside1").innerHTML = tekstZPliku;
        });
      fetch("dyscypliny.html")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data, "text/html");
          const tekstZPliku = htmlDocument.getElementById(talent).innerHTML;
          console.log("Description text: " + tekstZPliku);

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
  var ZR, SF, ZYW, PER, SW, CHAR;
  var A, B, C, D, E, F;
  if (x == "Elf") {
    ZR = 2;
    SF = 0;
    ZYW = -2;
    PER = 1;
    SW = 1;
    CHAR = 1;
  } else if (x == "Krasnolud") {
    ZR = 0;
    SF = 2;
    ZYW = 3;
    PER = 0;
    SW = 0;
    CHAR = -2;
  } else if (x == "Obsydianin") {
    ZR = -2;
    SF = 6;
    ZYW = 4;
    PER = -1;
    SW = 0;
    CHAR = -1;
  } else if (x == "Ork") {
    ZR = -1;
    SF = 3;
    ZYW = 1;
    PER = 0;
    SW = -2;
    CHAR = -1;
  } else if (x == "Troll") {
    ZR = 0;
    SF = 4;
    ZYW = 2;
    PER = -1;
    SW = 1;
    CHAR = 0;
  } else if (x == "T'skrang") {
    ZR = 1;
    SF = 0;
    ZYW = 1;
    PER = 0;
    SW = 0;
    CHAR = 1;
  } else if (x == "Wietrzniak") {
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
}

function zmiana_Wartosci() {
  suma_kosztow_wszystkich_cech();
  stopien_I_kostki_Akcji_wg_Wartosci_cechy();
  laduj_Opis_cechy_do_Aside1();
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

/*
function stopien_I_kostki_Akcji_wg_Wartosci_cechy() {
  var wartosc_cechy;
  var stopien;
  var kostki_Akcji;
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
  }
}
*/

/*
function zmiana_Wartosci() {
  const inputs = document.querySelectorAll("input[type='number']");
  var nazwa_kliknietego_inputa;
  var wartosc_kliknietego_inputa;
  inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
      nazwa_kliknietego_inputa = event.target.id;
      wartosc_kliknietego_inputa = document.getElementById(
        nazwa_kliknietego_inputa
      ).value;

      var punkty = parseInt(
        document.getElementById("punkty_Do_rozdania").textContent
      );
      document.getElementById("punkty_Do_rozdania").textContent =
        punkty_cechy - jaki_koszt(wartosc_kliknietego_inputa);
      punkty = punkty_cechy - jaki_koszt(wartosc_kliknietego_inputa);
    });
  });
  punkty_cechy = punkty_cechy - jaki_koszt(wartosc_kliknietego_inputa);
  document.getElementById("Aside1").innerHTML = punkty_cechy;
  // punkty = punkty - jaki_koszt(wartosc_kliknietego_inputa);
}
*/
/*function ktory_spinner_zostal_zmieniony() {
  const inputs = document.querySelectorAll("input[type='number']");
  var nazwa_kliknietego_inputa;
  inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
      nazwa_kliknietego_inputa = event.target.id;
      var wartosc_kliknietego_inputa = document.getElementById(
        nazwa_kliknietego_inputa
      ).value;
      document.getElementById("Aside1").innerHTML = wartosc_kliknietego_inputa;
    });
  });
}
function wartosc_zmienionego_inputa() {
  const inputs = document.querySelectorAll("input[type='number']");
  var wartosc_kliknietego_inputa;
  var nazwa_kliknietego_inputa = ktory_spinner_zostal_zmieniony();
  inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
      wartosc_kliknietego_inputa = document.getElementById(
        nazwa_kliknietego_inputa
      ).value;
      document.getElementById("Aside1").innerHTML = wartosc_kliknietego_inputa;
    });
  });
  document.getElementById("Aside1").innerHTML = wartosc_kliknietego_inputa;
}
*/
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
          console.log("Description text: " + tekstZPliku);

          document.getElementById("Aside1").innerHTML = tekstZPliku;
        });
    });
  });
}
