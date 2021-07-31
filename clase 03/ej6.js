//Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar.
//La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

const num = parseInt(Math.random() * 10)

while(true){
  num2 = parseInt(prompt("Ingrese un número: "))

  if (num === num2){
    console.log("Ganaste!")
    break
  }
  else{
    console.log("Perdiste, intenta nuevamente!")
    continue
  }}