//La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:
//Si el número es 1 retorna "El color es negro".
//Si el número es 2 retorna "El color es blanco".
//Si el número es 3 retorna "El color es azul".
//De lo contrario retorna "El color es verde".

function calcularColor(num){

    if (num === 1){
      color = "negro"

    }else if(num === 2){
      color = "blanco"

    }else if (num === 3){
      color = "azul"

    }else{
      color = "verde"
    }

    return "El color es " + color
  }

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

