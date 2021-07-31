//Escribe una función llamada saludar que reciba un objeto que representa una persona
//y retorne la frase como se muestra a continuación:

function saludar(objeto){
    if (objeto.edad) {
    return (`Hola ${objeto.nombre}, tienes ${objeto.edad} años}`)
    }else{
        return (`Hola ${objeto.nombre}`)
    }
}

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan