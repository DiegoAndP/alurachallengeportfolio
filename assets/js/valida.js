const botaoSubmit = document.querySelector(".contato__botao");
const ul = document.querySelector('.contato__lista');
const form = document.querySelector("#formulario");

botaoSubmit.addEventListener("click", function(event){
    event.preventDefault();
    dados = coletaDados(form);
    erros = validaEntradas(dados);
    montaLista('contato__lista-erros');
    mostraErros(erros);

});

function coletaDados(form) {
    let dados = {
    nome: form.nome.value,
    email: form.email.value,
    assunto: form.assunto.value,
    mensagem: form.mensagem.value
    }

    return dados;
}

function validaEntradas() {
    let erros = [];

    if (dados.nome == "") {
        erros.push("Campo nome precisa ser preenchido.");
    } else if (dados.nome.length > 50) {
        erros.push("Campo nome só precisa ser abaixo de 50 caractéres")
    }
    
    if (dados.email == "") {
        erros.push("Campo para Email precisa ser preenchido");
    }

    if (dados.assunto == "") {
        erros.push("Campo para Assunto precisa ser preenchido");
    }

    if (dados.mensagem == "") {
        erros.push("Campo para Mensagem precisa ser preenchido");
    } else if (dados.mensagem.length < 50) {
            erros.push("Campo para mensagem requer ao menos 50 caractéres");
        }

        return erros;
    }

    
function montaLista(classe){
    if (ul.childNodes.length > 0){
        limpaLista();
    }erros.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.classList.add(classe);
    });
}

function mostraErros() {
        const lista = document.querySelectorAll('.contato__lista-erros');
        for (let i = 0; i < lista.length; i++){
            lista[i].innerHTML = erros[i];
        }
        return console.log(lista);
}

function limpaLista() {
    ul.innerHTML = "";
}