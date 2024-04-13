function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formul_ano = document.getElementById('txtano')
    var resultado = document.querySelector('div#res') //ou var formul_ano = document.getElementById('res')
    if (formul_ano.value.length == 0 || Number(formul_ano.value) > ano) {
        window.alert('[Erro] Insira dados coerentes e tente novamente!')
    } else {
        var formul_sex = document.getElementsByName('radsex')
        var idade = ano - Number(formul_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formul_sex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 11) {
                //criança
                img.setAttribute('src', 'h_crianca.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'h_jovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'h_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'h_idoso.png')
            }
        } else if (formul_sex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 11) {
                //criança
                img.setAttribute('src', 'm_crianca.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'm_jovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'm_adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'm_idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        resultado.appendChild(img)

    }
}