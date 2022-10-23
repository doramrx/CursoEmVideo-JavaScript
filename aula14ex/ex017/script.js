function tabuada() {
  let txtn = window.document.getElementById('txtn')
  let tab = window.document.getElementById('seltab')

  if (txtn.value.length == 0) {
    window.alert('Por favor, informe um número')
  } else {
    let n = Number(txtn.value)
    let c = 1
    tab.innerHTML = ''

    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}
