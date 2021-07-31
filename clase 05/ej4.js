//Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:
//Ingresa una frase> esta es una prueba
//Esta Es Una Prueba

let frase = prompt("Ingrese una frase")
frase = frase.split(" ")

for(let i=0; i<frase.length ; i++){
    frase[i]=(frase[i].charAt(0)).toUpperCase()+frase[i].slice(1)
}

frase = frase.join(" ")
console.log(frase)