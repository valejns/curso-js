//Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
//Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5).
//Si el usuario ingresa el número 10, el programa debe imprimir 55.

const num = parseInt(prompt('Ingrese un número'))
let suma = 0
for (let indx = 1; indx <= num; indx++) {
  suma += indx
}
console.log(suma)