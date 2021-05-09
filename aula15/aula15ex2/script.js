function tabuada() {
    let num = document.getElementById('txtn').value
    if (num.length == 0){
        window.alert('Por favor, digite um número!!')
    } else {
        let res = document.getElementById('res')
        res.innerHTML = ''
        let n = Number(num)
        let tab = document.createElement('select')
        tab.size = '10'
        res.style.textAlign = 'center'
        res.appendChild(tab)
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
}