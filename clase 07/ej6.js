//Crea una variable llamada persona de tipo objeto literal con las siguientes propiedades:

const persona = {
    peso: 65,
    estatura: 1.8,
    bmi: function () {
      return this.peso / this.estatura ** 2;
    }
  }

  console.log(persona.bmi());