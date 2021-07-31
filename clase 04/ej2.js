//Escribe un programa que:
//Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese.
//Elimine el segundo elemento.
//Recorra e imprima el arreglo.

const num= prompt("Ingrese un valor")
const lista= []

for(i=1;i<=num; i++){
    lista.push(i)
}

lista.splice(1,1)
console.log(lista)