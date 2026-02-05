// Bloquear la tecla enter

document.querySelector('.boton').addEventListener('keydown', function(e){
    if (e.key == "Enter") {
        e.preventDefault();
        console.log('Enter bloqueado');        
    }
});