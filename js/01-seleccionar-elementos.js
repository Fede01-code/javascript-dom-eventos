// Existen 3 formas mas comunes de seleccionar elementos

// seleccion de un selector
// const heading = document.querySelector('h2');

// Selección de una clase con especificidad
const heading = document.querySelector('.header__texto .no-margin');
console.log(heading);

// Modificar texto del DOM
heading.textContent = 'New Text';

// Agregar una clase
heading.classList.add('new-class');

// Remover clases
heading.classList.remove('no-margin');

// queryselectorall me retorna todas las etiquetas  o clases que concuerden
// const link = document.querySelectorAll('a');

//acceder al primer a
const link = document.querySelectorAll('.navegacion a');
console.log(link[0,1]);

//cambiar el contenido del link
link[1].textContent = 'Nuevo Texto del Link'

//modificar el enlace del anker
link[0].href = 'https://ricoprogramar.com';

//Agregar una clase al link o enlace
link[0].classList.add('new-class');

//remover clase
link[0].classList.remove('navegacion__enlace');