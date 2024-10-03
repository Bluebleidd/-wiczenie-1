const element1 = document.getElementById("ex1_button");
element1.addEventListener("click", ex1Click);

const element2 = document.getElementById("ex2_text");
element2.addEventListener("input", ex2Validation);

function ex1Click() {
  for (let i = 0; i < 10; i++) {
    document.getElementById("ex1_content").innerHTML += "" + i;
    if (i < 9) {
      document.getElementById("ex1_content").innerHTML += ", ";
    }
  }
}

function ex2Validation() {
  const element = document.getElementById("ex2_content");
  const text = document.getElementById("ex2_text").value;
  element.style.color = "red";

  if (text.length != 9) {
    element.innerHTML = "Długość numeru musi być równa 9";
  } else {
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var letters = /[a-zA-Z]/;

    if (specialChars.test(text)) {
      element.innerHTML = "Numer nie może zawierać znaków specjalnych";
    } else if (letters.test(text)) {
      element.innerHTML = "Numer nie może zawierać liter";
    } else {
      element.style.color = "green";
      element.innerHTML = "Numer telefonu jest poprawny";
    }
  }
}
