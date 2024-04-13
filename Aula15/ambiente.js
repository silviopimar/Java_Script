let num = [4, 6, 5, 2, 3]
num.sort()
num.push(1)
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor do elemento na posição 1 é ${num[1]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 2 está na posição ${pos}`)
}
