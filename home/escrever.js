function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 150 * i);
     }
     elemento.innerHTML.replace("aaaaaaa");
    }

    const titulo = document.querySelector('.titulo');
    
    setInterval(function(){
        typeWriter(titulo);
      
        
       
      }, 7000);
