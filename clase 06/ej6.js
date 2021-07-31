//Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

function promedio (nums){
    num = 0
    for (let i = 0; i < nums.length; i++){
     num = num + nums[i]
    }
    return num / nums.length
  }

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200