alert("sfjksdafhjksd")

let txtNome = document.getElementById("nome")
let txtCpf = document.getElementById("cpf")
let txtEmail = document.getElementById("email")
let txtFone = document.getElementById("fone")
let txtCep = document.getElementById("cep")
let btEnviar = document.getElementById("botEnviar")
botEnviar.addEventListener("click",verificar)

function verificar()
{

    if(txtNome.value==""||txtCpf.value==""||txtEmail.value==""||txtFone.value==""||txtCep.value==""){
        alert("Favor preencher todos os campos!!!!")
        
    }
    else{
        if(verificarEmail()){
            alert("Dados enviados com sucesso!!!!")
        }
        
        
    }
    
}

function verificarEmail()
{
    let txtEmail = document.getElementById("email").value
    let cont=0;
    for (let i=0; i< txtEmail.length; i++) {
        if(txtEmail.charAt(i)=='@'||txtEmail.charAt(i)=='.')
            cont++
      }
    alert("cont ="+cont)

    if(cont>1){
        alert("E-mail válido!!!!")
        return true
    }
    else{
        alert("E-mail inválido!!!!")
        return false
    }
    
}

