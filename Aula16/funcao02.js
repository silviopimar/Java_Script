function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(2, 5))

// Se somente um parâmetro for colocado o JS vai retornar um resultado NaN (not a number). Para contornar o problema, basta definir um valor para os números da função

function soma(num1=0, num2=0) {
    return num1 + num2
}
console.log(soma(2))
