let contraseñaCorrecta = "admin1234";
let intentos = 0;
let maxIntentos = 3;  



do {
    let contraseña = prompt("Ingresa tu contraseña");
    intentos = intentos +1 ;
    
    if (contraseña === contraseñaCorrecta){
        console.log("Acceso concedido");
        break;
    } else {
        console.log("Acceso denegado. Intentos restantes: " + (maxIntentos-intentos))
    }
} while (intentos < maxIntentos)