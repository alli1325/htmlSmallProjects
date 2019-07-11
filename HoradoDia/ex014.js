function carregar(){
var msg = window.document.querySelector('div#msg');
var img = window.document.querySelector('img#imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'manha.png';
    document.body.style.background = '#e0a334'
}else if (hora >= 12 && hora < 18){
    //BOA TARDE
    img.src = 'tarde.png';
    document.body.style.background = '#8f5c4b'
}else {
    //BOA NOITE
    img.src = 'noite.png';
    document.body.style.background = '#041f30'
}
}