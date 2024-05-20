let mensaje = "Bienvenidos a mi sitio.";

alert(mensaje);  


let deseaContinuar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector(".saludo");

if (deseaContinuar) {
    saludo.textContent  = "Qué alegría que quieras continuar tu visita";
} else {
    saludo.textContent = "Lamentamos que no quieras continuar tu visita";
}


let mensaje2 = "Por favor, ingrese su nombre";

let nombre = prompt(mensaje2);


document.querySelector("h1").innerText = `Bienvenido ${nombre}` ;


let mensaje3 = "Cuantos años tenes?";


let edad = prompt(mensaje3);


if (edad >= 18) {
    document.querySelector(".mayor-edad").innerText = "Sos mayor de edad";
} else {
    document
}





