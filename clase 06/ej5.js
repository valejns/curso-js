//Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

function capitalizar(cadena){
cadena = cadena.split(" ")

    for (a in cadena){
    cadena[a] = (cadena[a].slice(0,1).toUpperCase() + cadena[a].slice(1, cadena[a].length))
    }

cadena = cadena.join(" ")
return cadena
}

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"