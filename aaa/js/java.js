function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var h2 = document.getElementById("btn");

      if (display == "none") {
        document.getElementById(el).style.display = 'block';
        h2.innerHTML = "Esconder";
      } else {
        document.getElementById(el).style.display = 'none';
        h2.innerHTML = "Mostrar";
      }
 }
