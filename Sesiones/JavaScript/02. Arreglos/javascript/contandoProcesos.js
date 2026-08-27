let n = parseFloat(prompt("Ingresa un numero")); 
let proceso; 

for (i = 0; i < n ; i ++){
    proceso = parseFloat([i]) + 1; // dado que el proceso empezaba en 0, converti el indice a numero y le sume uno para que no empezara en 0
    console.log(`Proceso ${proceso} registrado`); 
} console.log("Todos los procesos han sido registrados con éxito")




