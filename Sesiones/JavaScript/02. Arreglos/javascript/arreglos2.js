const colores = ["rojo", "verde", "azul", "amarillo"];
const numerosPares = [0, 2, 4, 6, 8, 10];
const personas = ["Ana", "Pablo", "Mauricio", "Juanita", "Ana", "Ana"]; 

// métodos de agregar o quitar elementos

// agrega un elemento al final del arreglo
colores.push("café");

//agregar elemento al inicio del arreglo
colores.unshift("morado");

// para eliminar el último elemento del arreglo
colores.pop(); 

//para eliminar el primer elemento del arreglo 
colores.shift(); 

// MÉTODOS ITERATIVOS
// forEach, ejecuta una operación sobre todos los elementos del arreglo
// se agrega una función anónima, es decir, NO se le pone nombre
// for.each no nos devuelve NINGÚN elemento de vuelta, solo ejecuta la función 

// con sintaxis similar a función común
colores.forEach(function (color) {
    console.log(color.toUpperCase());
});

// con sintaxis similar a función flecha 
personas.forEach((persona) => console.log(persona.toUpperCase())); 

// map por su parte SÍ nos regresa un array nuevo (que es importante renombrar)
const numerosImpares = numerosPares.map((numero) => numero + 1);

// filter -> evalúa cada elemento del array con una condición y 
// guarda cada elemento que cumple con esa condición en un nuevo array 

const filtro = personas.filter((persona) => persona === "Ana");

console.log(filtro.length); 