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
    let cpf = document.getElementById("cpf")
   
        let numbers, digits, sum, i, result;
        
        if (typeof cpf !== 'string' || cpf.length !== 11 || /[^0-9]/.test(cpf)) {
        return false;
        }
        
        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;
        
        for (i = 10; i > 1; i--) {
        sum += numbers.charAt(10 - i) * i;
        }
        
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        
        if (result !== parseInt(digits.charAt(0))) {
        return false;
        }
        
        numbers = cpf.substring(0, 10);
        sum = 0;
        
        for (i = 11; i > 1; i--) {
        sum += numbers.charAt(11 - i) * i;
        }
        
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        
        if (result !== parseInt(digits.charAt(1))) {
        return false;
        }
        
        return true;
       

})
