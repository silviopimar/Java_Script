function parimpar(num) {
    if (num % 2 == 0) {
        console.log(`O número ${num} é par`)
    } else {
        console.log(`O número ${num} é ímpar`)
    }

}
let res = parimpar(12)

// Uma outra forma de fazer
function parimpar(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
console.log(parimpar(11))