// Hacemos el import de la dependencia xmlhttprequest
const XMLHttpRequest = require('xmlhtprequest').XMLHttpRequest

// definimos la funcion que hará el callback al pasarle la url y otra función como parámetro
function fetchData (url_api, callback) {
  // Creamos un objeto del tipo xmlhttprequest
  let xhttp = new XMLHttpRequest()
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
