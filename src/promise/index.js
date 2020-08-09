/* creamos una función que devuelva una promesa, ojo no podemos enviar
directamente la promesa a la variable porque en ese caso se estaría
ejecutando de manera inmediata sin tener carga asincrona. */
const somethingWillHappen = () => {
  // aqui instanciamos una promesa con un metodo resolve y reject
  return new Promise((resolve, reject) => {
    if (true) {
      // tras evaluar el resultado de una operacióin que debiamos realizar usamos resolve
      resolve('Es correcto se ejecuta resolve')
    } else {
      // si por el contrario la ejecución no finalizó bien ejecutamos reject
      reject('Fallo se fue por reject')
    }
  })
}

// Aqui consumimos la variable en donde guardamos la función que
// genera la promesa, esta tiene a su vez acceso a los métodos then y catch que
// permiten tomar la ejecución correcta y errada según corresponda.
somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err))

// una con tiempo
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve('True'), 3000)
    } else {
      const error = new Error('Fallo')
      reject(error)
    }
  })
}

// Aqui la estamos invocando
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err))

// Existen un metodo que permite ejecutar varias promesas a la vez y guardarlas en un arreglo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array de resultados ', response)
  })
  .catch(err => {
    console.log(err)
  })
