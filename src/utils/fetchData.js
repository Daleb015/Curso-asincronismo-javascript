// Hacemos el import de la dependencia xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// definimos la funcion generará la promesa
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // Creamos un objeto del tipo xmlhttprequest
    const xhttp = new XMLHttpRequest()
    // hacemos el llamado enviando el metodo GET, la url, y activando el asincronismo
    xhttp.open('GET', url_api, true)
    // le indicamos al objeto xhttp que funcion se encargara de procesar la respuesta
    xhttp.onreadystatechange = () => {
      // evaluamos el estado del request son 5.
      if (xhttp.readyState === 4) {
        // evaluamos el codigo de respuesta y usando operador ternarío ejecutamos el resolve o el reject
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error ', url_api))
      }
    }
    // el metodo open es quien realiza la solicitud
    xhttp.send()
  })
}

// Exportamos este modulo, ojo esto es con node js
module.exports = fetchData
