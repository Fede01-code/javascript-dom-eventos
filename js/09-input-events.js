// Eventos de los input 

// Leer lo que ingresa el usuario

const userName = document.querySelector(".user-name");
const userPhone = document.querySelector(".user-phone");
const userEmail = document.querySelector(".user-email");
const userMessage = document.querySelector(".user-message");

function readText(e){
    console.log(e.target.value);
};

// userName.addEventListener("input", function(e){
//     //leer lo que usuario ingresa
//     console.log(e.target.value);

// });
// userPhone.addEventListener("input", function(e){
//     //leer lo que usuario ingresa
//     console.log(e.target.value);

// });
// userEmail.addEventListener("input", function(e){
//     //leer lo que usuario ingresa
//     console.log(e.target.value);

// });
// userMessage.addEventListener("input", function(e){
//     //leer lo que usuario ingresa
//     console.log(e.target.value);

// });


// refactorin
userName.addEventListener("input", readText);
userPhone.addEventListener("input", readText);
userEmail.addEventListener("input", readText);
userMessage.addEventListener("input", readText);