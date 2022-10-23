function verificar() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var fAno = window.document.getElementById('txtano')
  var ano = Number(txtano.value)
  var res = window.document.getElementById('res')

  if (ano.lenght == 0 || ano > anoAtual || ano <= 0) {
    window.alert('Erro! Verifique os dados e tente novamente')
  } else {
    var fsex = window.document.getElementsByName('radsex')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    var idade = anoAtual - ano
    var sexo = ''

    if (fsex[0].checked) {
      sexo = 'homem'

      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/homem-bebe.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/homem-jovem.png')
      } else if (idade < 55) {
        img.setAttribute('src', 'imagens/homem-adulto.png')
      } else {
        img.setAttribute('src', 'imagens/homem-velho.png')
      }
    } else {
      sexo = 'mulher'

      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/mulher-bebe.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/mulher-jovem.png')
      } else if (idade < 55) {
        img.setAttribute('src', 'imagens/mulher-adulta.png')
      } else {
        img.setAttribute('src', 'imagens/mulher-velha.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    res.appendChild(img)
  }
}
