let peso= parseFloat(prompt("Ingrese su peso"))
let altura= parseFloat(prompt("Ingrese su altura"))
let imc= peso /(altura^2)
console.log(imc)

if(imc<18.5){
console.log(`Bajo de peso`)
}
if(imc>18.5 && imc<24.9){
console.log(`Normal`)
}
if(imc>25 && imc<29.9){
console.log(`Sobrepeso`)
}
if(imc >=30){
console.log(`Obeso`)
}