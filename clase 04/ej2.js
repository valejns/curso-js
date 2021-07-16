const num= prompt("Ingrese un valor")
const lista= []

for(i=1;i<=num; i++){
    lista.push(i)
}

lista.splice(1,1)
console.log(lista)