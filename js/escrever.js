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


      if (display == "none") {
        setInterval(function() {
            typeWriter(titulo);
            document.getElementById(el).style.display = 'block';
            h5.innerHTML = "Esconder";
        }, 7000);
  
      } else {
        setInterval(function() {
            typeWriter(titulo);
            document.getElementById(el).style.display = 'none';
            h5.innerHTML = "Mostrar";
        }, 7000);
