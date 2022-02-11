function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for (let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 150 * i);
    }
    elemento.innerHTML.replace("aaaaaaa");
}

const titulo = document.querySelector('.titulo');

setInterval(function() {
    typeWriter(titulo);



}, 7000);
function copiarTexto(el) {
    var display = document.getElementById(el).style.display;
    var h5 = document.getElementById("btn");



      if (display == "none") {

            document.getElementById(el).style.display = 'block';
            h5.innerHTML = "Esconder";

  
      } else {

            document.getElementById(el).style.display = 'none';
            h5.innerHTML = "Mostrar";
  
      }
    }

