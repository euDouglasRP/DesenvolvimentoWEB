var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var email = document.getElementById("email");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

document.getElementById("botaoSubmit").addEventListener ("click",function(){
    if (nome.value == "" || telefone.value == "" || email.value == "" ||
        cidade.value == "" || estado.value == "") {
        alert("Preencha todos o campos!");
    } else {
        alert("Submit com Sucesso!");
    }
})