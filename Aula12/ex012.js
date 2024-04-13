var hora_agora = new Date()
var hora = hora_agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12 && hora > 6) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 0 && hora < 6) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}