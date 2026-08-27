const calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0]; 
let sumatoria = 0; 
let promedio = 0; 


for (let i = 0; i < calificaciones.length; i++){
    sumatoria = sumatoria + calificaciones[i] ;
    promedio = (sumatoria / calificaciones.length).toFixed(1) ;
   
} console.log(`La evaluación promedio de este producto es: ${promedio}`); 