let txtPessoa = document.getElementById("txtUser")
let imgPessoa =document.getElementById("imgUser")
let btAnt = document.getElementById("btVoltar")
let btProx = document.getElementById("btAvancar")


let cont=0

let nomes = ["Aluno","Professor","Funcionário","Administrador"]
let imagens = ["img/user1.png","img/user2.png","img/user3.png","img/user4.png"]


function Anterior()
{
    if(cont==0)
        cont=3
    else
        cont--
    txtPessoa.innerText = nomes[cont]
    imgPessoa.src= imagens[cont]
}

function Proximo()
{
    if(cont==3)
        cont=0
    else
        cont++
    txtPessoa.innerText = nomes[cont]
    imgPessoa.src= imagens[cont]
}

btAnt.addEventListener("click",Anterior)
btProx.addEventListener("click",Proximo)

