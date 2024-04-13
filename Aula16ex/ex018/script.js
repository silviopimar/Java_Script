let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //apaga o resultado "Ao todo, temos ?? números cadstrados", caso novos números seja adicionados.
    } else {
        window.alert('Valor inválido ou repetido!')
    }
    num.value = '' // apaga número no campo Número (entre 1 a 100), após ser adicionado 
    num.focus() // faz com que o cursor pisque no campo Número (entre 1 a 100).
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adcione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let posição in valores) {
            soma += valores[posição]
            média = soma / total //Ou valores.length
            if (valores[posição] > maior)
                maior = valores[posição]
            if (valores[posição] < menor)
                menor = valores[posição]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${média}.</p>`
    
    }
}