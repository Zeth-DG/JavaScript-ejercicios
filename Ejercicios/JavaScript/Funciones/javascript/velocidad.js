// funcion calcular velocidad de un objeto
// funcion normal 

function speedFunction(distance, time){
    finalSpeed = (distance/time);
    console.log(`
        Considerando una distancia de ${distance} km, entre el tiempo que toma recorrerla de: ${time} horas, la velocidad de caminata es: ${finalSpeed} km/hora
        `);
}
        
let walkingSpeed = speedFunction(2.1, 0.5);

// funcion flecha 

const funcionVelocidad = (distancia, tiempo) => {
    distanciaFinal = (distancia / tiempo); 
    console.log(`
        Si la distancia recorrida es: ${distancia} y el tiempo para recorrerla es: ${tiempo}, entonces mi velocidad de caminata es: ${distanciaFinal} km/hora
        `)
};

let miVelocidad = funcionVelocidad(2.1, 0.5)