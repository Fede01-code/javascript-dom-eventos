//bloqueo de teclas 

const keyLockeds = ["a", "A","b","B"];

document.querySelectorAll(".campo__field").forEach(field => {
    field.addEventListener("keydown", function(e){
        if(keyLockeds.includes(e.key)){
            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`)
        };
    })
});

