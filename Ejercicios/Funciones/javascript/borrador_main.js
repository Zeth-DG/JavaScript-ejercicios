// funcion calcular velocidad de un objeto
// funcion normal 

function speedFunction(distance, time){
    speedCalculation = (distance/time);
    console.log(`
        Función normal: Considerando una distancia de ${distance} km, entre el tiempo que toma recorrerla de: ${time} horas, la velocidad de caminata es: ${speedCalculation} km/hora
        `);
}
        
let walkingSpeed = speedFunction(2.1, 0.5);

// funcion flecha 

const funcionVelocidad = (distancia, tiempo) => {
    calculoVelocidad = (distancia / tiempo); 
    console.log(`
        Función flecha: Si la distancia recorrida es: ${distancia} y el tiempo para recorrerla es: ${tiempo}, entonces mi velocidad de caminata es: ${calculoVelocidad} km/hora
        `)
};

let miVelocidad = funcionVelocidad(2.1, 0.5);

/////////////////////////


// función normal
function volumeSphere (radio){
    let ownSphere = ((4/3) * Math.PI * (Math.pow(radio, 3)));
    console.log(`
        Función normal: Considerando una esfera con radio: ${radio} cm, su volumen es igual a: ${ownSphere} cm^3
        `);
}

let mySphere = volumeSphere(5);

// funcion flecha 
const funcionVolumenEsfera = (miRadio) => {
    let formulaVolumen = ((4/3) * Math.PI * (Math.pow(miRadio, 3)));
    console.log(`
        Función flecha: Si el radio de una esfera es: ${miRadio} cm, entonces su volumen es: ${formulaVolumen} cm^3
        `)
}

let esferaFlecha = funcionVolumenEsfera(5);