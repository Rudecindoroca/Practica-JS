// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo1 = document.getElementById(`titulo`); ;

    let saludo = document.getElementById('saludo');


    let span = document.querySelector('.bienvenida span');

    let bienvenidaSection = document.querySelector('.bienvenida');

  
    let personajesSection = document.querySelector('.personajes');



    span.addEventListener('click', function() {

        bienvenidaSection.style.display = 'none';

    
        personajesSection.style.display = 'flex';
    });

 
    

    titulo1.addEventListener(`mouseover`, function() {
        // Disparar prompt con mensaje "¿CÓMO TE LLAMÁS?"
        let nombre = prompt('¿CÓMO TE LLAMÁS?');
        
        // Evaluar el contenido de la variable nombre
        if (nombre && nombre.trim() !== "") {
            // Si nombre no está vacío
            saludo.textContent = `¡BIENVENID@ ${nombre.toUpperCase()}!`;
        } else {
            // Si nombre está vacío
            saludo.textContent = "¡BIENVENID@!";
        }

        titulo1.style.display = 'none';

        // Mostrar la etiqueta <span>
        span.style.display = 'block';
    });

    function toggleSeleccion(elemento) {
        elemento.classList.toggle('personaje-seleccionado');
    }


    let bart = document.getElementById('bart');
    let lisa = document.getElementById('lisa');
    let homero = document.getElementById('homero');
    let marge = document.getElementById('marge');
    let maggie = document.getElementById('maggie');
    let milhouse = document.getElementById('milhouse');
    let burns = document.getElementById('burns');
    let bobPatinio = document.getElementById('bobPatinio');
    let flanders = document.getElementById('flanders');
    let duffman = document.getElementById('duffman');
    let gorgory = document.getElementById('gorgory');
    let nelson = document.getElementById('nelson');

 
 

 
 
 }) 

 