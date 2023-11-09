var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var cpf = document.getElementsById("cpf");
var email = document.getElementById("email");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

document.getElementById("botaoSubmit").addEventListener ("click",function(){
    if (nome.value == "" || telefone.value == "" || email.value == "" ||
        cidade.value == "" || estado.value == "") {
        alert("Preencha todos o campos!");
    } else {
        alert("Submit com Sucesso!");
    }
})

document.getElementById("btVerificaEmail").addEventListener("click", function(){
    let email = document.getElementById("email").value;
    let cont = 0;

    for(let i = 0 ; i <= email.length ; i++){
        if(email.charAt(i) == "@" || email.charAt(i) == "."){
            cont++;
        }
    }
alert("Contador "+cont)
    if(cont >= 2){
        alert("email valido!!!")
        return true;
    }
    else{
        alert("Email invalido !!")
        return false;
    }

})

document.getElementById("btVerificaCPF").addEventListener("click", function(){

    

})
