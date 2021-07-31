//Escribe una función llamada posPares que reciba un arreglo
//y retorne un nuevo arreglo con los valores en las posiciones pares del arreglo que llega como argumento.

function posPares(arr){
    return(arr.filter((item,element) => (element%2 === 0)))
}

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []