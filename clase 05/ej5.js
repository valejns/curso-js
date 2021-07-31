//Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:
//Ingresa una frase> esta es una prueba
//esta
//es
//una
//prueba

let frase = prompt('Ingrese una frase:')
frase= frase.split(' ')

for (let i = 0; i < frase.length; i++) {
    console.log(frase[i])
}