//Crear un nuevo link 

// Es importante que las etiquetas esten creadas en MAYUSCULA y sin apertura y cierre
const newLink = document.createElement('A')
console.log(newLink);

// Agregar el href
newLink.href = 'https://www.youtube.com/';

//Agregar un texto
newLink.textContent = 'A new link';

//Agregar una clase 
newLink.classList.add('navegacion__enlace');

//Agregar al documento
const navigation = document.querySelector('.navegacion');

navigation.appendChild(newLink);

