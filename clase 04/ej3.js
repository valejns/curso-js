//Imprime la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
["Pablo", "Maria", "Pedro"],
["Diana", "Juan", "Federico"],
 ["Roberto", "Daniel", "Sandra"]
]
//Grupo 1:
//  Pablo
//  Maria
//  Pedro
//Grupo 2:
//  Diana
//  Juan
//  Federico
//Grupo 3:
//  Roberto
//  Daniel
//  Sandra


for(let i=0; i<mat.length; i++){

    console.log(`grupo ${i+1}:`)

    for(let x=0; x<mat[i].length; x++){

      console.log(`${mat[i][x]}`)
    }
}
