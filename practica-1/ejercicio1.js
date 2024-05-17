//ejercicios de funciones




//ejercicio 1




function rectangulo(altura, ancho) {
    return altura * ancho;
}


console.log(rectangulo(5, 8)); 
console.log(rectangulo(10, 3));



//ejercicio 2


function triangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(triangulo(5, 8));


// ejercicio 3

function largoDelArray(array) {
    return array.length;
}


const miArray = [1, 2, 3, 4, 5]
console.log(largoDelArray(miArray)); 

// ejercicio 4

function cantidadDeLetras(palabra) {
    return palabra.length;
}

const leo = "messi";
console.log(cantidadDeLetras(leo)); 


// ejercicio 5

function persoADolar(pesos) {
    return pesos / 884.24;  //precio oficial del dolar

}

console.log(persoADolar(20000));



// ejercicio 6

function precioFinal(precio) {
    const iva = 0.21; 
    return precio * (1 + iva); 

}
console.log(precioFinal(100));


// ejercicio 7

function mitad(numero) {
    return numero / 2;
}


console.log(mitad(10));

// Ejecutando funciones 



function siguiente(numero) {
    return numero + 1;
  }

  //ejecucion 1

    console.log(siguiente(10));


function doble(numero) {
      return 2 * numero;
  }

//ejecucion 2

    console.log(doble(10));

 function siguienteDelDoble(numero) {
            return siguiente(doble(numero));
}

//ejecucion 3

console.log(siguienteDelDoble(10));



//funcion anterior 


function anterior(numero) {
    return numero - 1;
  }

console.log(anterior(5));

//funcion triple

function triple(numero) {
    return 3 * numero;
  }

console.log(triple(5));

//funcion anteriorDelTriple

function anteriorDelTriple(numero) {
    return anterior(triple(numero));
    }

       
console.log(anteriorDelTriple(5));







  
