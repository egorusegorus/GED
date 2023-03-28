const postac = [];
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
      });
  } else {
  }
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
}

function zmiana_Wartosci() {
  /* var punkty = parseInt(document.getElementById("punkty_Do_rozdania"));
  var ZR,SF,ZYW,PER,SW,CHAR;
  ZR= parseInt(document.getElementById("input_ZR"));
  SF= parseInt(document.getElementById("input_SF"));
  ZYW= parseInt(document.getElementById("input_ZYW"));
  PER= parseInt(document.getElementById("input_PER"));
  SW= parseInt(document.getElementById("input_SW"));
  CHAR= parseInt(document.getElementById("input_CHAR"));
*/
  var punkty = parseInt(document.getElementById("punkty_Do_rozdania"));
  var klikany_input = document.querySelectorAll("input[type='number']");

  var cecha = parseInt(document.getElementById("klikany_input"));
  var koszt = 0;

  inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
      // wyświetlenie id pola input, które zostało zmienione
      klikany_input = event.target.id;
    });
  });

  if (cecha >= 2 && cecha <= 7) {
    koszt = cecha - 2;
  } else if (cecha >= 8 && cecha <= 11) {
    koszt = cecha - 6;
  } else if (cecha >= 12 && cecha <= 13) {
    koszt = cecha - 4;
  } else if (cecha >= 14 && cecha <= 16) {
    koszt = cecha - 2;
  } else if (cecha >= 17 && cecha <= 18) {
    koszt = cecha - 1;
  }
  punkty = punkty - koszt;
  document.getElementById("punkty_Do_rozdania").innerHTML = punkty;
}
