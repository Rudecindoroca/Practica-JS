
// ejercicio 1 - haciendo cuentas

let mensaje1 = "ingrese un numero:";

let numero1 = prompt(mensaje1);



let mensaje2 = "ingrese otro numero:";

let numero2 = prompt(mensaje2);



function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

let multiplicacion = multiplicar(numero1, numero2);

console.log(`El resultado de multiplicar ${numero1} y ${numero2} es: ${multiplicacion}`)


