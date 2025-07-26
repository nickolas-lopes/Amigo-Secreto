let amigos = []
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo == ''){
        alert("Por favor, insira um nome válido.");
    }
    else{
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    }
    listarAmigos()
    
}
function listarAmigos() {
    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = "";
    for (let amigo = 0; amigo < amigos.length; amigo++){
        let item = document.createElement("li");
        item.textContent = amigos[amigo];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    let numAleatorio = parseInt(Math.random() * amigos.length);
    for (let amigo = 0; amigo < amigos.length; amigo++){
        if (numAleatorio == amigo){
            document.querySelector('#listaAmigos').style.display = 'none'
            let sorteado = document.getElementById("resultado");
            sorteado.textContent = `O amigo sorteado foi: ${amigos[amigo]}`;
            sorteado.classList.add('result-list')
        }
    }
}