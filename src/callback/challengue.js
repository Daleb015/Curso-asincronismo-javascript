// Hacemos el import de la dependencia xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// definimos la url
const API = 'https://rickandmortyapi.com/api/character/'

// definimos la funcion que hará el callback al pasarle la url y otra función como parámetro
function fetchData (url_api, callback) {
  // Creamos un objeto del tipo xmlhttprequest
  const xhttp = new XMLHttpRequest()
  // hacemos el llamado enviando el metodo GET, la url, y activando el asincronismo
  xhttp.open('GET', url_api, true)
  // le indicamos al objeto xhttp que funcion se encargara de procesar la respuesta
  xhttp.onreadystatechange = function (event) {
    // evaluamos el estado del request son 5.
    if (xhttp.readyState === 4) {
      // evaluamos el codigo de respuesta
      if (xhttp.status === 200) {
        // si la respuesta es correcta llamamos a la funcion a la que
        // hay que hacer callback pasando el error como ull
        // aqui siempre recibimos un texto con responsetext entonces lo par
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        // en el caso en que el codigo de respuesta no sea 200, se generara un objeto error
        // posteriormente se hará el callback pasando como parámetro el error y en el objeto null
        const error = new Error('Error ' + url_api)
        return callback(error, null)
      }
    }
  }
  // el metodo open es quien realiza la solicitud
  xhttp.send()
}

// Hacemos una llamado a la anterior función
// como parámetro pasamos otra función anónima

fetchData(API, function (error1, data1) {
  // evaluamos si error no es null
  if (error1) {
    return console.log(error1)
  }

  // volvemos a hacer un callback con los datos de la primera función
  fetchData(API + data1.results[0].id, function (error2, data2) {
    // Se evalua error dos
    if (error2) return console.log(error2)
    // De no haber error se hace un tercer llamado con la respuesta dos
    fetchData(data2.origin.url, function (error3, data3) {
      // Se evalua error
      if (error3) {
        return console.log(error3)
      }

      // Se imprime info de la api
      console.log(data1.info.count)
      console.log(data2.name)
      console.log(data3.dimension)
    })
  })
})
