/*
let nota = 0

if (nota >= 90 && nota <= 100) {
  console.log('Nota A')
} else if (nota >= 80 && nota <= 89) {
  console.log('Nota B')
} else if (nota >= 70 && nota <= 79) {
  console.log('Nota C')
} else if (nota >= 60 && nota <= 69) {
  console.log('Nota D')
} else if (nota <= 59 && nota >= 0) {
  console.log('Nota F')
} else {
  console.log('Nota invalida')
}
*/
function getScore(nota) {
  if (nota >= 90 && nota <= 100) {
    console.log('Nota A')
  } else if (nota >= 80 && nota <= 89) {
    console.log('Nota B')
  } else if (nota >= 70 && nota <= 79) {
    console.log('Nota C')
  } else if (nota >= 60 && nota <= 69) {
    console.log('Nota D')
  } else if (nota <= 59 && nota >= 0) {
    console.log('Nota F')
  } else {
    console.log('Nota invalida')
  }
}

getScore(71)
