var imagens = ["image/Administracao.png","image/Aluno.png","image/Funcionario.png","image/Professor.png"];
var usuarios = ["Administração","Aluno","Funcionário","Professor"];
var indice = 0;

function usuarioAnterior() {
    if (indice > 0) {
        indice--;
    } else {
        indice = 3;
    }
    atualizaImageEUsuario();
}

function usuarioPosterior() {
    if (indice < usuarios.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    atualizaImageEUsuario();
}

function atualizaImageEUsuario() {
    document.getElementById('cabecalho').textContent = usuarios[indice];
    document.getElementById('image').src = imagens[indice];
}