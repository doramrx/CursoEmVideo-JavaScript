function contar() {
  var inicio = window.document.getElementById('txtinicio')
  var fim = window.document.getElementById('txtfim')
  var passo = window.document.getElementById('txtpasso')
  var res = window.document.getElementById('res')

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = '<p><br>Impossível contar!</p>'
    window.alert("Erro! Faltam dados")

  } else {
    res.innerHTML = `<p><br>Contando...</p>`

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
      window.alert("Passo Inválido! Considerando PASSO 1!")
      p = 1
    }

    if(i > f){
      for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }else{
      for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F6A9}`
  }
}
