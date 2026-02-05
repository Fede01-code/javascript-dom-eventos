const button = document.querySelector('.boton');


console.log(button);

//Verificar sí el botón existe
if (button) {
    button.addEventListener('click', function(e){
        console.log(e);
        e.preventDefault(); // Evita que se recargue la página
        console.log('Enviado formulario');
    });
    
}else {
    console.log('El botón no existe');
}