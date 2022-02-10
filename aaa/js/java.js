function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var h1 = document.getElementById("btn");

      if (display == "none") {
        document.getElementById(el).style.display = 'block';
        h1.innerHTML = "Esconder";
      } else {
        document.getElementById(el).style.display = 'none';
        h1.innerHTML = "Mostrar";
      }
 }