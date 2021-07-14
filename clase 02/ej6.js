let num= parseInt(prompt("Ingrese un valor"))

 if ((num % 3 === 0) && (num % 5 === 0)){
 console.log(`bingbong`)
}
else if (num % 5 === 0){
 console.log(`bong`)
}
else if (num % 3 === 0){
 console.log(`bing`)
}
else{
console.log(num)
}