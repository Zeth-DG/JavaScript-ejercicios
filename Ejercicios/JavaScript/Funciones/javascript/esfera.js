

// función normal
function volumeSphere (radio){
    let ownSphere = ((4/3) * Math.PI * (Math.pow(radio, 3)));
    console.log(`Considerando una esfera con radio: ${radio} cm, su volumen es igual a: ${ownSphere} cm^3`);
}

let mySphere = volumeSphere(5);

// funcion flecha 
const funcionVolumenEsfera = (miRadio) => {
    let formulaVolumen = ((4/3) * Math.PI * (Math.pow(miRadio, 3)));
    console.log(`
        Si el radio de una esfera es: ${miRadio} cm, entonces su volumen es: ${formulaVolumen} cm^3
        `)
}

let esferaFlecha = funcionVolumenEsfera(5);