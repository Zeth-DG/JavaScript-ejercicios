//alert("scope funciona") // para probar que conectamos a index.html correctamente

// Variables: scope
/**
* El alcance (scope) de una variable se refiere a las partes de mi código donde 
* puedo o no acceder, leer o modificar una variable 
* Puedo acceder a una variable DESPUÉS de su declaración.
* 
* Global: la variable puede ser accedida en cualquier parte del programa 
* Local: por ejemplo, cuando declaramos una variable dentro de una función 
*/

// en este ejemplo se puede acceder en cualquier parte del programa
let nombre = "Zeth"; 

function imprimirMayusculas(nombre){
    console.log(nombre.toUpperCase())
} // imprimirMayusculas

imprimirMayusculas(nombre); 

// local: solo se puede acceder en el bloque de código donde se declaró
function sumar(){
    let num1 = 5;
    let num2 = 10;
    console.log("suma es igual a: " + (num1 + num2))
} // sumar

sumar();