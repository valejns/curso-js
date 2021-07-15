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