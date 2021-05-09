function contar() {

    var ini = document.querySelector('input#txti').value
    let fim = document.querySelector('input#txtf').value
    let passo = document.querySelector('input#txtpas').value
    let res = document.querySelector('div#res')

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!!')
    } else {
        res.innerHTML = 'Contando... <br><br>'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            for (let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += ` \u{1F3C1}`
    }
}

