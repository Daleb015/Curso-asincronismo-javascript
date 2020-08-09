// creamos nuestra función promesa
const doSomethingAsync = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('do something async'), 3200) 
      : reject(new Error('test error'))
  })
}

// creamos nuestra function async que llamará a la promesa y
// hara una espera por
// el await sin embargo esto se ejecuta despúes del hilo principal
const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

// hacemos el llamado
console.log('Before')
doSomething()
console.log('After')

// aqui creamos otra funcion async pero capturamos la ejecución ocn un try catch
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

// hacemos el llamado
console.log('Before1')
anotherFunction()
console.log('After1')
