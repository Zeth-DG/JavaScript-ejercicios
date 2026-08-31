// Definición de la clase Persona
class Persona {
// PROPIEDADES DE LA CLASE
    id; // no llevan let porque no son variables, son propiedades
    nombre; 
    email;
    carrito;

    constructor (id, nombre, email){
        this.id = id; 
        this.nombre = nombre.toUpperCase() ; 
        this.email = email; 
        this.carrito = [];
    }// constructor

// Metodo: es como una función pero no se declara con function 
    mostrarDatos(){
        console.log(`
            id persona: ${this.id},
            nombre completo: ${this.nombre}, 
            correo electrónico: ${this.email}
            `);
    }//mostrar datos

    agregarProducto (producto){
        this.carrito.push(producto);
    }//agregarProducto

    agregarMultiplesProductos (productos){ 
        productos.forEach((producto) => this.carrito.push(producto));
    }// agregar multiples productos

    //polimorfismo y abstracción 
    calcularTotal() {}

}// class Persona = super class

// la clase Usuario hereda de Persona 
class Usuario extends Persona {

    //propiedad tipo 
    tipo; 

    // constructor usuario
    constructor(id, nombre, email){
        super(id, nombre, email); // super es el constructor de persona y lo armamos como una función, por eso ingresamos los parámetros
        this.tipo = "Usuario normal"; 
    }//constructor 
    //agregamos como parámetro solo los valores que siempre cambian, los que se mantienen (como tipo), se agregan al constructor pero no como parámetro
    
    calcularTotal (){
        console.log("Calculando el precio total para usuario normal")
    }//calcular total
}// class usuario normal  = subclass

class UsuarioPro extends Persona {

    //propiedad tipo
    tipo; 

    constructor(id, nombre, email){
        super(id, nombre, email); 
        this.tipo = "Usuario pro"; 
    }//constructor

    calcularTotal(){
        console.log("Usuario pro: descuento 5%. Calculando...")
    }//calcular total

}//class usuario Pro 

class Main {
    static main(){
        // Usando la clase para crear objetos 
        const julia = new Usuario (123, "Julia Ramírez", "juliar@gmail.com"); 
        const fer = new UsuarioPro (456, "Fer Aguilar", "fernandoa@gmail.com"); //instancia

        julia.agregarProducto("nachos");
        julia.agregarProducto("café"); 
        
        fer.agregarProducto("sabritas"); 
        fer.agregarProducto("boing mango");

        julia.calcularTotal();
        console.log(julia);
        fer.calcularTotal(); 
        console.log(fer);
    }//main 
}// class main 

Main.main(); 

