// Eventos en JS 

// Click del mouse sobre un elemento
// Pulsación de una tecla específica
// Reproducción de un archivo multimedia
// Scroll del mouse
// Diligencia de un formulario 

// console.log(1);
// console.log(2);
// console.log(5);


//===========================================================

console.log(1);

// Load espera que el JS y los archivos que dependen del HTML estén listos.
window.addEventListener('load', function(){
    console.log(2);
    console.log('Ya cargó window 2');
});

//Otra froma de hacer lo mismo
window.onload = function(){
    console.log(3);
    console.log('Ya cargó window 3');
}

console.log(5);

const button = document.querySelector('.btnPrint');

// Evento de un clic 
button.addEventListener('click', function(){
    console.log('función externa')
    window.print()
});

// Evento del scroll

window.onscroll = function(){
    console.log('Estoy haciendo scroll...')
}