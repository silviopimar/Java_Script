function contar() {
    var início = document.getElementById('txtnumi')
    var fim = document.getElementById('txtnumf')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('res')

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
        //window.alert('[Erro!] Dados inválidos!')
    } else {
        resultado.innerHTML = 'Contando: <br>' //<br> significa quebra de linha 
        var i = Number(início.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var count = i; count <= f; count += p) {
                resultado.innerHTML += `${count} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (var count = i; count >= f; count -= p) {
                resultado.innerHTML += `${count} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }    
}