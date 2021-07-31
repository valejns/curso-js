//Escribe una función llamada descifrar que reciba un string y un objeto.
//Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

function descifrar(string,object){
for (let i in object){
    string= string.replaceAll(i,object[i])
}
return string
}
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: s })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"