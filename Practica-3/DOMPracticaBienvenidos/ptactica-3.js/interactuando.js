

// A
let mensaje = "Bienvenidos a mi sitio.";

alert(mensaje);  

// B
let deseaContinuar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector(".saludo");

if (deseaContinuar) {
    saludo.textContent  = "Qué alegría que quieras continuar tu visita";
} else {
    saludo.textContent = "Lamentamos que no quieras continuar tu visita";
}


// C

let mensaje2 = "Por favor, ingrese su nombre";

let nombre = prompt(mensaje2);

// D
document.querySelector("h1").innerText = `Bienvenido ${nombre}` ;

// E
let mensaje3 = "Cuantos años tenes?";


let edad = prompt(mensaje3);


if (edad < 18) {
    document.querySelector(".container-general").style.display = "none";
    document.getElementById("accesoDenegado").style.display = "block";
    
} 

// F
let programacion = confirm("¿Te gusta la programación?");

if (programacion === true) {

  

    document.querySelector(".container.background-img").style.backgroundImage = 'url("./img/programmer.jpeg")';
    
} else {
    document.querySelector(".container.background-img").style.backgroundImage = 'url("./img/gatito.jpeg")';
}




// G


let nuevaImagenURL = prompt("Por favor, ingresa la URL de la nueva imagen:");


let avatarImg = document.querySelector("img.avatar");


avatarImg.src = nuevaImagenURL;




// H


let pelicula = {};

// I
pelicula.nombre = prompt("Ingrese el nombre de su película favorita:");


pelicula.director = prompt("Ingrese el nombre del director de la película:");


pelicula.duracion = prompt("Ingrese la duración de la película (en minutos):");


pelicula.actor = prompt("Ingrese el nombre del actor principal de la película:");


let listaPelicula = document.querySelector("#pelicula ul");


// J
document.getElementById("nombre").innerText = "Nombre: " + pelicula.nombre;
document.getElementById("director").innerText = "Director: " + pelicula.director;
document.getElementById("duracion").innerText = "Duración: " + pelicula.duracion + " minutos";
document.getElementById("actor").innerText = "Actor principal: " + pelicula.actor;

let divPelicula = document.getElementById("pelicula");
divPelicula.style.display = "block";





