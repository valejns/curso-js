//Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase.
//Por ejemplo:
//Ingresa una frase> Hasta la próxima
//La frase tiene 4 caracteres "a"

const frase =prompt("Ingrese una frase:")
cont=0

for(let i=0; i<frase.length;i++){
    if (frase[i]=='a'){
        cont += 1
    }
}

console.log(`la frase tiene ${contar} caractreres "a"`)