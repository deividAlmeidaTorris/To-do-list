const button = document.querySelector('.botao-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');
let minhaListaDeItens = []

function AdicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ""
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
           <img src="./img/checked.png" alt="imagem-de-fundo" onclick="concluirTarefa(${posicao})">
           <p> ${item.tarefa}</p>
           <img src="./img/trash.png" alt="img-lixeira" onclick="deletarIten(${posicao})">
        </li>

        `
    })
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}
function concluirTarefa(posicao) {

    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarIten(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()


}

function recarregarTarefas() {

    const tarefasDolocalStorage = localStorage.getItem('lista')
    if(tarefasDolocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDolocalStorage)
    }
   
    mostrarTarefas()

}
recarregarTarefas()

button.addEventListener("click", AdicionarNovaTarefa)