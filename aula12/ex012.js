var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora}h`)

if (hora < 4) {
  console.log('Boa madrugada')
} else if (hora < 12) {
  console.log('Boa dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else if (hora <= 23) {
  console.log('Boa noite')
}
