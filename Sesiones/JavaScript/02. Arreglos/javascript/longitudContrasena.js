const contrasenas = ["pass", "miPassword", "this", "12345678", "jajajaja"];
let condicion = 8;

//console.log(contraseñas.length); 
//console.log(contraseñas[0].length); 

for (let i = 0; i < contrasenas.length ; i ++){

    if (contrasenas[i].length > condicion){
        console.log(`la contraseña ${[i]} es válida`);
    } else {
        console.log(`la contraseña ${[i]} NO es válida, ingrese una contraseña más larga`)
    }
};