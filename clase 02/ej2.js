let num= parseInt(Math.random()*10)
let num2= prompt("Adivine el número")

if (num === num2){
console.log(`Felicitaciones, ese era!`)
}
else{
console.log(`Lo siento, intenta nuevamente!`)
console.log(num)
}