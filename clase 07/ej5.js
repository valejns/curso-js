//Escribe una función llamada frecuencias que reciba un string y retorne un objeto
//con el número de veces que aparece cada carácter (exceptuando el espacio en blanco):

function frecuencias(string){
    let cant = {};
    let string1 = string.replace(" ", "");
      for (let i of string1){
          if(cant[i]){
              cant[i]++;
          }else{
              cant[i] = 1;
          }
      }

      return cant;
  }

console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }