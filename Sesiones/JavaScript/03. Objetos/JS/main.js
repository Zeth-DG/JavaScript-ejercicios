// Objetos 
// Estructura de datos que guarda valores en pares key: value
// Representa un objeto del mundo real
// Puede tener tantas propiedades como métodos necesitemos 

const estudiante = {
    id: 1363962,
    nombre: "Jane Doe", 
    estaInscrito: true, 
    cursos: ["Matemáticas I", "Comunicación y trabajo", "Redes"],
    esRegular: true,
    utiles: {nombre: "sacapuntas", color: "rojo"}
}; 
// se pueden almacenar cualquier tipo de dato en el value de una propiedad 

// muestra el objeto completo
console.log(estudiante); 
// las propiedades NO tienen un índice como los arrays (no hay un orden establecido) 
// se accede a algún value especifíco con el id

// objeto.propiedad -> muestra/accede a la propiedad indicada 
console.log( estudiante.nombre );
console.log( estudiante.cursos[2] );
console.log( estudiante.utiles.nombre ); 

console.log( estudiante.id, estudiante.nombre ); //mostrar varios parámetros

// dado que "cursos" es un array, se puede usar un método de array para mostrar cada item en la consola
estudiante.cursos.forEach (function (curso){ 
    console.log(curso) 
});

