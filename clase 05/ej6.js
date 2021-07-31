//Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común.
//Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".
//Ingresa frase 1> German
//Ingresa frase 2> Gabriela
//Los caracteres en común son: G, e, r, a

const frase= prompt("Ingrese una frase")
const frase2= prompt("Ingrese otra frase")
let matches= []

for (letra in frase){
    for (letra2 in frase2){
        if ((frase[letra]=== frase2[letra2])&(matches.includes(frase[letra]===false))){
                matches.push(frase[letra])
            }
        }
    }

if (matches.length>0){
    console.log(`Los caracteres en común son ${matches.join(",")}`)
}

else{
    console.log(`No se encontraron caracteres en común`)
}