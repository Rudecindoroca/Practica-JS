// practica bucle 

// Precalento 


// A

for (let i = 0; i < 5; i++) {
    console.log(`Practicando con bucle for`);
} 


// B

for (let i = 0; i < 11; i++) {
    console.log(`El valor de i es ${i}`);
} 


// C


// i

// para que imprima 2 en 2 tengo que modificar el inicio "i= 2" , la condicion " I<=20" y el modificador "I+=2"
for (let i = 2; i<=20; i+=2){
    console.log(i);

}

// ii

// para que imprima 5 en 5 tengo que modificar el inicio "i= 5" , la condicion " I<=50" y el modificador "I+=5"
for (let i = 5; i<=50; i+=5){
    console.log(i);

}


// D

for (let i=0; i<=100; i++){
    console.log(i);
}





// 2 - tablas de multiplicar 



//varaibable base con el numero 4 y la varrable rasultados con un array vacio 

let base = 4;
let resultados = []

for (let i=1; i<=10;i++){
    resultados.push(base*i);
}

console.log(resultados)


// 3 - Obteniendo Total

let ganancias = [2, 6, -4, 10, 450, -23, -7, 7, 8, 43]
let suma = 0

for (let i=0; i<ganancias.length; i++){
    suma = suma + ganancias[i];

}

console.log(suma)

// 4 - Recoriendo Arrays

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]
    

// A
for (let i=0; i<healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i]);
}


// B
for (let i=0; i<healingIsDifficult.length; i++){
    console.log(`${i +1} ${healingIsDifficult[i]}`);
}
    



// 5 - Recorriendo arrays de objetos literales

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]


for (let i = 0; i<got.length; i++){
    let persona= got[i]
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`)
    console.log(`Soy  ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`)

}

// uso el i para recorer cada objeto dentro del array "got", de esta manera puedo sacar los datos de cada personaje 




