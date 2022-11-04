const num = window.document.getElementById('txtn')
const lista = window.document.getElementById('lista')
const res = window.document.getElementById('res')
const array = []

function eNumero(n){
  if(n.value < 1 || n.value > 100){
    return false
  }else{
    return true
  }
}

function naLista(n, arr){
  if(arr.indexOf(n.value) != -1){
    return false
  }else{
    return true
  }
}

function adicionar(){
  if(eNumero(num) && naLista(num, array)){
    array.push(num.value)
    const item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
    num.value = ''
    num.focus()
  }else{
    window.alert('Valor inválido ou já encontrado na lista')
  }
} 

function finalizar(){
  if(array.length == 0){
    window.alert('Adicione valores antes de finalizar')
  }else{

    let maior = array[0]
    let menor = array[0]
    let soma = 0

    for(let i in array){
      soma += +array[i]
      if(array[i] > maior){
        maior = array[i]
      }else if(array[i] < menor){
        menor = array[i]
      }
    }

    var media = (soma/array.length)

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${array.length} números cadastrados.<br></p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.<br></p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.<br></p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<br></p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.`
  }
}

