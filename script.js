const element1 = document.getElementById("ex1_button");
element1.addEventListener("click", ex1Click);

function ex1Click() {
  for (let i = 0; i < 10; i++) {
    document.getElementById("ex1_content").innerHTML += "" + i;
    if (i < 9) {
      document.getElementById("ex1_content").innerHTML += ", ";
    }
  }
}
