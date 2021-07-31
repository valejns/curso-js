//Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:
//Las mayúsculas se reemplazan por minúsculas.
//Se eliminan los espacios en blanco.
//Reemplaza el caracter "a" por "4".
//Reemplaza el caracter "e" por "3".
//Reemplaza el caracter "i" por "1".
//Reemplaza el caracter "o" por "0".

const frase = prompt("Ingrese una frase")

frase = frase.toLowerCase()
frase = frase.replaceAll('a', '4')
frase = frase.replaceAll('e', '3')
frase = frase.replaceAll('i', '1')
frase = frase.replaceAll('o', '0')

console.log(frase.trim())