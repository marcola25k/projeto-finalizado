const listaArray = [];
const resultado = document.getElementById("resultado"); // Elemento para exibir o resultado

function atualizarlista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens

    listaArray.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function adicionarAmigo() {
    const input = document.getElementById("amigos");
    const nome = input.value.trim(); 

    if (nome) {
        listaArray.push(nome);
        input.value = "";
        atualizarlista();
    } else {
        alert("Este campo precisa ter um nome");
    }
}

function sortearAmigo() {
    if (listaArray.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio.");
        return;
    }

 
    for (let i = listaArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaArray[i], listaArray[j]] = [listaArray[j], listaArray[i]];
    }

    resultado.innerHTML = ""; 

    
    for (let i = 0; i < listaArray.length; i++) {
        const amigo = listaArray[i];
        const amigoSecreto = listaArray[(i + 1) % listaArray.length]; 
        const li = document.createElement("li");
        li.textContent = `${amigo} -> ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}
