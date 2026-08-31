let envio = 59; 
let descuentoPro = 0.05; 
let envioGratisRegular = 299.99; 
let envioGratisPRO = 199.99; 

// Definición de la clase Persona
class Persona {
// PROPIEDADES DE LA CLASE
    id; // no llevan let porque no son variables, son propiedades
    nombre; 
    email;
    carrito;

    constructor (id, nombre, email){
        this.id = id; 
        this.nombre = nombre; 
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


class Usuario extends Persona { 
    tipo; 

    constructor (id, nombre, email){
        super(id, nombre, email);
        this.tipo = "regular"; 
    }

    calcularTotal (){
        const subTotal = super.calcularTotal(); 
        let totalRegular = 0; 
        if (subTotal <= envioGratisRegular){
            totalRegular = subTotal + envio; 
        } else {
            totalRegular = subTotal 
        }; 
        return totalRegular; 
    };

}// clase hija, usuario regular

class UsuarioPRO extends Persona {
    tipo; 

    constructor(id, nombre, email){
        super(id, nombre, email);
        this.tipo = "PRO"; 
    }//constructor 

    calcularTotal(){
        const subTotalPRO = super.calcularTotal(); 
        let totalPRO = 0; 
        totalPRO = subTotalPRO - (subTotalPRO*descuentoPro);
        if (subTotalPRO <= envioGratisPRO){
            totalPRO = totalPRO + envio; 
        } 
        return totalPRO; 

    }//metodo calcular Total usuario PRO

}//clase hija, usuario pro 


class Main {
    static main() {
        // crear y probar usuario regular 
        const unUsuarioRegular = new Usuario (345, "Gustavo Ignacio Sardinas", "sardinacio@outlook.com"); 
        unUsuarioRegular.agregarMultiplesProductos([{producto: "hamburguesas", precio: 200},{producto: "coca-cola", precio: 25}]);

        // crear y probar usuario pro
        const unUsuarioProo = new UsuarioPRO (567, "Maiceno Dog", "maiceno@gmail.com"); 
        unUsuarioProo.agregarMultiplesProductos([{producto: "hamburguesas", precio: 200},{producto: "coca-cola", precio: 25}]);

        // mostrar resultados
        //usuario regular 
        console.log("-----usuario regular-----"); 
        console.log(unUsuarioRegular);
        console.log(`su total es: $${unUsuarioRegular.calcularTotal()} MXN, su pedido es: `, unUsuarioRegular.carrito);

        //usuario pro
        console.log("----usuario PRO------"); 
        console.log(unUsuarioProo); 
        console.log(`su total es: $${unUsuarioProo.calcularTotal()} MXN, su pedido es: `, unUsuarioProo.carrito); 

    }
}//clase main

Main.main();

