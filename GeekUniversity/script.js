function alertar(){
    alert('Você clicou no botão!!');
}

function mensagem(){
var p = document.getElementsByTagName('p');

p[0].innerHTML = "Manda um salve!*";

}

function limpar(){
    var p = document.getElementsByTagName('p');

    p[0].innerHTML = "";
}