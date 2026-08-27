//alert ("Prueba para ver que si esta conectado y funciona")

// Arreglos
/**
 * Los elementos dentro de un arreglo deben tener una relación entre sí
 * Los elementos dentro de un arreglo usan el mismo tipo de dato.
 * Los arreglos tienen longitud y posiciones.
 * 
 * Longitud: total de elementos del array
 */

// declarar arreglos, la posición de cada elemento se define con este orden
const colores = ["rojo", "verde", "azul", "amarillo"];
const numerosPares = [0, 2, 4, 6, 8, 10];
const validaciones = [true, true, false, true];
const nulo = [null, null, null];

const matriz = [[1, 2, 3], 
                [4, 5, 6],
                [7, 8, 9]
];

const canciones = [
    {nombre: "cancion1", duracion: 1.44}, 
    {nombre: "cancion2", duracion: 4.41},
    {nombre: "cancion3", duracion: 5.27}
]; 

// conocer la longitud de un arreglo
console.log(colores.length);

// mostrar el arreglo en consola
console.log(colores);

//mostrar un elemento dentro del arra en consola
console.log(colores[0]);

//modificar elemento dentro del arreglo
colores[1] = "Rosa"; 

//para acceder a un elemento, en este caso el num 8
console.log(matriz[2][1]);

// para ver en el objeto la posición 0
console.log(canciones[1]);