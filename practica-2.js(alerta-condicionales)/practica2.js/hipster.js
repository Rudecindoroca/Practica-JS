let mensaje1 = "ingrese tu nacionalidad:";

let nacionalidad = prompt(mensaje1);


let mensaje2 = "ingrese tu profesion:";

let profesion = prompt(mensaje2);

let mensaje3 = "cuantos km cambinas por dia:";

let km = prompt(mensaje3);

function filosofoHipster (nacionalidad, profesion , km){
    if (nacionalidad === "Argentino" && profesion === "Musico" && km > 2) {
        console.log('Soy un filósofo hipster');
    } else {
        console.log('Aún no soy filósofo hipster');
    }
}


let resultado = filosofoHipster(nacionalidad, profesion, km);




