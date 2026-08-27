// codigo mejorado con buenas prácticas 

console.log("Funciones comunes"); 
// función velocidad 
let distancia = parseFloat(prompt("Ingresa una distancia en kilometros ")); 
let tiempo = parseFloat(prompt("Ingresa una cantidad de tiempos en horas: "));
let velocidad; 

function calculoVelocidad (d, t){
    v = d/t;
    return v; 
}

velocidad = (calculoVelocidad(distancia, tiempo)).toFixed(2); 

console.log(`
    Si recorres una distancia de ${distancia} km en ${tiempo}, tu velocidad de caminata es: ${velocidad} km/hr
    `)

// función volumen esfera 
let pi = Math.PI; 
let radio = parseFloat(prompt("Ingresa el tamaño del radio de la esfera en cm"))
let volumen ; 

function volumenDeEsfera(r){
    let radioAlCubo = Math.pow(radio, 3); 
    calculoVolumen = (4/3) * radioAlCubo * pi; 
    return calculoVolumen;
}

volumen = (volumenDeEsfera(radio)).toFixed(2); 

console.log(`
    Si el radio de tu esfera es: ${radio}, el volumen será de ${volumen} cm^3
    `)

// 
console.log("Funciones flecha"); 
// función velocidad

