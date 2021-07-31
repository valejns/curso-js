//Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos:
//"Pedro", "Pablo", "María", "Juan", "Diana".
//Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
//Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
//Recorre el arreglo e imprímelo.

const nombres= ["Pedro", "Pablo", "María", "Juan", "Diana"]

nombres.push(prompt("Ingrese un nombre"))

nombres[2]= prompt("Ingrese otro nombre")

console.log(nombres)