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

calcularTotal() {
    let total = 0;
    this.carrito.forEach((producto) => { total = total + producto.precio });
    return total;
    } // calcularTotal 

}// class Persona 

// Usando la clase para crear objetos 
const julia = new Persona (124, "Julia Ramírez", "julia@gmail.com"); 

//julia.mostrarDatos();
//julia.agregarProducto("nachos");

julia.agregarMultiplesProductos([
    { producto: "hamburguesa", precio: 70 },
    { producto: "coca-cola", precio: 25 },
    { producto: "galleta", precio: 15 }
]); // cuidar que sea un array 

//console.log(julia.calcularTotal());