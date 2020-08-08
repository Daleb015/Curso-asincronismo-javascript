function sum (num1, num2) {
  return num1 + num2
}

function calc (num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(6, 2, sum))

function date (callback) {
  console.log(new Date())
  setTimeout(function () {
    const date = new Date()
    callback(date)
  }, 3000)
}

function printADate (dateNow) {
  console.log(dateNow)
}

date(printADate)
