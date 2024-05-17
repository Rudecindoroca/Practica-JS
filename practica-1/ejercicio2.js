// ejercicios de Objetos Literales


//ejercicio 1


const misDatos = {
    nombre: "Rudecindo",
    apellido: "Roca",
    dni: "46293915",
    edad: 18, //lo agregue para el ejercicio 2 
    comidasFavoritas: ["milanesa", "pizza", "hamburguesa"], //Uso un array para comidas favoritas

}

console.log(misDatos);

//ejercicio 2

function saludar(datos) {
    return `Hola, mi nombre es ${datos.nombre} ${datos.apellido} y tengo ${datos.edad} años. Mi primer comida favorita es ${datos.comidasFavoritas[0]}.`;
}


console.log(saludar(misDatos));


//ejercicio 3

function avanzar(auto, n) {
    if (n > 0) {
        auto.posicion += n;
    }
}

function retroceder(auto, n) {
    if (n > 0) {
        auto.posicion -= n;
    }
}

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    posicion: 0
};

avanzar(auto, 10);
retroceder(auto, 5);
avanzar(auto, 3);
retroceder(auto, 2);


console.log("La posición final :", auto.posicion);




//ejercicio 4

function moverse(auto, n) {
    auto.posicion += n;
}


const nuevoAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    posicion: 0
};


moverse(nuevoAuto, 10);
moverse(nuevoAuto, -5);
moverse(nuevoAuto, 3);
moverse(nuevoAuto, -2);


console.log("La posición final :", nuevoAuto.posicion);


//ejercicio 5


const ironMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energia: 100,
    getPoder: function (num) {
        if (num >= 0 && num < ironMan.poderes.length) {
            ironMan.energia -= 10;
            return `Poder Elegido de ${ironMan.nombre}: ${ironMan.poderes[num]}. Energía restante: ${ironMan.energia}.`;
        } else {
            return "Número de poder inválido.";
        }
    }
};


const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
        if (num >= 0 && num < Hulk.poderes.length) {
            Hulk.energia -= 10;
            return `Poder Elegido de ${Hulk.nombre}: ${Hulk.poderes[num]}. Energía restante: ${Hulk.energia}.`;
        } else {
            return "Número de poder inválido.";
        }
    }
};

const poderesIronMan = [0, 1, 2];
const poderesHulk = [0, 1, 2];

console.log("=== Comienza la Batalla ===");
for (let i = 0; i < 5; i++) {
    console.log("Turno", i + 1);
    console.log("Iron Man:", ironMan.getPoder(poderesIronMan[i]));
    console.log("Hulk:", Hulk.getPoder(poderesHulk[i]));
    console.log("=========================");

}






