

function Mudarestado(el, btn) {
    
    var ele = document.getElementById(el);
    var display = ele.style.display;
    
    ele.style.display = display == 'none' ? 'block' : 'none';
    btn.innerHTML = display == 'none' ? 'Esconder' : 'Mostrar';

}

