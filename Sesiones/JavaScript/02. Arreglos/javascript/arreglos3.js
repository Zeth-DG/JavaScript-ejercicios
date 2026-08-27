const paises = ["México", "Nigeria", "Vietnam", "Colombia"];
const inverso = [];

// Aunque se puede usar un forEach
// paises.forEach((pais) => console.log(pais));

// el for tiene la ventaja de poder incluir muchas instrucciones
// el forEach solo es para instrucciones cortas/sencillas
// Las partes de un for (inicio; condición; incremento/decremento)

for (let i = 0; i < paises.length; i ++){
    console.log( paises[i] ); // nombre del arreglo y el indice es el valor de i
}

for(let i = 10; i >= 0; i--){
    inverso.push(i);
    console.log(inverso);
}
