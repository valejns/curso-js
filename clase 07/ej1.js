//Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:

const pedro= {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}

//Ahora haz lo siguiente:
//Imprime en consola el valor de la llave edad.
//Agrega una propiedad con llave estatura y valor 1.8.
//Elimina la propiedad con llave activo.
//Recorre todas las propiedades e imprímelas en consola
//(una línea por propiedad y separando la llave y el valor con dos puntos :).



console.log(pedro.edad)

pedro.estatura= 1,8

delete pedro.activo

for(let i in pedro){
console.log(`${i}: ${pedro[i]}`)
}