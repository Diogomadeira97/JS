function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}h ${min}min ${sec}s.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotodia.png'
        document.body.style.background = '#ddcb9f'
    } else if (hora < 18) {
        img.src= 'fototarde.png'
        document.body.style.background = '#fd8a43'
    } else {
        img.src='fotonoite.png'
        document.body.style.background = '#714968'
    }
    
}